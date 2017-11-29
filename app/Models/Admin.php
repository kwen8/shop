<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Admin extends Authenticatable
{
    use HasApiTokens, Notifiable;
    
    protected $fillable = ['name', 'phone', 'password'];
    
    protected $hidden = ['password', 'remember_token'];
    
}
