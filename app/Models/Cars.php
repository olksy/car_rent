<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cars extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'id',
        'title',
        'slug',
        'brand_id',
        'price',
        'year',
        'color',
        'zeroToHundred',
        'transmission',
        'engine',
        'maxSpeed',
        'horsepower',
        'seats',
        'fuelType',
        'body_type_id',
        'category_id'
    ];

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function bodyType()
    {
        return $this->belongsTo(BodyType::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
