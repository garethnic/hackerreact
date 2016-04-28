<!DOCTYPE html>
<head>
    <title>Hacker React</title>
    <meta charset="utf-8">
    <meta name="csrf_token" content="{{ csrf_token() }}">
    @yield('styles')
    <link rel="stylesheet" href="{{ asset('css/frontend/all.css') }}" >
</head>
<body>
@yield('content')

@yield('scripts')
</body>
</html>