/**
*   App Description
*/

'use strict';

var someModule = require('./modules/module');
var app = {
    init: function(msg) {
        someModule.init('Module called from app.js');
        console.log(msg);
        return 'app initialized';
    }
};

module.exports = app;
