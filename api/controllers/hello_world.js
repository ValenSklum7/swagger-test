'use strict';

var util = require('util');
let fs = require('fs');
/*
  Functions in a127 controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  fs.writeFile("file.json", "./test", (err) => {
    if(err) log.error(err);
  })
  // this sends back a JSON response which is a single string
  res.json(hello);
}


module.exports = {
  hello: hello
};