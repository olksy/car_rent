<?php

namespace App\Http\Controllers;

use App\Models\CarsImage;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CarImagesController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(CarsImage::all());
    }
}
