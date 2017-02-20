arr.every(callback[,thisArg]);
callback 用来测试每个元素的函数。
thisArg  执行callback时使用的this值


function isBigEnough(element,index,array){
	return (element>=10);
}

var passed = [12,5,8,130,44].every(isBigEnough);
//passed false;

passed = [12,54,18,130,44].every(isBigEnough);
//passed true


if (!Array.prototype.every)
{
  Array.prototype.every = function(fun /*, thisArg */)
  {
    'use strict';

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function')
        throw new TypeError();

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      if (i in t && !fun.call(thisArg, t[i], i, t))
        return false;
    }

    return true;
  };
}