//stolen from mozilla
if (!Array.prototype.map)
{
  Array.prototype.map = function(fun /*, thisp */)
  {
    //DO NOT USE STRICT. HA HA.
    if (this === void 0 || this === null)
      throw new TypeError();
    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();
    var res = new Array(len);
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in t)
        res[i] = fun.call(thisp, t[i], i, t);
    }
    return res;
  };
}
if (!Array.prototype.filter)  
{  
  Array.prototype.filter = function(fun /*, thisp */)  
  {  
    //seriously what's with mozilla's strictness?
    if (this === void 0 || this === null)  
      throw new TypeError();  
  
    var t = Object(this);  
    var len = t.length >>> 0;  
    if (typeof fun !== "function")  
      throw new TypeError();  
  
    var res = [];  
    var thisp = arguments[1];  
    for (var i = 0; i < len; i++)  
    {  
      if (i in t)  
      {  
        var val = t[i]; // in case fun mutates this  
        if (fun.call(thisp, val, i, t))  
          res.push(val);  
      }  
    }  
  
    return res;  
  };  
}  
if (!Array.prototype.indexOf)  
{  
  Array.prototype.indexOf = function(searchElement /*, fromIndex */)  
  {  
    //i love stealing code from mozilla
    if (this === void 0 || this === null)  
      throw new TypeError();  
  
    var t = Object(this);  
    var len = t.length >>> 0;  
    if (len === 0)  
      return -1;  
  
    var n = 0;  
    if (arguments.length > 0)  
    {  
      n = Number(arguments[1]);  
      if (n !== n)  
        n = 0;  
      else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0))  
        n = (n > 0 || -1) * Math.floor(Math.abs(n));  
    }  
  
    if (n >= len)  
      return -1;  
  
    var k = n >= 0  
          ? n  
          : Math.max(len - Math.abs(n), 0);  
  
    for (; k < len; k++)  
    {  
      if (k in t && t[k] === searchElement)  
        return k;  
    }  
    return -1;  
  };  
}  
