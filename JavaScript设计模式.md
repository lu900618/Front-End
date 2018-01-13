# JavaScript设计模式

> 设计模式：在面向对象软件设计过程中针对特定问题的简洁而优雅的解决方案。

## 单例模式

> 保证一个类只有一个实例，并提供一个访问他的全局访问点。

先判断实例存在与否，如果存在则直接返回，如果不存在就创建后返回。

```javascript
class CreateUser {
  constructor (name) {
    this.name = name
    this.getName()
  }
  getName () {
    return this.name
  }
}

// 代理实现单例模式
var ProxyMode = (function(){
  var instance = null
  return function(name){
    if(!instance){
      instance = new CreateUser(name)
    }
    return instance
  }
})()

// 测试
var a = new ProxyMode('aaa')
var b = new ProxyMode('bbb')
console.log(a===b) // true
```

## 代理模式

> 为一个对象提供一个代用品或者占位符，以便对他的访问

常用的虚拟代理形式：某一个花销很大的操作，可以通过虚拟代理的方式延迟到这种需要他的时候才去创建，例如：使用虚拟代理实现图片的懒加载。
图片的懒加载方式：先通过一张loading图占位，然后通过异步加载图片，等图片加载好了再把完成的图片加载到img标签中。

```javascript
var imgFunc = (function () {
  var imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc: function (src) {
      imgNode.src = src
    }
  }
})()

var proxyImage = (function () {
  var img = new Image()
  img.onload = function () {
    imgFunc.setSrc(this.src)
  }
  return {
    setSrc: function (src) {
      imgFunc.setSrc('./loading.gif')
      img.src = src
    }
  }
})()
proxyImage.setSrc('./pic.png')
```

## 工厂模式

## 策略模式

> 定义一系列的算法，把他们一一封装起来，并且使他们可以相互替换

一个基于策略模式的程序至少由两部分组成：

- 组策略类 - 可变：封装了集体方法，并负责具体的计算过程。
- 环境类 - 不变：接受用户的请求，随后将请求委托给某一个策略类。

```javascript
// 策略类
var levelObj = {
  "A": function (money) {
    return money * 4
  },
  "B": function (money) {
    return money * 3
  },
  "C": function (money) {
    return money * 2
  },
  "D": function (money) {
    return money * 1
  },
}

// 环境类
var calBounds = function (level, money) {
  return levelObj[level](money)
}

console.log(calBounds('A', 10000)) // 40000
```