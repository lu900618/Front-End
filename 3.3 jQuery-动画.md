jQuery动画
===
## 显示与隐藏

###1. `show()`
  `show(time[, easing ], [callback])` 
  参数1: time 动画执行的时间(单位是毫秒), 不写没有动画效果
```js
 time不传值, 默认为normal. 
 固定字符串: slow(200), normal(400), fast(600);
```

  参数2: easing 控制动画的速度样式
```js
 swing：摆钟运动，在开头和结尾移动慢，在中间移动速度快。
 linear：匀速移动。
```

  参数3: callback 回调函数, 执行完动画执行的函数
###2. `hide()`
  与`show()`用法一致.



## 滑入与划出

###1. `slideDown()`
  `slideDown(time[, easing ], [callback])`
###2. `slideUp()`
  `slideUp(time[, easing ], [callback])` 
###3. `slideToggle()`
  `slideToggle(time[, easing ], [callback])`
   > 切换, 如果默认是隐藏状态. 执行`slideDown()`操作; 如果是显示状态, 执行`slideUp()`操作.


## 淡入淡出

###1. `fadeIn()`
  `fadeIn(time[, easing ], [callback])`
###2. `fadeOut()`
  `fadeOut(time[, easing ], [callback])`
###3. `fadeToggle()`
  `fadeToggle(time[, easing ], [callback])`

## 三组基本动画总结
1. `show|slideDown|fadeIn`三个效果是显示, `hide|slideUp|fadeOut`三个效果是隐藏.
2. `show|hide`修改的是元素的`height|width|opacity`.
3. `slide`修改的是元素的`height`.
4. `fade`修改的是元素的`opacity`.

## 自定义动画 animate
  `animate(params,[speed],[easing],[callback])`

   > params: 必选, 要执行的动画的css属性, 属性多时使用json
   > speed: 可选, 执行动画的时长
   > easing:
   > callback: 回调函数

## 停止动画
  `stop()`

tips: 判断元素是否处于动画状态:
```js
if(!$(element).is(":animate") ){    //判断元素是否正处于动画状态
    //如果当前没有进行动画，则添加新的动画
}
```