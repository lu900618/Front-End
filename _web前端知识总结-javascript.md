# web 前端知识总结

## javascript

### 基础语法

#### 变量声明

- ES5
  - var 用于声明普通的变量, 接受任意类型.
  - function 用于声明函数.
- ES6
  -let 用于声明普通变量.
  -const 用于声明常量.
  -import 模块
  -class 类

#### 数据类型

- 原始类型(简单类型) - 因为占据空间固定, 为了提高变量的读取速度, 存于栈(stack)空间 -- 判断类型 typeof
  - String
  - Number
  - Boolean
  - Null
  - undefined
- 引用类型 - 引用类型由于其值会改变, 所以不能将其放在栈内存中, 否则会降低查询速度, 因此将其储存在堆(heap)中, 存储在变量中的是一个指针, 指向内存中存储处的地址(按地址访问)
  - Object
    - 判断类型: Object.prototype.toString.call(xxx) ==='[object Xxx]'
- ES6
  - Symbol

##### 包装类型

Boolean、Number 和 String.

基本包装类型是一种特殊的引用类型，每当读取一个基本类型值的时候，JS内部就会创建一个对应的包装对象，从而可以调用一些方法来操作这些数据。

见[javascript包装对象](javascript包装对象.md)

##### 引用类型

#### 函数

- 普通函数
- 构造函数
- 对象方法

#### 控制语句

#### 内置对象

- window
  浏览器全局对象
- Date
- Array
  http://www.cnblogs.com/onepixel/p/5123115.html
- JSON
  对象的序列化和反序列化
  对象的深拷贝
- RegExp
  http://www.cnblogs.com/onepixel/p/5218904.html
包装类型
	包装类型是特殊的引用类型, 
每当读取一个基本类型值的时候, 
JS内部就会创建一个对应的包装对象, 
从而可以调用一些方法来操作这些数据.
对于引用的值: 可以添加属性和方法, 也可以改变和删除其属性和方法;
基本类型不可以添加属性和方法.
函数
	原型链
		http://www.cnblogs.com/onepixel/p/5024903.html
	作用域
		http://www.cnblogs.com/onepixel/p/5036369.html
	this指针
	new 操作符
		http://www.cnblogs.com/onepixel/p/5043523.html
	闭包
		http://www.cnblogs.com/onepixel/p/5062456.html
	单线程和异步队列
		http://www.cnblogs.com/sxz2008/p/6513619.html
	异步通信 Ajax
		http://www.ruanyifeng.com/blog/2016/04/cors.html
		https://segmentfault.com/a/1190000003810652
	模块化
		AMD
		CMD
		ES6
			http://es6.ruanyifeng.com/#docs/module
	node
		http://www.cnblogs.com/onepixel/p/7143769.html
	ES6