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
            <h1>Body Types</h1>
            <a href="/admin/body_types/create">Create a new Body Type</a>
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
                @foreach ($body_types as $body_type)
                    <tr>
                        <td>{{ $body_type->id }}</td>
                        <td>{{ $body_type->name }}</td>
                        <td>
                            <div class="d-flex">
                                <a href="{{ route('admin.categories.edit', $body_type->id) }}" class="btn btn-info btn-sm mr-2">
                                    Edit
                                </a>
                                
                                <form action="{{ route('admin.categories.destroy', $body_type->id) }}" method="POST"
                                    onsubmit="return confirm('Are you sure you want to delete this Body Type?');"
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
                {{ $body_types->links() }}
        </div>
    </div>

@endsection