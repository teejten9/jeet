var stylus  = require('stylus'),
    fs      = require('fs'),
    should  = require('should');

function compare(name, done) {
  var str = fs.readFileSync(__dirname + '/fixtures/stylus/styl/' + name + '.styl', { encoding: 'utf8' });
  stylus(str)
    .import('stylus/jeet')
    .render(function(err, result) {
      fs.readFile(__dirname + '/fixtures/stylus/css/' + name + '.css', { encoding: 'utf8' }, function(e, expected) {
        done(err, expected.should.be.exactly(result));
      });
    });
}

// Stylus Comparison Tests
describe('compiling method', function() {
  it('should apply a translucent, light-gray background color to all elements', function(done) {
    compare('edit', done);
  });
  it('should center an element horizontally', function(done) {
    compare('center', done);
  });
});
