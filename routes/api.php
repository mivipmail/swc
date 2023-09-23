<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::get('/events', [\App\Http\Controllers\EventController::class, 'index']);
    Route::get('/events/{id}', [\App\Http\Controllers\EventController::class, 'show']);
    Route::post('/events', [\App\Http\Controllers\EventController::class, 'store']);
    Route::delete('/events/{id}', [\App\Http\Controllers\EventController::class, 'destroy']);
    Route::post('/events/follow/{id}', [\App\Http\Controllers\EventController::class, 'follow']);
    Route::post('/events/unfollow/{id}', [\App\Http\Controllers\EventController::class, 'unfollow']);


    Route::get('/users/me', [\App\Http\Controllers\UserController::class, 'me']);
    Route::get('/users/{id}', [\App\Http\Controllers\UserController::class, 'show']);
});


