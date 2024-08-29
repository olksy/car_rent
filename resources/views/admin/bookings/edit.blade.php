@extends('layouts.admin')

@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Edit Booking</h3>
        </div>

        <div class="card-body">
            <form action="{{ route('admin.bookings.update', $booking->id) }}" method="POST">
                @csrf
                @method('PUT')
                
                <div class="form-group">
                    <label for="number">Number</label>
                    <input type="text" name="number" id="number" class="form-control" value="{{ old('number', $booking->number) }}" required>
                </div>

                <div class="form-group">
                    <label for="start_date">Start Date</label>
                    <input type="text" name="start_date" id="start_date" class="form-control" value="{{ old('start_date', $booking->start_date) }}" required>
                </div>

                <div class="form-group">
                    <label for="end_date">End Date</label>
                    <input type="text" name="end_date" id="end_date" class="form-control" value="{{ old('end_date', $booking->end_date) }}" required>
                </div>

                <div class="form-group">
                    <label for="name">From Time</label>
                    <input type="text" name="from_time" id="from_time" class="form-control" value="{{ old('from_time', $booking->from_time) }}" required>
                </div>

                <div class="form-group">
                    <label for="end_time">End Time</label>
                    <input type="text" name="end_time" id="end_time" class="form-control" value="{{ old('end_time', $booking->end_time) }}" required>
                </div>

                <div class="form-group">
                    <label for="car_id">Car ID</label>
                    <input type="text" name="car_id" id="car_id" class="form-control" value="{{ old('car_id', $booking->car_id) }}" required>
                </div>

                <button type="submit" class="btn btn-primary">Update</button>
            </form>
        </div>
    </div>
@endsection