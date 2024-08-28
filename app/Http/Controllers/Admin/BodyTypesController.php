<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BodyTypesController extends Controller
{
    public function __invoke() {
        return view('admin.body_types');
    }
}
