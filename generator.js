function *enumerable(msg){
	console.log(msg);
	var msg1 = yield  msg + ' after';
	console.log(msg1);

	var msg2 = yield  msg1 + ' after';

	try{
		var msg3 = yield  msg2 + 'after';
		console.log('ok');
	}catch(e){
		console.log(e);
	}
	console.log(msg3+' over');
}

//hello
//{value:"hello after",done:false}
//world
//{value:"world after",done:false}
//{value:javascript,done:false}
//ok 
//undefined over

var enummerator =  enumerable("hello");
var ret = enummerator.next();
console.log(ret);

ret = enummerator.next("world");
console.log(ret);

ret = enummerator.next("javascript");
console.log(ret);

enummerator.next();
