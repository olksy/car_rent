<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CarImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('cars_images')->insert([
            ['car_id' => 1, 'path' => 'images/black_rolls-royce-wraith-black-badge.avif', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
