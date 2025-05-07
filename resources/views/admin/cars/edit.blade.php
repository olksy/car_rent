@extends('layouts.admin')

@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Edit Car</h3>
        </div>

        <div class="card-body">
            <form action="{{ route('admin.cars.update', $car->id) }}" method="POST">
                @csrf
                @method('PUT')

                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" class="form-control" value="{{ old('title', $car->title) }}"
                        required>
                </div>

                <div class="form-group">
                    <label for="slug">Slug</label>
                    <input type="text" name="slug" id="slug" class="form-control" value="{{ old('slug', $car->slug) }}"
                        required>
                </div>

                <div class="form-group">
                    <label for="brand_id">Brand</label>
                    <select name="brand_id" id="brand_id" class="form-control" required>
                        @foreach ($brands as $brand)
                            <option value="{{ $brand->id }}" {{ $car->brand_id == $brand->id ? 'selected' : '' }}>
                                {{ $brand->name }}
                            </option>
                        @endforeach
                    </select>
                </div>

                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="number" name="price" id="price" class="form-control"
                        value="{{ old('price', $car->price) }}" required>
                </div>

                <div class="form-group">
                    <label for="year">Year</label>
                    <input type="number" name="year" id="year" class="form-control" value="{{ old('year', $car->year) }}"
                        required>
                </div>

                <div class="form-group">
                    <label for="color">Color</label>
                    <input type="text" name="color" id="color" class="form-control" value="{{ old('color', $car->color) }}"
                        required>
                </div>

                <div class="form-group">
                    <label for="zeroToHundred">0 - 100</label>
                    <input type="number" name="zeroToHundred" id="zeroToHundred" class="form-control" step="0.01"
                        value="{{ old('zeroToHundred', $car->zeroToHundred) }}" required>
                </div>

                <div class="form-group">
                    <label for="transmission">Transmission</label>
                    <input type="text" name="transmission" id="transmission" class="form-control"
                        value="{{ old('transmission', $car->transmission) }}" required>
                </div>

                <div class="form-group">
                    <label for="engine">Engine</label>
                    <input type="text" name="engine" id="engine" class="form-control"
                        value="{{ old('engine', $car->engine) }}" required>
                </div>

                <div class="form-group">
                    <label for="maxSpeed">Max Speed</label>
                    <input type="number" name="maxSpeed" id="maxSpeed" class="form-control"
                        value="{{ old('maxSpeed', $car->maxSpeed) }}" required>
                </div>

                <div class="form-group">
                    <label for="horsepower">Horse Power</label>
                    <input type="number" name="horsepower" id="horsepower" class="form-control"
                        value="{{ old('horsepower', $car->horsepower) }}" required>
                </div>

                <div class="form-group">
                    <label for="seats">Seats</label>
                    <input type="number" name="seats" id="seats" class="form-control"
                        value="{{ old('seats', $car->seats) }}" required>
                </div>

                <div class="form-group">
                    <label for="fuelType">Fuel Type</label>
                    <input type="text" name="fuelType" id="fuelType" class="form-control"
                        value="{{ old('fuelType', $car->fuelType) }}" required>
                </div>

                <div class="form-group">
                    <label for="body_type_id">Body Type</label>
                    <select name="body_type_id" id="body_type_id" class="form-control" required>
                        @foreach ($bodyTypes as $bodyType)
                            <option value="{{ $bodyType->id }}" {{ $car->body_type_id == $bodyType->id ? 'selected' : '' }}>
                                {{ $bodyType->name }}
                            </option>
                        @endforeach
                    </select>
                </div>

                <div class="form-group">
                    <label for="category_id">Category</label>
                    <select name="category_id" id="category_id" class="form-control" required>
                        @foreach ($categories as $category)
                            <option value="{{ $category->id }}" {{ $car->category_id == $category->id ? 'selected' : '' }}>
                                {{ $category->name }}
                            </option>
                        @endforeach
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Update</button>
            </form>
        </div>
    </div>
@endsection