var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var compiler = webpack(config);

var app = express();
app.use(require('webpack-dev-middleware')(compiler, { noInfo: true }));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, '0.0.0.0', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3000');
});
