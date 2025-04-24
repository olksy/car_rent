<?php
use App\Http\Controllers\BrandController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\BodyTypeController;
use App\Http\Controllers\CarImagesController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GetCarsData;
use App\Http\Controllers\CarController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\UserController;
use Laravel\Fortify\Http\Controllers\PasswordResetLinkController;
use Laravel\Fortify\Http\Controllers\NewPasswordController;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;


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
Route::get('/brands', [BrandController::class, 'index']);
Route::get('/car_images', [CarImagesController::class, 'index']);

Route::get('/cars/search', [CarController::class, 'fuzzySearch']);

Route::get('/brands/{brand}', [BrandController::class, 'api']);
Route::get('/types/{type}', [TypeController::class, 'api']);
Route::get('/body-types/{bodyType}', [BodyTypeController::class, 'api']);
Route::get('/check-car-availability/{carId}', [BookingController::class, 'checkCarAvailability']);
Route::get('/booked-dates/{carId}', [BookingController::class, 'getBookedDates']);

Route::post('/register', [UserController::class, 'register']);
Route::post('/check-email', [UserController::class, 'checkEmail']);
Route::post('/check-phone', [UserController::class, 'checkPhone']);

Route::post('/check-user', [UserController::class, 'checkUser']);
Route::post('/find-email/{email}', [UserController::class, 'findEmail']);
Route::middleware('auth:sanctum')->get('/user', [UserController::class, 'getUser']);
Route::middleware('auth:sanctum')->put('/user-update', [UserController::class, 'userUpdate']);
Route::middleware('auth:sanctum')->post('/check-password', [UserController::class, 'checkPassword']);
Route::middleware('auth:sanctum')->put('/change-password', [UserController::class, 'changePassword']);

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store']);
Route::post('/reset-password', [NewPasswordController::class, 'store']);

Route::post('/validate-reset-token', function (Request $request) {
    $validator = Validator::make($request->all(), [
        'email' => 'required|email',
        'token' => 'required|string',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'valid' => false,
            'errors' => $validator->errors()
        ], 422);
    }

    $user = User::where('email', $request->email)->first();

    if (!$user) {
        return response()->json([
            'valid' => false,
            'message' => 'User not found',
        ]);
    }

    $broker = Password::broker();

    if (!$broker->tokenExists($user, $request->token)) {
        return response()->json([
            'valid' => false,
            'message' => 'Invalid or expired token',
        ]);
    }

    return response()->json([
        'valid' => true,
    ]);
});