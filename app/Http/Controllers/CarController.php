<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cars;

class CarController extends Controller
{
    public function show($slug, $id)
    {
        $car = Cars::with(['brand', 'bodyType', 'category', 'images'])
            ->where('slug', $slug)
            ->where('id', $id)
            ->first();

        return response()->json($car);
    }

    public function fuzzySearch(Request $request)
    {
        $input = strtolower(trim($request->query('search')));

        if (!$input) {
            return response()->json([]);
        }

        $cars = Cars::with('brand')->get();
        $results = [];

        foreach ($cars as $car) {
            $brand = strtolower($car->brand->name);
            $title = strtolower($car->title);
            $full = "$brand $title";

            similar_text($input, $full, $percent);

            if ($percent > 35) {
                $results[] = $car;
            }
        }

        return response()->json($results);
    }
}
