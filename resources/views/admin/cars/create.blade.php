@extends('layouts.admin')

@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Post a new car!</h3>
        </div>

        <div class="card-body">
            <form action="{{ route('admin.cars.store') }}" method="POST">
                @csrf
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="slug">Slug</label>
                    <input type="text" name="slug" id="slug" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="brand_id">Brand</label>
                    <select name="brand_id" id="brand_id" class="form-control" required>
                        @foreach($brands as $brand)
                            <option value="{{ $brand->id }}">{{ $brand->name }}</option>
                        @endforeach
                    </select>
                </div>

                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="number" name="price" id="price" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="year">Year</label>
                    <input type="number" name="year" id="year" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="color">Color</label>
                    <input type="text" name="color" id="color" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="zeroToHundred">0 - 100</label>
                    <input type="number" name="zeroToHundred" id="zeroToHundred" class="form-control" step="0.01" required>
                </div>

                <div class="form-group">
                    <label for="transmission">Transmission</label>
                    <input type="text" name="transmission" id="transmission" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="engine">Engine</label>
                    <input type="text" name="engine" id="engine" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="maxSpeed">Max Speed</label>
                    <input type="number" name="maxSpeed" id="maxSpeed" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="horsepower">Horse Power</label>
                    <input type="number" name="horsepower" id="horsepower" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="seats">Seats</label>
                    <input type="number" name="seats" id="seats" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="fuelType">Fuel Type</label>
                    <input type="text" name="fuelType" id="fuelType" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="body_type_id">Body Type</label>
                    <select name="body_type_id" id="body_type_id" class="form-control" required>
                        @foreach($bodyTypes as $bodyType)
                            <option value="{{ $bodyType->id }}">{{ $bodyType->name }}</option>
                        @endforeach
                    </select>
                </div>

                <div class="form-group">
                    <label for="category_id">Category</label>
                    <select name="category_id" id="category_id" class="form-control" required>
                        @foreach($categories as $category)
                            <option value="{{ $category->id }}">{{ $category->name }}</option>
                        @endforeach
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
@endsection