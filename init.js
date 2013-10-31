var config = require('./lib/config');

var file = require('./lib/copy').file(config);

file.watch();
