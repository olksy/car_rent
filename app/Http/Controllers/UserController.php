<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Laravel\Sanctum\HasApiTokens;

class UserController extends Controller
{
    public function checkEmail(Request $request)
    {
        $email = $request->input('email');
        $exists = User::where('email', $email)->exists();

        if ($exists) {
            return response()->json(['exists' => true], 200);
        }

        return response()->json(['exists' => false], 200);
    }

    public function checkPhone(Request $request)
    {
        $request->validate([
            'number' => 'required|string',
        ]);

        $exists = User::where('number', $request->number)->exists();

        if ($exists) {
            return response()->json(['exists' => true], 200);
        }

        return response()->json(['exists' => false], 200);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:3|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'number' => 'required|string|regex:/^\+?[0-9]{10,15}$/',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        try {
            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'number' => $request->input('number'),
                'password' => Hash::make($request->input('password')),
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Something went wrong: ' . $e->getMessage()], 500);
        }

        return response()->json([
            'message' => 'User registered successfully!',
            'user' => $user,
        ], 201);
    }

    public function checkUser(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json([
                'status' => 'success',
                'message' => 'Login success',
                'user' => $user,
                'token' => $token,
            ], 200);
        }

        return response()->json([
            'status' => 'error',
            'message' => 'Email or password is incorrect!',
        ], 401);
    }

    public function getUser(Request $request)
    {
        return response()->json($request->user());
    }

    public function userUpdate(Request $request)
    {
        $user = Auth::user();

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => [
                'required',
                'email',
                Rule::unique('users')->ignore($user->id)
            ],
            'number' => 'required|string|regex:/^\+?[0-9]{10,15}$/',
        ]);

        $user->update($validatedData);

        return response()->json([
            'message' => 'User updated successfully!',
            'user' => $user
        ], 200);
    }

    public function checkPassword(Request $request)
    {
        $request->validate([
            'password' => 'required|string',
        ]);

        $user = Auth::user();
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        if (!Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Incorrect password'], 400);
        }

        return response()->json(['message' => 'Password is correct'], 200);
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'password' => 'required|string|confirmed',
        ]);

        $user = Auth::user();

        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json(['message' => 'Password updated successfully']);
    }

    public function findEmail($email)
    {
        $exists = User::where('email', $email)->exists();

        return response()->json(['emailExists' => $exists]);
    }
}