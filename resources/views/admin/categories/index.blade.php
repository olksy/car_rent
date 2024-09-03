@extends('layouts.admin')

@section('content')
<style>
    .hidden {
        display: none;
    }
    
    .table td {
        vertical-align: middle;
    }
</style>

    <div class="container">
        @if (session('success'))
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif

        <div class="d-flex align-items-center justify-content-between">
            <h1>Categories</h1>
            <a href="/admin/categories/create">Create a new category</a>
        </div>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                @foreach ($categories as $category)
                    <tr>
                        <td>{{ $category->id }}</td>
                        <td>{{ $category->name }}</td>
                        <td>
                            <div class="d-flex">
                                <a href="{{ route('admin.categories.edit', $category->id) }}" class="btn btn-info btn-sm mr-2">
                                    Edit
                                </a>
                                
                                <form action="{{ route('admin.categories.destroy', $category->id) }}" method="POST"
                                    onsubmit="return confirm('Are you sure you want to delete this category?');"
                                >
                                    @method('DELETE')
                                    @csrf
                                    <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        <div class="pagination pb-3">
                {{ $categories->links() }}
        </div>
    </div>

@endsection