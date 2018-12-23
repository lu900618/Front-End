# 关于null的typeof 和 instance

```js
alert(typeof null) // object
alert(null instanceof Object) // false
```

这是由Javascript规范规定的，Null和Object都是javascript中的数据类型。Null数据类型只有一个值：null。就像undefined数据类型只有一个值：undefined。问题出在typeof操作符的定义规范，如下：
11.4.3 The typeof Operator
The production UnaryExpression : typeof UnaryExpression is evaluated as follows:
1. Evaluate UnaryExpression.
2. If Type(Result(1)) is not Reference, go to step 4.
3. If GetBase(Result(1)) is null, return "undefined".
4. Call GetValue(Result(1)).
5. Return a string determined by Type(Result(4)) according to the following table:
Type Result
Undefined "undefined"
Null "object"
Boolean "boolean"
Number "number"
String "string"
Object (native and doesn’t implement [[Call]]) "object"
Object (native and implements [[Call]]) "function"
Object (host) Implementation-dependent

可以看到，对于Null类型的值（只有null），规范就是定义返回"object"这个字符串。但是本质上Null和Object不是一个数据类型，null值并不是以Object为原型创建出来的。所以null instanceof Object是false。但从这里也可以看到，null确实是javascript中用来表示空引用的一个特殊值。使得它不是instanceof Ojbect，而typeof null是“object”。在语义上也是可以理解的。