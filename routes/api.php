<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GetCarsData;
use App\Http\Controllers\CarController;
use App\Http\Controllers\BookingController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/cars', [GetCarsData::class, 'index']);
Route::get('/cars/{slug}/{id}/detail', [CarController::class, 'show']);
Route::post('/bookings', [BookingController::class, 'store']);