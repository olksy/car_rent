<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarsImage extends Model
{
    use HasFactory;

    protected $table = 'cars_images';

    protected $fillable = ['car_id', 'path'];

    public function car()
    {
        return $this->belongsTo(Cars::class);
    }
}
