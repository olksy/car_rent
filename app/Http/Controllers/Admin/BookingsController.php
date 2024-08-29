<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingsController extends Controller
{
    public function index() {
        $bookings = Booking::paginate(10);
        return view('admin.bookings.index', compact('bookings'));
    }
    
    public function edit(Booking $booking)
    {
        return view('admin.bookings.edit', compact('booking'));
    }

    public function update(Request $request, Booking $booking)
    {
        $validated = $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'number' => 'required|string|max:255',
            'from_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i|after:from_time',
            'car_id' => 'required|exists:cars,id',
        ]);

        $booking->update($validated);

        return redirect()->route('admin.bookings.index')->with('success', 'Booking data was successfully updated!');
    }

    public function destroy(Booking $booking)
    {
        $booking->delete();
        return redirect()->route('admin.bookings.index')->with('success', 'Booking was successfully deleted!');
    }
}
