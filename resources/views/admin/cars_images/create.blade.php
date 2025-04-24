@extends('layouts.admin')

@section('content')
    <h1>Upload Images for {{ $car->brand->name }} {{ $car->title }}</h1>

    @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    <form action="{{ route('admin.cars_images.store', $car->id) }}" method="POST" enctype="multipart/form-data">
        @csrf

        <div class="mb-3">
            <label for="images" class="form-label">Choose Images (JPEG, PNG, GIF, SVG)</label>
            <input style="height: 50px; padding: 9px" type="file" name="images[]" class="form-control" id="images" multiple required>
            @if($errors->has('images.*'))
                <div class="text-danger">
                    @foreach($errors->all() as $error)
                        {{ $error }}<br>
                    @endforeach
                </div>
            @endif
        </div>

        <button type="submit" class="btn btn-primary">Upload Images</button>
        <!-- <a href="{{ route('admin.cars_images.index') }}" class="btn btn-secondary">Back to List</a> -->
    </form>
@endsection
