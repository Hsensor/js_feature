var co = require("co");
var fs = require("fs");

var readFile = function(filename){
  return new Promise(function(resolve,reject){
    fs.readFile(filename,function(err,data){
      if(err) reject(err);
      resolve(data);
    })
  })
}

var  gen = function*(a){
  var f1 = yield readFile("./generator.js");
  var f2 = yield readFile("./generator.js");

  //console.log(f1.toString());
  //console.log(f2.toString());
  return a;
}

co(gen,{"age":28,name:"xulu"}).then(function(){
  console.log(arguments);
  console.log('Generator 函数执行完成');
})