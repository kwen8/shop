<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Http\Requests;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AdminAuthController extends Controller
{
    use AuthenticatesUsers, RegistersUsers, ThrottlesLogins;
//    protected $guard = 'admin';

    /*登录*/
    public function login(Request $request)
    {

        $credentials = $request->only('phone','password');
        if ( $token = Auth::guard($this->getGuard())->attempt($credentials) ) {

            return response()->json(['result' => $token]);
        } else {
            return response()->json(['result'=>false]);
        }
    }
}
