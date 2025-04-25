<?php

namespace Database\Seeders;

use Carbon\Carbon;
use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('brands')->insert([
            ["name" => "Rolls Royce", "slug" => "rolls-royce", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "BMW", "slug" => "bmw", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Audi", "slug" => "audi", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Chevrolet", "slug" => "chevrolet", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Jaguar", "slug" => "jaguar", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Ford", "slug" => "ford", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Lamborghini", "slug" => "lamborghini", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Ferrari", "slug" => "ferrari", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Mercedes", "slug" => "mercedes", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Range Rover", "slug" => "range-rover", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
            ["name" => "Porsche", "slug" => "porsche", "created_at" => Carbon::now(), "updated_at" => Carbon::now()],
        ]);
    }
}