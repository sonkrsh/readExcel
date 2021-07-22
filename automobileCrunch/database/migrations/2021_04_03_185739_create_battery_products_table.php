<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBatteryProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('battery_products', function (Blueprint $table) {
            $table->id();
            $table->string('carId');
            $table->string('fuelId');
            $table->string('batteryId');
            $table->string('locationId');
            $table->string('price');
            $table->string('priceWithExchange');
            $table->string('priceWithOutExchange');
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
        Schema::dropIfExists('battery_products');
    }
}
