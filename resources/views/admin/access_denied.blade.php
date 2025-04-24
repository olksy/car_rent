@extends('layouts.app')

@section('content')
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="alert alert-danger d-flex flex-row text-uppercase">
            <div class="fw-bold">403</div>
            <div class="mx-2">|</div>
            <div>Access Denied!</div>
        </div>
    </div>

    <form id="logout-form" action="{{ route('admin.logout') }}" method="POST" class="d-none">
        @csrf
    </form>

    <script>
        setTimeout(function () {
            document.getElementById('logout-form').submit();
        }, 1000);
    </script>
@endsection