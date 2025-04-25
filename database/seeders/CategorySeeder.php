<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            ['id' => 1, 'name' => 'VIP', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 2, 'name' => 'Luxury', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 3, 'name' => 'Electric', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 4, 'name' => 'Classic', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 5, 'name' => 'Business', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 6, 'name' => 'Prestige', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 7, 'name' => 'Sports', 'created_at' => now(), 'updated_at' => now()],
            ['id' => 8, 'name' => 'Economy', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
