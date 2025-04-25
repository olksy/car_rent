<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CarsImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['car_id' => 1, 'path' => 'black_rolls-royce-wraith-black-badge.avif'],
            ['car_id' => 1, 'path' => 'rolls.avif'],
            ['car_id' => 1, 'path' => '1725356998_rolls2.jpeg'],
            ['car_id' => 5, 'path' => '1725377319_bmw-x6-1.jpeg'],
            ['car_id' => 5, 'path' => 'bmw-x6-2.jpeg'],
            ['car_id' => 5, 'path' => 'bmw-x6-3.jpeg'],
            ['car_id' => 8, 'path' => 'bmw_x6_2019.avif'],
            ['car_id' => 8, 'path' => 'bmw-x6.avif'],
            ['car_id' => 8, 'path' => '2020-bmw-x6-1.jpg'],
            ['car_id' => 9, 'path' => 'mercedes-g-wagon.avif'],
            ['car_id' => 9, 'path' => 'g-wagon.avif'],
            ['car_id' => 9, 'path' => '2020-mercedes-benz-g-wagon-1.jpg'],
            ['car_id' => 11, 'path' => '2020-tesla-model-x.avif'],
            ['car_id' => 11, 'path' => 'tesla.avif'],
            ['car_id' => 11, 'path' => '2022-tesla-model-x-2.jpg'],
            ['car_id' => 13, 'path' => 'rolls-royce-phantom.avif'],
            ['car_id' => 13, 'path' => 'rolls-royce-phantom-1.avif'],
            ['car_id' => 13, 'path' => 'rolls-royce-phantom-2.avif'],
            ['car_id' => 14, 'path' => 'aston-martin-dbs-superleggera.avif'],
            ['car_id' => 14, 'path' => 'aston-martin.avif'],
            ['car_id' => 14, 'path' => '2022-aston-martin-dbs-superleggera-2.jpg'],
            ['car_id' => 15, 'path' => 'audi-q7-2.avif'],
            ['car_id' => 15, 'path' => 'audi-q7.avif'],
            ['car_id' => 15, 'path' => '2021-audi-q7-1.jpg'],
            ['car_id' => 16, 'path' => 'toyota-camry.avif'],
            ['car_id' => 16, 'path' => 'toyota-camry-1.avif'],
            ['car_id' => 16, 'path' => '2022-toyota-camry.jpg'],
            ['car_id' => 17, 'path' => 'chevrolet-camaro.avif'],
            ['car_id' => 17, 'path' => 'camaro.avif'],
            ['car_id' => 17, 'path' => '2021-chevrolet-camaro-1.jpg'],
        ];


        foreach ($data as &$image) {
            $image['created_at'] = now();
            $image['updated_at'] = now();
        }

        DB::table('cars_images')->insert($data);
    }
}
