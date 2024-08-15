<?php

namespace App\Http\Controllers;

use App;
use Session;

class LocaleController extends Controller
{
    public function setlocale($lang) {
        if (in_array($lang, ['en', 'uk'])) {
            App::setLocale($lang);
            Session::put('locale', $lang);
        }

        return back();
    }
}
