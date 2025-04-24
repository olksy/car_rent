@extends('layouts.admin')

@section('content')
    <style>
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

        <h1>Users</h1>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Password</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                @foreach ($users as $user)
                    <tr>
                        <td>{{ $user->id }}</td>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td> 
                        <td>{{ $user->number }}</td> 
                        <td>{{ $user->password }}</td> 
                        <td>
                            <div class="d-flex">
                                <a href="{{ route('admin.users.edit', $user->id) }}" class="btn btn-info btn-sm">
                                    Edit
                                </a>
                                
                                <form action="{{ route('admin.users.destroy', $user->id) }}" method="POST"
                                    onsubmit="return confirm('Are you sure you want to delete this user?');"
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

        <div class="pagination">
            {{ $users->links() }}
        </div>
    </div>
@endsection