@extends('layouts.admin')

@section('content')
    <style>
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

        <h1 class="my-4">Cars and Their Images</h1>

        @if($cars->isEmpty())
            <div class="alert alert-warning" role="alert">
                No cars found.
            </div>
        @else
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
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
                                            <img src="{{ asset('storage/images/' . $car->id . '/' . $image->path) }}" alt="Car Image" class="img-thumbnail" style="max-width: 100px; max-height: 100px;">
                                        </a>
                                    @endforeach
                                @endif
                            </td>
                            <td>
                                <div class="image-management">
                                    <div class="row">
                                        <div class="mb-3 col-6">
                                            <a href="{{ route('admin.cars_images.create', $car->id) }}" class="btn btn-success btn-block">
                                                <i class="fas fa-plus"></i>
                                            </a>
                                        </div>

                                        <div class="mb-3 col-6">
                                            <form action="{{ route('admin.cars_images.destroyAll', $car->id) }}" method="POST"
                                                onsubmit="return confirm('Are you sure you want to delete all images of this car?');"
                                            >
                                                @method('DELETE')
                                                @csrf
                                                <button type="submit" class="btn btn-danger btn-block">
                                                    <i class="fas fa-trash-alt"></i> All
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                                    <!-- Loop through each image -->
                                    <div class="row">
                                        @foreach($car->images as $image)
                                            <div class="col-6 col-md-4">
                                                <div class="card">
                                                    <div class="card-body" style="padding: 0;">
                                                        <form action="{{ route('admin.cars_images.destroyImage', ['car' => $car->id, 'image' => $image->id]) }}" method="POST"
                                                            onsubmit="return confirm('Are you sure you want to delete this image?');"
                                                        >
                                                            @method('DELETE')
                                                            @csrf
                                                            <button type="submit" class="btn btn-warning btn-sm btn-block">
                                                                <i class="fas fa-trash-alt"></i> Image {{ $image->id }}
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                </div>
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