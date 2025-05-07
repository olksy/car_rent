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

        <div class="d-flex align-items-center justify-content-between">
            <h1>Cars List</h1>
            <a href="/admin/cars/create">Create a new car</a>
        </div>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th class="col-1">ID</th>
                    <th class="col-1">Brand</th>
                    <th class="col-2">Title</th>
                    <th class="col-1">Price</th>
                    <th class="col-1">Category</th>
                    <th class="col-2">Actions</th>
                </tr>
            </thead>

            <tbody>
                @foreach ($cars as $car)
                    <tr>
                        <td>{{ $car->id }}</td>
                        <td>{{ $car->brand->name }}</td>
                        <td>{{ $car->title }}</td>
                        <td>{{ $car->price }}</td>
                        <td>{{ $car->category->name }}</td>
                        <td>
                            <a href="{{ route('admin.cars.edit', $car->id) }}" class="btn btn-info btn-sm w-100 mb-1">Edit</a>
                            <form action="{{ route('admin.cars.destroy', $car->id) }}" method="POST" class="mb-1"
                                onsubmit="return confirm('Are you sure you want to delete this car?');">
                                @method('DELETE')
                                @csrf
                                <button type="submit" class="btn btn-danger btn-sm w-100">Delete</button>
                            </form>
                            <a href="{{ route('admin.cars_images.images', $car->id) }}"
                                class="btn btn-primary btn-sm w-100">Images</a>
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