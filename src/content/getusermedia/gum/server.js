/**
 * Created by binfeng on 5/4/17.
 */
var static = require('node-static');
var http = require('http');
var file = new(static.Server)();
var app = http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(2017,'0.0.0.0');