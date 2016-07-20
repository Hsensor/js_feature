var fetch = require('node-fetch');

function * gen(){
	var url = "https://www.hao123.com/sugdata_s4.json?r=-816102";
	var result = yield fetch(url);
	console.log(result);
}

var g = gen();
var result = g.next();

result.value.then(function(data){
	var ret = data.json();
	console.log(ret);
	return ret;
}).then(function(data){
	g.next(data);
})