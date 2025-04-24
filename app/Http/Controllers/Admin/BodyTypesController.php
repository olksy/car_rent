<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BodyType;
use Illuminate\Http\Request;

class BodyTypesController extends Controller
{
    public function index() {
        $body_types = BodyType::paginate(10);
        return view('admin.body_types.index', compact('body_types'));
    }

    public function create()
    {
        return view('admin.body_types.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        BodyType::create($request->all());

        return redirect()->route('admin.body_types.index')->with('success', 'Body Type was successfully created!');
    }

    public function edit(BodyType $body_type)
    {
        return view('admin.body_types.edit', compact('body_type'));
    }

    public function update(Request $request, BodyType $body_type)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $body_type->update($validated);

        return redirect()->route('admin.body_types.index')->with('success', 'Body Type data was successfully updated!');
    }

    public function destroy(BodyType $body_type)
    {
        $body_type->delete();
        return redirect()->route('admin.body_types.index')->with('success', 'Body Type was successfully deleted!');
    }
}
