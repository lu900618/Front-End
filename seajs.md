---
title: Seajs
---
# Seajs 模块化

## 简介

+ 官网: [https://seajs.github.io/seajs/docs/][https://seajs.github.io/seajs/docs/]
+ 下载: `npm install seajs`

seajs 是一个库文件, 重在对模块化思想的理解

## 快速上手

+ 在页面引入 `seajs`
+ 使用 `define` 函数定义模块
+ 使用 `require` 函数加载模块
+ 使用 `module.exports` 对外暴露接口对象
+ 使用 `seajs.use` 函数启动模块系统

```html
<!-- index.html -->
<body>
  <script src="vendor/sea.js"></script>
  <script>
    seajs.use('./js/main')
  </script>
</body>
```

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
  var Food = require('./food')
  var Snake = require('./snake')
  var Scene = require('./scene')
  var self

  function Game() {
    self = this
    self.scene = new Scene()
    self.food = new Food({
      scene: self.scene
    })
    self.snake = new Snake({
      scene: self.scene
    })
    this.init()
  }

  Game.prototype.init = function () {
    // 绑定开始游戏的处理事件，开始游戏
    document.querySelector('#btn_start').addEventListener('click', self.start)
    // 绑定键盘按下的按键事件，处理蛇的运动方向
    document.addEventListener('keydown', self.checkKeyCode)
    document.addEventListener('keyup', self.cancelSpeedUp)
  }

  // 这里必须为 module.exports 重新赋值才能导出单一成员
  module.exports = Game
})
```

exports 和 module.exports