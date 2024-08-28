<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function __invoke() {
        $user = Auth::user();
        return view('admin.profile',compact('user'));
    }
}
