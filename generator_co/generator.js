function* Foo(x){
  console.log("a");
  x = yield x+1
  console.log("b")
  var y = yield null
  console.log("c");
  return x+y
}
console.log("d");
var foo = Foo(5);
console.log("e")
console.log(foo.next());
console.log("f")
console.log(foo.next(6));
console.log("g");
console.log(foo.next(8));