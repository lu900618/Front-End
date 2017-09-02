---
title: Seajs
date: 2017/08/25 10:44:38
author: 32401545@qq.com
---
# Seajs 模块化

## 模块化

### 目前的问题

+ 命名冲突
+ 文件依赖

### 模块的作用

+ 私有空间
+ 可以加载, 可以导出

### 什么是模块化

+ 模块化是指解决一个复杂问题时自顶向下逐层把系统划分成若干模块的过程，有多种属性，分别反映其内部特性

### 使用模块化的好处

+ 生产效率高
+ 可维护性高

### 模块化的写法

```javascript
// 1. 分号是什么意思
// 2. 为什么要给你的代码加一个匿名自执行函数
// 3. 为什么要把使用的依赖作为参数传递进来
;(function (形参模块名, 依赖项, 依赖项) {
  // 通过 形参模块名 修改模块

  // 如果需要，可以通过给 window 对象挂载属性对外暴露内部成员
  window.模块名 = 形参模块名
})(window.模块名 || {}, 依赖项, 依赖项)

```

## 简介

+ 官网: [https://seajs.github.io/seajs/docs/]
+ 下载: `npm install seajs`

seajs 是一个库文件, 重在对模块化思想的理解

## 快速上手

+ 在页面引入 `seajs` -- `seajs.use('')`
+ 使用 `define` 函数定义模块
+ 使用 `require` 函数加载模块
+ 使用 `module.exports` 对外暴露接口对象
+ 使用 `seajs.use` 函数启动模块系统

### seajs.use('')

+ 加载一个模块，在加载完成时，执行回调 `seajs.use('id', callback)`
+ 加载多个模块，加载完成时，执行回调 `seajs.use(['id1','id2',...],callback)`

  ```html
  <!-- index.html -->
  <body>
    <script src="vendor/sea.js"></script>
    <script>
      seajs.use('./js/main')
    </script>
  </body>
  ```

### `define` 函数定义模块

`define` 是一个全局函数，用来定义模块。

```javascript
// main.js
define(function (require, exports, module) {
  var Game = require('./game')
  new Game()
})
```

自定义一个模块 `game.js`

```javascript
define(function (require, exports, module) {
  // TODO ...
  // 这里必须为 module.exports 重新赋值才能导出单一成员
  module.exports = Game
})
```

### `require` 函数加载模块

require 函数加载模块

定义变量接收导出的对象

### `module.exports` 对外暴露接口对象

### exports 和 module.exports

    exports 仅仅是 module.exports 的一个引用。 也就是说修改了 exports 就相当于修改了 module.exports。
    但是一旦在 factory 内部给 exports 重新赋值，并不会改变 module.exports 的值。 因此给 exports 赋值是无效的。
    每个模块内部对外到处的接口对象始终都是 module.exports
    可以通过修改 module.exports 或给它赋值改变模块接口对象
    exports 是 module.exports 的一个引用，就好比在每一个模块定义最开始的地方写了这么一句代码：var exports = module.exports
    **如果希望模块导出多个成员，则建议多次使用 exports.xx = xx 方式来导出**
    **如果希望模块导出当个成员，例如一个函数，则必须通过为 module.exports 重新赋值才可以**