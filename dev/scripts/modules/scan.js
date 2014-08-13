/**
*   Example Module Description
*/

'use strict';

var timer;

var scan = {
  init: function() {
    var barcode = $('#barcode');
    barcode.on('change', $.proxy(this.showImage, this));
    $(document).on('click', function() {
      barcode.focus();
    });
    barcode.focus();
  },
  showImage: function(e) {
    var element = $(e.currentTarget);
    var goodieName = element.val();
    $('#goodieImg').attr('src', 'images/goodies/' + goodieName + '.jpg');
    $('#goodie').modal('show');
    clearTimeout(timer);
    timer = window.setTimeout(function() {
      $('#goodie').modal('hide');
    }, 10000);
    element.val('');
  },
};

module.exports = scan;
