<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index()
    {
        if (!auth()->user()->is_admin) {
            return view('admin.access-denied');
        }
        return view('admin.dashboard');
    }
}
