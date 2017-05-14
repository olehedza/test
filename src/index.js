/**
 * Created by olehedza on 14.05.17.
 */
var str = require('./constant');
var $ = require('jquery');
require('./less/index');

var App = function() {
    console.log(str);
    $('body').html('<div class="b-test"><h3 class="b-test__heading">Header <div> </div></h3></div>');
};

var app = new App();
app.get = function() {};

