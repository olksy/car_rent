<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cars;

class CarController extends Controller
{
    public function show($slug, $id)
    {
        $car = Cars::where('slug', $slug)
            ->where('id', $id)
            ->first();

        return response()->json($car);
    }
}
