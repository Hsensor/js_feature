var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);

function run(fn){
	var gen = fn();
	function next(err,data){
		if (err) throw err;
		var result = gen.next(data);
		if(result.done){
			return ;
		}
		result.value(next);
	}
	next();
}

var gen = function*(){
	var f1 = yield readFile('./fetch_generator.js');
	var f2 = yield readFile('./generator.js');
	var f3 = yield readFile('./README.md');
	var f4 = yield readFile('./thunk.js');	
}

//yield {value:readFile()返回值,done:}
run(gen);