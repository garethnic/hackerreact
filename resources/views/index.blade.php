@extends('layouts.master')

@section('styles')

@stop

@section('content')
    <div id="app-container"></div>
@stop

@section('scripts')
    <script src="{{ asset('js/moment.min.js') }}"></script>
    <script src="{{ asset('js/index.js') }}"></script>
@stop