<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Archive extends Model
{
    protected $table = 'archives';

    protected $fillable = [
        'by',
        'story_id',
        'score',
        'time',
        'title',
        'url'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'archives_users', 'archive_id', 'user_id');
    }
}
