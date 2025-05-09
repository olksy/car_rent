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
            <h1>Brands</h1>
            <a href="/admin/brands/create">Create a new brand</a>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th class="col-4">ID</th>
                    <th class="col-4">Name</th>
                    <th class="col-4">Actions</th>
                </tr>
            </thead>

            <tbody>
                @foreach ($brands as $brand)
                    <tr>
                        <td>{{ $brand->id }}</td>
                        <td>{{ $brand->name }}</td>
                        <td>
                            <div class="d-flex">
                                <a href="{{ route('admin.brands.edit', $brand->id) }}" class="btn btn-info btn-sm mr-2 col-6">
                                    Edit
                                </a>
                                
                                <form action="{{ route('admin.brands.destroy', $brand->id) }}" method="POST"
                                    onsubmit="return confirm('Are you sure you want to delete this brand?');"
                                    class="col-6"
                                >
                                    @method('DELETE')
                                    @csrf
                                    <button type="submit" class="btn btn-danger btn-sm w-100">Delete</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>

        <div class="pagination pb-3">
            {{ $brands->links() }}
        </div>
    </div>
@endsection