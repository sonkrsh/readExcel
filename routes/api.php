<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FuelCarController;
use App\Http\Controllers\MakeCarController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\ModelCarController;
use App\Http\Controllers\AddImagesController;
use App\Http\Controllers\BatteryModelController;
use App\Http\Controllers\BatteryCompanyController;
use App\Http\Controllers\BatteryProductController;

Route::group([
    'middleware' => 'jwt.auth',
    'prefix' => 'auth/admin'
], function ($router) {
    Route::get('checkToken', [AuthController::class,'checkToken']);
    Route::post('storeMake', [MakeCarController::class,'store']);
    

    Route::post('storeModel', [ModelCarController::class,'store']);
   

    Route::post('storeFuel', [FuelCarController::class,'store']);
   

    Route::post('storeBatteryCompany', [BatteryCompanyController::class,'store']);
    Route::get('getBatteryCompany', [BatteryCompanyController::class,'index']);

    Route::post('storeBatteryModel', [BatteryModelController::class,'store']);
    Route::get('BatteryCompanyModel', [BatteryModelController::class,'index']);
    Route::post('image', [BatteryModelController::class,'create']);

    Route::post('storeLocation', [LocationController::class,'store']);
    

    Route::get('getBatteryProduct', [BatteryProductController::class,'index']);
    Route::post('storeBatteryProduct', [BatteryProductController::class,'store']);

    Route::post('storeImages', [AddImagesController::class,'store']);
    
});

Route::group([
    'prefix' => 'auth/admin'
], function ($router) {
    Route::get('getMake', [MakeCarController::class,'index']);
    Route::get('getModel', [ModelCarController::class,'index']);
    Route::get('getFuel', [FuelCarController::class,'index']);
    Route::get('getLocation', [LocationController::class,'index']);




    //Route::get('checkToken', [AuthController::class,'checkToken']);
    Route::post('login', [AuthController::class,'login']);
    Route::post('logout',[AuthController::class,'logout']);
    Route::post('adminUserVerify', [AuthController::class,'verify']);

    Route::get('test',[AuthController::class,'test']);
    
    Route::post('refresh',[AuthController::class,'refresh']);
    Route::post('register',[AuthController::class,'register']);
    Route::post('me', [AuthController::class,'me']);

});


Route::group([
    'prefix' => 'v1'
], function ($router) {
    Route::post('makeId', [MakeCarController::class,'getModelbyMakeId']);
    Route::post('getProducts', [BatteryProductController::class,'getProductsByMakeModelFuelLocationId']);
});

   
