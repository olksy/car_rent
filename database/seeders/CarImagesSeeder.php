<?php

namespace Database\Seeders;

use App\Models\CarsImage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class CarImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CarsImage::truncate();
        $basePath = 'public/images';

        $directories = Storage::directories($basePath);

        foreach ($directories as $directory) {
            $carId = basename($directory);

            if (!is_numeric($carId))
                continue;

            $files = Storage::files($directory);

            foreach ($files as $file) {
                CarsImage::create([
                    'car_id' => $carId,
                    'path' => basename($file),
                ]);
            }
        }
    }
}
