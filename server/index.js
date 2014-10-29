'use strict';

var Barcode = require('../lib/barcode').Barcode;
var ipv4 = require('ipv4');
var http = require('http');

var port = 6789;
console.log('Open url: http://' + ipv4 + ':' + port);

http.createServer(function(req, res) {
  res.write('123123');
  res.end();
}).listen(port, ipv4);

console.log(Barcode)
