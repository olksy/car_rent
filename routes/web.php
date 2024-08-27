<?php

use App\Http\Controllers\Admin\Post\IndexController;
use App\Http\Controllers\LocaleController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('locale/{lang}', [LocaleController::class, 'setLocale']);

Route::prefix('admin')->namespace('App\Http\Controllers\Admin\Post')->group(function () {
    Route::get('/post', 'IndexController')->name('admin.post.index');
});