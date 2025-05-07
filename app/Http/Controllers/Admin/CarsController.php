<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cars;
use App\Models\Brand;
use App\Models\BodyType;
use App\Models\Category;
use Illuminate\Http\Request;

class CarsController extends Controller
{
    public function index()
    {
        $cars = Cars::paginate(10);
        return view('admin.cars.index', compact('cars'));
    }

    public function create()
    {
        $brands = Brand::all();
        $bodyTypes = BodyType::all();
        $categories = Category::all();

        return view('admin.cars.create', compact('brands', 'bodyTypes', 'categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:cars,slug|max:255',
            'brand_id' => 'required|exists:brands,id',
            'price' => 'required|numeric',
            'year' => 'required|integer',
            'color' => 'required|string|max:255',
            'zeroToHundred' => 'required|numeric',
            'transmission' => 'required|string|max:255',
            'engine' => 'required|string|max:255',
            'maxSpeed' => 'required|integer',
            'horsepower' => 'required|integer',
            'seats' => 'required|integer',
            'fuelType' => 'required|string|max:255',
            'body_type_id' => 'required|exists:body_types,id',
            'category_id' => 'required|exists:categories,id',
        ]);

        Cars::create($request->all());

        return redirect()->route('admin.cars.index')->with('success', 'Car was successfully created!');
    }

    public function edit(Cars $car)
    {
        $brands = Brand::all();
        $bodyTypes = BodyType::all();
        $categories = Category::all();

        return view('admin.cars.edit', compact('brands', 'bodyTypes', 'categories', 'car'));
    }

    public function update(Request $request, Cars $car)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:cars,slug,' . $car->id,
            'brand_id' => 'required|exists:brands,id',
            'price' => 'required|numeric',
            'year' => 'required|integer',
            'color' => 'required|string|max:255',
            'zeroToHundred' => 'required|numeric',
            'transmission' => 'required|string|max:255',
            'engine' => 'required|string|max:255',
            'maxSpeed' => 'required|integer',
            'horsepower' => 'required|integer',
            'seats' => 'required|integer',
            'fuelType' => 'required|string|max:255',
            'body_type_id' => 'required|exists:body_types,id',
            'category_id' => 'required|exists:categories,id',
        ]);

        $car->update($request->all());

        return redirect()->route('admin.cars.index')->with('success', 'Car data was successfully updated!');
    }

    public function destroy(Cars $car)
    {
        $car->delete();
        return redirect()->route('admin.cars.index')->with('success', 'Car was successfully deleted!');
    }
}
