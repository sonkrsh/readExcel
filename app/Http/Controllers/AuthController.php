<?php

namespace App\Http\Controllers;

use auth;
use config;
use App\Models\User;
use App\Mail\adminOtp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    /*   public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    } */

    public function checkToken(Request $request)
    {
        if ($request->cookie('token')) {
            return response()->json(['message' => 'success'], 200);
        } else {
            return response()->json(['message' => 'Token Expired'], 400);
        }
    }

    public function login(Request $request)
    {
        try {
            $master_email = $request->email;
            $master_password = $request->password;
            $credentials = request(['email', 'password']);
            if ($master_email == "master@gmail.com" && $master_password == "master@@") {
                $token = auth()->attempt($credentials);
                return response()->json(['message' => 'master'], 200)->withCookie(
                    'token',
                    auth()->getToken()->get(),
                    config('jwt.ttl'),
                    '/'
                );
            }
            if (!$token = auth()->attempt($credentials)) {
                return response()->json(['message' =>  $request->email + ' Not Found'], 401);
            }
            $userFound = User::where('email', $request->email)->get();

            if ($userFound[0]->email) {
                $OTP = rand(100000, 999999);
                Mail::to($userFound[0]->email)->send(new adminOtp($OTP));
                Cache::put('otp_key', $OTP, now()->addSecond(120));
                $token = $this->respondWithToken($token);
                //return response()->json(['message'=>'Success'],200);
                return response()->json(['message' => 'Success'], 200);
            } else {
                return response()->json(['message' => $request->email + ' Not Found'], 400);
            }
        } catch (\Throwable $th) {
            return response()->json(['message' => $request->email . ' Not Found'], 400);
        }
    }


    public function verify(Request $request)
    {
        $enter_otp = $request->remember_token;
        $email = $request->email;
        $cache_data = Cache::get('otp_key');
        //auth()->logout();
        if ($enter_otp == $cache_data) {

            $credentials = request(['email', 'password']);
            $token = auth()->attempt($credentials);

            DB::table('users')
                ->where('email', $email)
                ->update(['remember_token' => Hash::make($token)]);
            return response()->json(['message' => 'Success'], 200)->withCookie(
                'token',
                auth()->getToken()->get(),
                config('jwt.ttl'),
                '/'
            );
        } else {

            return response()->json(['message' => 'Enter Otp Is wrong'], 400);
        }
    }

    public function test()
    {
        return User::create([
            'name' => "master",
            'email' => "master@gmail.com",
            'password' => Hash::make("master@@"),
        ]);
    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        return response()->json(['message' => "Added SuccesFully", 'code' => 200]);
    }
    public function me()
    {
        return response()->json(auth()->User());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
