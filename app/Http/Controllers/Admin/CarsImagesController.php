<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cars;
use App\Models\CarsImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CarsImagesController extends Controller
{
    public function index() {
        $cars = Cars::with('images')->paginate(10);
        return view('admin.cars_images.index', compact('cars'));
    }

    public function create($carId) {
        $car = Cars::findOrFail($carId);
        return view('admin.cars_images.create', compact('car'));
    }

    public function store(Request $request, $carId) {
        // dd($request->file('images'));
        $car = Cars::findOrFail($carId);
    
        $request->validate([
            'images' => 'required',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        
    
        if($request->hasFile('images')) {
            foreach ($request->file('images') as $file) {
                $fileName = time() . '_' . $file->getClientOriginalName();
                $filePath = $file->storeAs('public/images/' . $carId, $fileName);
    
                CarsImage::create([
                    'car_id' => $carId,
                    'path' => $fileName,
                ]);
            }
        }
    
        return redirect()->route('admin.cars_images.images', $carId)->with('success', 'Images uploaded successfully.');
    }
    

    public function destroyImage($carId, $imageId) {
        $image = CarsImage::where('car_id', $carId)->where('id', $imageId)->firstOrFail();
        Storage::delete('public/images/' . $carId . '/' . $image->path);
        $image->delete();

        return redirect()->route('admin.cars_images.images', $carId)->with('success', 'Image deleted successfully.');
    }

    public function destroyAll($carId) {
        Storage::disk('public')->deleteDirectory("images/{$carId}");
        
        CarsImage::where('car_id', $carId)->delete();
        return redirect()->route('admin.cars_images.index')->with('success', 'All images deleted successfully');
    }
    
    public function images($id)
    {
        $car = Cars::with('images')->findOrFail($id);
        return view('admin.cars_images.images', compact('car'));
    }
}