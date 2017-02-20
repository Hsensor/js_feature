try{
	setTimeout(function(){
		throw new Error("an error happened !");
	},5000)
}catch(e){
	//无法捕获异步错误
	console.log(e);
	throw e;
}