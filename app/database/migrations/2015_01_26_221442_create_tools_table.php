<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateToolsTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('tools', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('title');
			$table->text('abstract');
			$table->text('authors');
			$table->integer('pageCount');
			$table->integer('year');
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
		Schema::drop('tools');
	}
}
