@extends('layouts.admin')

@section('content')
<style>
    .hidden {
        display: none;
    }
    
    .table td {
        vertical-align: middle;
    }
</style>

    <div class="container">
        @if (session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif

        <h1>Bookings</h1>
        
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Number</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>From Time</th>
                    <th>End Time</th>
                    <th>Car ID</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                @foreach ($bookings as $booking)
                    <tr>
                        <td>{{ $booking->id }}</td>
                        <td>{{ $booking->number }}</td>
                        <td>{{ $booking->start_date }}</td>
                        <td>{{ $booking->end_date }}</td>
                        <td>{{ $booking->from_time }}</td>
                        <td>{{ $booking->end_time }}</td>
                        <td>{{ $booking->car_id }}</td>
                        <td>
                            <div class="d-flex">
                                <a href="{{ route('admin.bookings.edit', $booking->id) }}" class="btn btn-info btn-sm mr-2">
                                    Edit
                                </a>
                                
                                <form action="{{ route('admin.bookings.destroy', $booking->id) }}" method="POST"
                                    onsubmit="return confirm('Are you sure you want to delete this booking?');"
                                >
                                    @method('DELETE')
                                    @csrf
                                    <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>

        <div class="pagination pb-3">
            {{ $bookings->links() }}
        </div>
    </div>
@endsection