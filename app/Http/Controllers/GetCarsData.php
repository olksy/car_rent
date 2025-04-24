<?php

namespace App\Http\Controllers;

use App\Models\Cars;
use Illuminate\Http\Request;

class GetCarsData extends Controller
{
    public function index()
    {
        $data = Cars::with('brand')->get();
        return response()->json($data);
    }
}
