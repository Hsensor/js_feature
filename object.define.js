var obj = {};
Object.defineProperty(obj, "key", {
  enumerable: false,
  configurable: false,
  writable: true,
  value: "static"
});

obj.key = "hello";
obj