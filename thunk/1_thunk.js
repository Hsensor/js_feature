//fs.readFile(fileName,callback);
var fs = require("fs");

var Thunk = function(fileName){
	return function(callback){
		return fs.readFile(fileName,callback);
	}
}

var readFileThunk = Thunk("./README.md");
readFileThunk(function(err,data){
	if(err){
		throw err;
	}
	console.log(data);
})