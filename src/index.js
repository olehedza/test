/**
 * Created by olehedza on 14.05.17.
 */
var str = require('./constant');
var $ = require('jquery');

var App = function() {
    console.log(str);
    $('body').html(str);
};

var app = new App();
app.get = function() {};

