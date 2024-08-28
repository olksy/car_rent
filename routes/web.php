<?php

use App\Http\Controllers\LocaleController;
use App\Http\Middleware\Authenticate;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\{
    PostController,
    DashboardController,
    CarsController,
    UsersController,
    ImagesController,
    CarsImagesController,
    CategoriesController,
    BrandsController,
    BookingsController,
    BodyTypesController,
    ProfileController,
    AuthController
};


Route::get('/', function () {
    return view('welcome');
});

Route::get('locale/{lang}', [LocaleController::class, 'setLocale']);

Route::prefix('admin')->namespace('App\Http\Controllers\Admin')->group(function () {
    Route::get('/login', [AuthController::class, 'showLoginForm'])->name('admin.login');
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout'])->name('admin.logout');
    Route::get('/register', [AuthController::class, 'showRegistrationForm'])->name('admin.register');
    Route::post('/register', [AuthController::class, 'register']);
    
    Route::middleware([Authenticate::class])->group(function() {
        Route::get('/', DashboardController::class)->name('admin.dashboard');
        Route::get('/profile', ProfileController::class)->name('admin.profile');
        Route::get('/post', PostController::class)->name('admin.post');
        Route::get('/cars', CarsController::class)->name('admin.cars');
        Route::get('/users', UsersController::class)->name('admin.users');
        Route::get('/images', ImagesController::class)->name('admin.images');
        Route::get('/cars_images', CarsImagesController::class)->name('admin.cars_images');
        Route::get('/categories', CategoriesController::class)->name('admin.categories');
        Route::get('/brands', BrandsController::class)->name('admin.brands');
        Route::get('/bookings', BookingsController::class)->name('admin.bookings');
        Route::get('/body_types', BodyTypesController::class)->name('admin.body_types');
    });

});