<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cars_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("car_id");
            $table->foreign("car_id")->references("id")->on("cars")
                ->cascadeOnDelete()->cascadeOnUpdate();
            $table->string("path");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars_images');
    }
};
