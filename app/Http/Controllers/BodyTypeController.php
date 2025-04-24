<?php

namespace App\Http\Controllers;

use App\Models\BodyType;
use App\Models\Cars;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class BodyTypeController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(BodyType::all());
    }

    public function api($body_type) {
        $body_type = BodyType::where('name', $body_type)->firstOrFail();

        $cars = Cars::where('body_type_id', $body_type->id)
                ->with(['brand', 'bodyType', 'category', 'images'])
                ->get();

        return response()->json($cars);
    }
}
