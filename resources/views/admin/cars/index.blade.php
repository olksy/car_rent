@extends('layouts.admin')

@section('content')
<style>
    .hidden {
        display: none;
    }
</style>

    <div class="container">
        @if (session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif

        <div class="d-flex align-items-center justify-content-between">
            <h1>Cars List</h1>
            <a href="/admin/cars/create">Create a new car</a>
        </div>
        
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>0-100</th>
                    <th>Transmission</th>
                    <th>Engine</th>
                    <th>Max Speed</th>
                    <th>Horse P</th>
                    <th>Seats</th>
                    <th>Fuel</th>
                    <th>Body</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                @foreach ($cars as $car)
                    <tr>
                        <td>{{ $car->id }}</td>
                        <td>{{ $car->title }}</td>
                        <td>{{ $car->brand->name }}</td> 
                        <td>{{ $car->price }}</td>
                        <td>{{ $car->year }}</td>
                        <td>{{ $car->color }}</td>
                        <td>{{ $car->zeroToHundred }}</td>
                        <td>{{ $car->transmission }}</td>
                        <td>{{ $car->engine }}</td>
                        <td>{{ $car->maxSpeed }}</td>
                        <td>{{ $car->horsepower }}</td>
                        <td>{{ $car->seats }}</td>
                        <td>{{ $car->fuelType }}</td>
                        <td>{{ $car->bodyType->name }}</td>
                        <td>{{ $car->category->name }}</td>
                        <td>
                            <a href="{{ route('admin.cars.edit', $car->id) }}" class="btn btn-info btn-sm w-100">Edit</a>
                            <form action="{{ route('admin.cars.destroy', $car->id) }}" method="POST"
                                onsubmit="return confirm('Are you sure you want to delete this car?');"
                            >
                                @method('DELETE')
                                @csrf
                                <button type="submit" class="btn btn-danger btn-sm w-100">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>

        <div class="pagination pb-3">
            {{ $cars->links() }}
        </div>
    </div>
@endsection