var fs = require("fs");

var readFile = function(filename){
	return new Promise(function(resolve,reject){
		fs.readFile(filename,function(err,data){
			if(err) reject(err);
			resolve(data);
		})
	})
}
var gen = function*(){
	var f1 = yield readFile("./generator_co.js");
	var f2 = yield readFile("./generator_co.js");
	console.log(f1.toString());
	console.log(f2.toString());
}
/*
手动执行
var g = gen();

g.next().value.then(function(data){
	g.next(data).value.then(function(data){
		g.next(data);
	})
})
*/

function run(gen){
	var g = gen();

	function next(data){
		var result = g.next(data);
		if(result.done) return result.value;
		result.value.then(function(data){
			next(data);
		})
	}

	next();
}

run(gen);