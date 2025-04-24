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
        Schema::create('car_category', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("car_id");
            $table->foreign("car_id")->references("id")->on("cars")
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
        Schema::dropIfExists('car_category');
    }
};
