#! /usr/bin/env node

'use strict';

var meow = require('meow');
var analyse = require('./src/');

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

analyse(cli.flags, cli.flags.files.split(',')).then(function(err) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        process.exit(0);
    }
});
