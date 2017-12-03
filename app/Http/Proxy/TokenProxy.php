<?php

namespace App\Http\Proxy;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
/**
* TokenProxy
*/
class TokenProxy
{
    protected $http;

    function __construct(\GuzzleHttp\Client $http)
    {
        $this->http = $http;
    }

    public function login ($username, $password, $provider)
    {
        switch ($provider) {
            case 'admins':
                $user = Admin::where('email', $username)->count();
                $guard = 'admin';
                break;
            
            case 'users':
                $user = User::where('email', $username)->count();
                $guard = 'web';
                break;

            default:
                $user = '';
                $guard = 'web';
                break;
        }
        if(auth($guard)->attempt(['email' => $username, 'password' => $password])) {
            return $this->proxy('password', [
                'username' => $username,
                'password' => $password,
                'scope' => '',
                'provider' => $provider
            ]);
        }
        if(!$user) {
            return response()->json([
                'status' => false,
                'message' => '该用户还没注册'
            ], 421);
        }
        return response()->json([
            'status' => false,
            'message' => '密码不正确'
        ], 421);
    }

    public function proxy ($grantType, array $data = [])
    {
        /**
         * 使用Guzzle发送请求到/oauth/token
         */
        $data = array_merge($data, [
            'client_id' => env('PASSPORT_CLIENT_ID'),
            'client_secret' => env('PASSPORT_CLIENT_SECRET'),
            'grant_type' => $grantType
        ]);

        $response = $this->http->post('http://shop.dev/oauth/token', [
            'form_params' => $data
        ]);

        $token = json_decode((string) $response->getBody(), true);

        return response()->json([
            'token' => $token['access_token'],
            'expires_in' => $token['expires_in']
        ])->cookie('refreshToken', $token['refresh_token'], 14400, null, null, false, true);
    }
}