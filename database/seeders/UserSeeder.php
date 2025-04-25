<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use DB;
use Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'admin',
                'email' => 'admin@gmail.com',
                'number' => '+123456789',
                'password' => Hash::make('qweqweqwe'),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
                'is_admin' => true
            ]
        ]);
    }
}
