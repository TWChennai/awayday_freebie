/**
*   App Description
*/

'use strict';

var scan = require('./modules/scan');
var app = {
  init: function(msg) {
    scan.init();
  }
};

module.exports = app;
