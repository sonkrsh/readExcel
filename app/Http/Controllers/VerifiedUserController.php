<?php

namespace App\Http\Controllers;

use App\Models\VerifiedUser;
use Illuminate\Http\Request;

class VerifiedUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $makeCar = new VerifiedUser();
        $makeCar->userName = $request->name;
        $makeCar->userNumber = $request->phoneNo;
        $makeCar->save();
        return response()->json(['message' => 'success'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\VerifiedUser  $verifiedUser
     * @return \Illuminate\Http\Response
     */
    public function show(VerifiedUser $verifiedUser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\VerifiedUser  $verifiedUser
     * @return \Illuminate\Http\Response
     */
    public function edit(VerifiedUser $verifiedUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\VerifiedUser  $verifiedUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, VerifiedUser $verifiedUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\VerifiedUser  $verifiedUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(VerifiedUser $verifiedUser)
    {
        //
    }
}
