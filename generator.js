//1
function *enumerable(msg){
	console.log(msg);
	var msg1 = yield  msg + ' after';
	console.log("-------msg1",msg1);

	var msg2 = yield  msg1 + ' after';

	try{
		var msg3 = yield  msg2 + ' after';
		console.log('ok');
	}catch(e){
		console.log(e);
	}
	console.log(msg3+' over');
}

var enummerator =  enumerable("hello");
var ret = enummerator.next();
console.log(ret);

ret = enummerator.next(ret.value);
console.log(ret);

ret = enummerator.next(ret.value);
console.log(ret);

enummerator.next();
