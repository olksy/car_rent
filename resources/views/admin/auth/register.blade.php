<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Admin Rent Car</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="{{ asset('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback') }}">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{ asset('plugins/fontawesome-free/css/all.min.css') }}">
  <!-- Ionicons -->
  <link rel="stylesheet" href="{{ asset('https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css') }}">
  <!-- Tempusdominus Bootstrap 4 -->
  <link rel="stylesheet" href="{{ asset('plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css') }}">
  <!-- iCheck -->
  <link rel="stylesheet" href="{{ asset('plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">
  <!-- JQVMap -->
  <link rel="stylesheet" href="{{ asset('plugins/jqvmap/jqvmap.min.css') }}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ asset('dist/css/adminlte.min.css') }}">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="{{ asset('plugins/overlayScrollbars/css/OverlayScrollbars.min.css') }}">
  <!-- Daterange picker -->
  <link rel="stylesheet" href="{{ asset('plugins/daterangepicker/daterangepicker.css') }}">
  <!-- summernote -->
  <link rel="stylesheet" href="{{ asset('plugins/summernote/summernote-bs4.min.css') }}">
  <style>
        .full-height {
            height: 100vh;
        }
    </style>
</head>
<body class="container-fluid full-height d-flex justify-content-center align-items-center">
<div class="register-box">
        <div class="register-logo">
            <a href="#"><b>Admin</b>LTE</a>
        </div>
        <div class="register-box-body">
            <p class="login-box-msg">Register a new membership</p>

            <form action="{{ route('admin.register') }}" method="post">
                @csrf
                <div class="form-group has-feedback">
                    <input type="text" class="form-control" name="name" placeholder="Name" value="{{ old('name') }}" required>
                </div>
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" name="email" placeholder="Email" value="{{ old('email') }}" required>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" name="password" placeholder="Password" required>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" name="password_confirmation" placeholder="Confirm Password" required>
                </div>

                @if($errors->any())
                    <div class="alert alert-danger">
                        <ul class="px-1 mb-1">
                            @foreach ($errors->all() as $error )
                                <li style="font-size: 15px;">{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                <div class="row">
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">Register</button>
                    </div>
                </div>
                <div class="col-16 mt-2">
                    <span>Already have an account? <a href="/admin/login">Login!</a></span>
                </div>
            </form>
        </div>
    </div>
</body>    