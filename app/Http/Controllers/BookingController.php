<?php

namespace App\Http\Controllers;

use App\Models\Cars;
use Illuminate\Http\Request;
use App\Models\Booking;
use Carbon\Carbon;

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

        $exists = Booking::where('car_id', $request->car_id)
            ->where(function ($query) use ($request) {
                $query->whereBetween('start_date', [$request->start_date, $request->end_date])
                    ->orWhereBetween('end_date', [$request->start_date, $request->end_date])
                    ->orWhere(function ($query) use ($request) {
                        $query->where('start_date', '<=', $request->start_date)
                            ->where('end_date', '>=', $request->end_date);
                    });
            })
            ->exists();

        if ($exists) {
            return response()->json([
                'error' => 'This car is already booked for the selected dates'
            ]);
        }

        $booking = Booking::create($validatedData);

        return response()->json($booking, 201);
    }

    public function checkCarAvailability($carId)
    {
        $currentDate = Carbon::now();

        $isBooked = Booking::where('car_id', $carId)
            ->where(function ($query) use ($currentDate) {
                $query->where('start_date', '<=', $currentDate)
                    ->where('end_date', '>=', $currentDate);
            })
            ->exists();

        return response()->json(['isBooked' => $isBooked]);
    }

    public function getBookedDates($carId)
    {
        $bookings = Booking::where('car_id', $carId)
            ->where('end_date', '>=', Carbon::today())
            ->get(columns: ['start_date', 'end_date']);

        $bookedDates = [];

        foreach ($bookings as $booking) {
            $period = Carbon::parse($booking->start_date)->daysUntil($booking->end_date);
            foreach ($period as $date) {
                $bookedDates[] = $date->format('Y-m-d');
            }
        }

        return response()->json(['bookedDates' => $bookedDates]);
    }
}