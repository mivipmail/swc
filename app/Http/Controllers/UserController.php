<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
    public function me()
    {
        try {
            return [
                'result' => new UserResource(auth()->user()),
                'error' => null,
            ];
        }
        catch (\Exception $e) {
            return [
                'result' => null,
                'error' => $e->getMessage(),
            ];
        }
    }

    public function show($id)
    {
        try {
            $user = User::find($id);

            if($user)
                return [
                    'result' => new UserResource($user),
                    'error' => null,
                ];
            else
                return [
                    'result' => null,
                    'error' => 'Не удалось найти пользователя с id ' . $id,
                ];
        }
        catch (\Exception $e) {
            return [
                'result' => null,
                'error' => $e->getMessage(),
            ];
        }
    }

}
