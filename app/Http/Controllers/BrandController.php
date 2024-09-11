<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Cars;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class BrandController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Brand::all());
    }

    public function api($brand) {
        $brand = Brand::where('slug', $brand)->firstOrFail();

        $cars = Cars::where('brand_id', $brand->id)
                ->with(['brand', 'bodyType', 'category', 'images'])
                ->get();

        return response()->json($cars);
    }
}
