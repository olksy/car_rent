@extends('layouts.admin')

@section('content')
<div class="container">
    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

        <h1>Images for {{ $car->brand->name }} {{ $car->title }}</h1>

        <div class="d-flex mb-3">
            <a href="{{ route('admin.cars_images.create', $car->id) }}" class="btn btn-primary mr-2">Add New Images</a>
            <form action="{{ route('admin.cars_images.destroyAll', $car->id) }}" method="POST"
                onsubmit="return confirm('Are you sure you want to delete all images?');">
                @csrf
                @method('DELETE')
                <button type="submit" class="btn btn-danger">Delete All Images</button>
            </form>
        </div>

    <div class="row">
        @foreach($car->images as $image)
            <div class="col-md-3">
                <div class="card mb-4">
                    <img src="{{ asset('storage/images/' . $car->id . '/' . $image->path) }}" class="card-img-top" alt="Car Image">
                    <div class="card-body text-center">
                        <form action="{{ route('admin.cars_images.destroyImage', [$car->id, $image->id]) }}" method="POST"
                              onsubmit="return confirm('Are you sure you want to delete this image?');">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger btn-sm w-100">Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</div>
@endsection
