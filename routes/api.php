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
use App\Http\Controllers\VerifiedUserController;
use App\Http\Controllers\BatteryCompanyController;
use App\Http\Controllers\BatteryProductController;
use App\Http\Controllers\GlassCategoryController;
use App\Http\Controllers\GlassPriceController;
use App\Http\Controllers\ReadExcelController;

Route::group([
    'middleware' => 'jwt.auth',
    'prefix' => 'auth/admin'
], function ($router) {
    //Route::post('readExcel', [FuelCarController::class, 'googlesheet']);
    Route::post('readExcel', [ReadExcelController::class, 'store']);
    Route::get('fetchSheetName', [ReadExcelController::class, 'index']);
    Route::post('sendMail', [ReadExcelController::class, 'sendMail']);
    Route::get('checkToken', [AuthController::class, 'checkToken']);
});

Route::group([
    'prefix' => 'auth/admin'
], function ($router) {


    //Route::get('checkToken', [AuthController::class,'checkToken']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('adminUserVerify', [AuthController::class, 'verify']);

    Route::get('test', [AuthController::class, 'test']);

    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('me', [AuthController::class, 'me']);
});


Route::group([
    'prefix' => 'v1'
], function ($router) {

    Route::post('verifyUser', [VerifiedUserController::class, 'store']);
});