<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CarsImagesController extends Controller
{
    public function __invoke() {
        return view('admin.cars_images');
    }
}
