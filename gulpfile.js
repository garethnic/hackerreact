var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.browserify('components/index.js');

    mix.styles([
        'bootstrap/css/bootstrap.min.css',
        'main.css'
    ], 'public/css/frontend');
});
