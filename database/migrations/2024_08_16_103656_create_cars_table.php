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
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->string('slug')->unique();
            $table->unsignedBigInteger("brand_id");
            $table->foreign("brand_id")->references("id")->on("brands")
                ->cascadeOnDelete()->cascadeOnUpdate();
            $table->float("price");
            $table->integer("year");
            $table->string("color");
            $table->float("zeroToHundred");
            $table->string("transmission");
            $table->string("engine");
            $table->integer("maxSpeed");
            $table->integer("horsepower");
            $table->integer("seats");
            $table->string("fuelType");
            $table->unsignedBigInteger("body_type_id");
            $table->foreign("body_type_id")->references("id")->on("body_types")
                ->cascadeOnDelete()->cascadeOnUpdate();
            $table->unsignedBigInteger("category_id");
            $table->foreign("category_id")->references("id")->on("categories")
                ->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
