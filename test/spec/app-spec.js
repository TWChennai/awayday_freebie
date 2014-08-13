/**
*   App Spec Test
*/


'use strict';

var app = require('../../dev/scripts/app');

describe('just checking', function() {

    it('works for app', function() {
        var msg = 'Welcome to yeogurt!';

        var message = app.init(msg);

        expect(message).to.equal(message);
    });

});
