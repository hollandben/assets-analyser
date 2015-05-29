#! /usr/bin/env node

'use strict';

var path = require('path');
var meow = require('meow');
var analyse = require('./');

var cli = meow({
    help: [
        'Usage',
        '  asset-analyser --files <name>',
        '',
        'Exits with code 0 when the name is available or 2 when taken'
    ].join('\n')
});

if (!cli.flags.files) {
    console.error('`files` required');
    process.exit(1);
}

analyse({}, cli.flags.files.split(','), function(err, available) {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    // grunt.file.delete('tmp', {
    //     force: true
    // });

    process.exit(0);
});