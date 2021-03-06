<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlacesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('places', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('price')->unsigned();
            $table->integer('row_id')->unsigned()->index();
            $table->integer('user_id')->unsigned()->index()->nullable();
            $table->tinyInteger('state')->default(0);
            $table->timestamps();

            $table->foreign('row_id')->references('id')->on('rows')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('places');
    }
}
