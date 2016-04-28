<?php

namespace App\Http\Controllers;

use App\Archive;
use Illuminate\Http\Request;

use App\Http\Requests;

class ArchiveController extends Controller
{
    public function saveStory(Requests\ArchiveRequest $request)
    {
        $user = $request->user();
        $archive = new Archive();

        $archive->by = $request->by;
        $archive->story_id = $request->id;
        $archive->score = $request->score;
        $archive->time = $request->time;
        $archive->title = $request->title;
        $archive->url = $request->url;

        $archive->save();

        $user->archives()->attach($archive);
    }

    public function getStories(Request $request)
    {
        $user = $request->user();

        return $user->archives()->get();
    }
    
    public function deleteStory(Request $request)
    {
        $user = $request->user();
        
        $archive = Archive::find($request->id);

        $user->archives()->detach($archive);
    }
}
