<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Event extends Model
{
    use HasFactory;

    const UPDATED_AT = null;

    protected $guarded = [];
    protected $with = [ 'creatorUser', 'memberUsers' ];

    public function creatorUser() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function memberUsers() {
        return $this->belongsToMany(User::class, 'event_users');
    }
}
