'use strict';

var path = require('path');
var file = require('file-utils');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

var assetsAnalyser = require('../src/');

describe('assetsAnalyser', function() {

    beforeEach(function() {
        file.mkdir('tmp');
    });

    it('should run assets analyser', function(done) {
        var file = path.resolve(__dirname, 'fixtures/css-dummy.css');

        expect(assetsAnalyser({}, [file])).to.eventually.become([{
            uncompressed: 214,
            compressed: 149,
            rules: 4,
            totalSelectors: 9,
            averageSelectors: 2.3,
            type: 'css',
            filename: file
        }]).notify(done);
    });

    // it('should write the data to a file when specified', function(done) {
    //     expect(assetsAnalyser({
    //         output: 'temp/data.json'
    //     }, [path.resolve(__dirname, 'fixtures/css-dummy.css')])).then(function () {
    //         var fileExists = file.exists('temp/data.json');
    //         var fileContents = file.read('temp/data.json');

    //         Q.all([
    //             expect(fileExists).to.become(true),
    //             expect(fileContents).to.become(result)
    //         ])
    //     }).should.notify(done);
    // });

});
