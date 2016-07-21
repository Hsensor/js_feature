var thunkify = require("./thunkify_sourceCode");

function f(a,b,callback){
	var sum = a+b;
	//console.log 只执行一边
	//thunkify 多了一个检查机制，变量 called 确保回调函数只运行一次
	callback(sum);
	callback(sum);
}

var ft = thunkify(f);
ft(1,2)(console.log);