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
            return response()->json([
                'result' => new UserResource(auth()->user()),
                'error' => null,
            ]);
        }
        catch (\Exception $e) {
            return response()->json([
                'result' => null,
                'error' => $e->getMessage(),
            ], 403);
        }
    }

    public function show($id)
    {
        try {
            $user = User::find($id);

            if($user)
                return response()->json([
                    'result' => new UserResource($user),
                    'error' => null,
                ]);
            else
                return response()->json([
                    'result' => null,
                    'error' => 'Не удалось найти пользователя с id ' . $id,
                ], 404);
        }
        catch (\Exception $e) {
            return response()->json([
                'result' => null,
                'error' => $e->getMessage(),
            ], 403);
        }
    }

}
