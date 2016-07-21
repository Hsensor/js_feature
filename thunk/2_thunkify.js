//npm install thunkify

var thunkify = require("thunkify");
var fs = require("fs");

var read = thunkify(fs.readFile);

read('./README.md')(function(err,data){
	if(err) throw err;
	console.log(data);
})