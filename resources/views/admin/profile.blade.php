@extends('layouts.admin')

@section('content')
    <h3>Admin profile</h3>
    <p>Name: {{ $user->name }}</p>
    <p>Email: {{ $user->email }}</p>

    <form id="logout-form" action="{{ route('admin.logout') }}" method="POST" >
        @csrf
        <button type="submit"
            style="
                background: none;
                border: none;
                color: #007bff;
                padding: 0;
        ">
            Logout
        </button>
    </form>
@endsection