@extends('layouts.admin')

@section('content')
    <div class="container">
        @if (session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif

        <h1 class="my-4">Cars and Their Images</h1>

        @if($cars->isEmpty())
            <div class="alert alert-warning" role="alert">
                No cars found.
            </div>
        @else
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Car ID</th>
                        <th scope="col">Car Brand</th>
                        <th scope="col">Car Title</th>
                        <th scope="col">Images</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($cars as $car)
                        <tr>
                            <td>{{ $car->id }}</td>
                            <td>{{ $car->brand->name }}</td>
                            <td>{{ $car->title }}</td>
                            <td>
                                @if($car->images->isEmpty())
                                    <span class="text-muted">No images</span>
                                @else
                                    @foreach($car->images as $image)
                                        <a href="{{ asset('storage/images/' . $car->id . '/' . $image->path) }}" target="_blank">
                                            <img src="{{ asset('storage/images/' . $car->id . '/' . $image->path) }}" alt="Car Image" class="img-thumbnail" style="max-width: 100px; max-height: 100px; margin: 5px;">
                                        </a>
                                    @endforeach
                                @endif
                            </td>
                            <td>
                                <!-- Button to Add Images to this Car -->
                                <a href="{{ route('admin.cars_images.create', $car->id) }}" class="btn btn-success btn-sm w-100 mb-2">
                                    Add Images
                                </a>

                                <!-- Button to Delete All Images of this Car -->
                                <form action="{{ route('admin.cars_images.destroyAll', $car->id) }}" method="POST"
                                    onsubmit="return confirm('Are you sure you want to delete all images of this car?');"
                                >
                                    @method('DELETE')
                                    @csrf
                                    <button type="submit" class="btn btn-danger btn-sm w-100 mb-2">
                                        Delete All Images
                                    </button>
                                </form>

                                <!-- Loop through each image to delete specific image -->
                                @foreach($car->images as $image)
                                    <form action="{{ route('admin.cars_images.destroyImage', ['car' => $car->id, 'image' => $image->id]) }}" method="POST"
                                        onsubmit="return confirm('Are you sure you want to delete this image?');"
                                        class="mb-2"
                                    >
                                        @method('DELETE')
                                        @csrf
                                        <button type="submit" class="btn btn-warning btn-sm w-100">
                                            Delete Image {{ $image->id }}
                                        </button>
                                    </form>
                                @endforeach
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @endif
        <div class="pagination pb-3">
            {{ $cars->links() }}
        </div>
    </div>
@endsection
