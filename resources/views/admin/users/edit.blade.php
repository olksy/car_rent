@extends('layouts.admin')

@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Edit User</h3>
        </div>

        <div class="card-body">
            <form action="{{ route('admin.users.update', $user->id) }}" method="POST">
                @csrf
                @method('PUT')
                
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" class="form-control" value="{{ old('name', $user->name) }}" required>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" class="form-control" value="{{ old('email', $user->email) }}" required>
                </div>

                <!-- <div class="form-group">
                    <label for="password">Password</label>
                    <input type="number" name="password" id="password" class="form-control" value="{{ old('password', $user->password) }}" required>
                </div> -->

                <button type="submit" class="btn btn-primary">Update</button>
            </form>
        </div>
    </div>
@endsection