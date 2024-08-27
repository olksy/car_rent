<?php

namespace App\Http\Controllers;

use App\Models\Cars;
use Illuminate\Http\Request;

class GetCarsData extends Controller
{
    public function index()
    {
        $data = Cars::all(); // Отримання всіх записів з таблиці
        return response()->json($data); // Відправлення даних у форматі JSON
    }
}
