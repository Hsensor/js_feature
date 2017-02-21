var co = require("co");

var  gen = function*(){
	var f1 = yield readFile("./generator_co.js");
	var f2 = yield readFile("./generator_co.js");

	console.log(f1.toString());
	console.log(f2.toString());
}

co(gen).then(function(){
  console.log(arguments);
	console.log('Generator 函数执行完成');
})

//yield {value:readFile()返回值,done:}