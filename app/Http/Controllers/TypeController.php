<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Cars;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class TypeController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Category::all());
    }

    public function api($category) {
        $category = Category::where('name', $category)->firstOrFail();

        $cars = Cars::where('category_id', $category->id)
                ->with(['brand', 'bodyType', 'category', 'images'])
                ->get();

        return response()->json($cars);
    }
}
