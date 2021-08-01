<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGlassPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('glass_prices', function (Blueprint $table) {
            $table->id();
            $table->string('model_id');
            $table->string('fuel_id');
            $table->string('location_id');
            $table->string('glass_category_id');
            $table->integer('discount_price');
            $table->integer('original_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('glass_prices');
    }
}
