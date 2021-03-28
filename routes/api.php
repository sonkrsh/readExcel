<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MakeCarController;
use App\Http\Controllers\ModelCarController;

Route::group([
    'middleware' => 'jwt.auth',
    'prefix' => 'auth/admin'
], function ($router) {
    Route::get('checkToken', [AuthController::class,'checkToken']);
    Route::post('storeMake', [MakeCarController::class,'store']);
    Route::get('getMake', [MakeCarController::class,'index']);

    Route::post('storeModel', [ModelCarController::class,'store']);
    Route::get('getModel', [ModelCarController::class,'index']);
});

Route::group([
    'prefix' => 'auth/admin'
], function ($router) {
    //Route::get('checkToken', [AuthController::class,'checkToken']);
    Route::post('login', [AuthController::class,'login']);
    Route::post('logout',[AuthController::class,'logout']);
    Route::post('adminUserVerify', [AuthController::class,'verify']);


    
    Route::post('refresh',[AuthController::class,'refresh']);
    Route::post('register',[AuthController::class,'register']);
    Route::post('me', [AuthController::class,'me']);

});