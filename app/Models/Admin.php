<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable
{
    
    protected $fillable = ['name', 'phone', 'password'];
    
    protected $hidden = ['password', 'remember_token'];
    
}
