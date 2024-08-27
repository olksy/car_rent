<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'number' => 'required|string',
            'from_time' => 'required|string',
            'end_time' => 'required|string',
            'car_id' => 'required|exists:cars,id',
        ]);

        $booking = Booking::create($validatedData);

        return response()->json($booking, 201);
    }
}
