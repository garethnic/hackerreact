<?php

Route::get('/', function () {
    return view('welcome');
});

Route::auth();

Route::group(['middleware' => 'auth'], function () {
    Route::get('/app', function () {
        return view('index');
    });
    Route::post('/archive', 'ArchiveController@saveStory');
    Route::get('/stories', 'ArchiveController@getStories');
    Route::post('/remove', 'ArchiveController@deleteStory');
});

Route::get('/home', 'HomeController@index');
