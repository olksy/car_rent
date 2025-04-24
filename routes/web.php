<?php

use App\Http\Controllers\LocaleController;
use App\Http\Middleware\Authenticate;
use App\Http\Middleware\RedirectIfAuthenticated;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\{
    DashboardController,
    CarsController,
    UsersController,
    CarsImagesController,
    CategoriesController,
    BrandsController,
    BookingsController,
    BodyTypesController,
    ProfileController,
    AuthAdminController
};
use Laravel\Fortify\Http\Controllers\PasswordResetLinkController;
use Laravel\Fortify\Http\Controllers\NewPasswordController;

Route::get('/', fn() => view('welcome'));

Route::get('locale/{lang}', [LocaleController::class, 'setLocale']);

Route::get('/access_denied', fn() => view('admin.access_denied'))->name('admin.access_denied');

Route::prefix('admin')->namespace('App\Http\Controllers\Admin')->group(function () {
    Route::middleware([RedirectIfAuthenticated::class])->group(function () {
        Route::get('/login_admin', [AuthAdminController::class, 'showLoginForm'])->name('admin.login');
        Route::post('/login_admin', [AuthAdminController::class, 'login']);
    });

    Route::middleware([Authenticate::class, 'is_admin'])->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('admin.dashboard');
        Route::get('/profile', ProfileController::class)->name('admin.profile');

        // for cars
        Route::get('/cars', [CarsController::class, 'index'])->name('admin.cars.index');
        Route::post('/cars', [CarsController::class, 'store'])->name('admin.cars.store');
        Route::get('/cars/create', [CarsController::class, 'create'])->name('admin.cars.create');
        Route::get('/cars/{car}/edit', [CarsController::class, 'edit'])->name('admin.cars.edit');
        Route::put('/cars/{car}', [CarsController::class, 'update'])->name('admin.cars.update');
        Route::delete('/cars/{car}', [CarsController::class, 'destroy'])->name('admin.cars.destroy');

        // for users
        Route::get('/users', [UsersController::class, 'index'])->name('admin.users.index');
        Route::get('/users/{user}/edit', [UsersController::class, 'edit'])->name('admin.users.edit');
        Route::put('/users/{user}', [UsersController::class, 'update'])->name('admin.users.update');
        Route::delete('/users/{user}', [UsersController::class, 'destroy'])->name('admin.users.destroy');

        // for brands
        Route::get('/brands', [BrandsController::class, 'index'])->name('admin.brands.index');
        Route::post('/brands', [BrandsController::class, 'store'])->name('admin.brands.store');
        Route::get('/brands/create', [BrandsController::class, 'create'])->name('admin.brands.create');
        Route::get('/brands/{brand}/edit', [BrandsController::class, 'edit'])->name('admin.brands.edit');
        Route::put('/brands/{brand}', [BrandsController::class, 'update'])->name('admin.brands.update');
        Route::delete('/brands/{brand}', [BrandsController::class, 'destroy'])->name('admin.brands.destroy');

        // for bookings
        Route::get('/bookings', [BookingsController::class, 'index'])->name('admin.bookings.index');
        Route::get('/bookings/{booking}/edit', [BookingsController::class, 'edit'])->name('admin.bookings.edit');
        Route::put('/bookings/{booking}', [BookingsController::class, 'update'])->name('admin.bookings.update');
        Route::delete('/bookings/{booking}', [BookingsController::class, 'destroy'])->name('admin.bookings.destroy');

        //for categories
        Route::get('/categories', [CategoriesController::class, 'index'])->name('admin.categories.index');
        Route::post('/categories', [CategoriesController::class, 'store'])->name('admin.categories.store');
        Route::get('/categories/create', [CategoriesController::class, 'create'])->name('admin.categories.create');
        Route::get('/categories/{category}/edit', [CategoriesController::class, 'edit'])->name('admin.categories.edit');
        Route::put('/categories/{category}', [CategoriesController::class, 'update'])->name('admin.categories.update');
        Route::delete('/categories/{category}', [CategoriesController::class, 'destroy'])->name('admin.categories.destroy');

        // for body_types
        Route::get('/body_types', [BodyTypesController::class, 'index'])->name('admin.body_types.index');
        Route::post('/body_types', [BodyTypesController::class, 'store'])->name('admin.body_types.store');
        Route::get('/body_types/create', [BodyTypesController::class, 'create'])->name('admin.body_types.create');
        Route::get('/body_types{body_type}/edit', [BodyTypesController::class, 'edit'])->name('admin.body_types.edit');
        Route::put('/body_types/{body_type}', [BodyTypesController::class, 'update'])->name('admin.body_types.update');
        Route::delete('/body_types/{body_type}', [BodyTypesController::class, 'destroy'])->name('admin.body_types.destroy');

        // for cars images
        Route::get('/car_images/{id}', [CarsImagesController::class, 'images'])->name('admin.cars_images.images');
        Route::get('/cars_images', [CarsImagesController::class, 'index'])->name('admin.cars_images.index');
        Route::get('/cars_images/{car}/create', [CarsImagesController::class, 'create'])->name('admin.cars_images.create');
        Route::post('/cars_images/{car}', [CarsImagesController::class, 'store'])->name('admin.cars_images.store');
        Route::delete('/cars_images/{car}/image/{image}', [CarsImagesController::class, 'destroyImage'])->name('admin.cars_images.destroyImage');
        Route::delete('/cars_images/{car}/destroyAll', [CarsImagesController::class, 'destroyAll'])->name('admin.cars_images.destroyAll');
    });

    Route::post('/logout', [AuthAdminController::class, 'logout'])->name('admin.logout');
});

Route::get('/reset-password/{token}', function ($token) {
    $email = request()->query('email');
    return redirect("http://localhost:5173/reset-password/{$token}?email={$email}");
})->name('password.reset');