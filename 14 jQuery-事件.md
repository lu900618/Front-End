---
date: 2017-07-12 17:50
status: private
title:jQuery事件
author:32401545@qq.com
---

jQuery事件
=========================================
## 添加事件
  为一个元素添加多个事件
  ```js
  $("#btn").click(function(){
    console("今天天气真好");
  });
  $("#btn").mouseenter(function(){
    $(this).css("backgroundColor","red");
  });
  $("#btn").mouseleave(function(){
    $(this).css("backgroundColor","");
  });
  ```
  ```js
  // 链式编程
  $("#btn").click(function(){
    console("今天天气真好");
  }).mouseenter(function(){
    $(this).css("backgroundColor","red");
  }).mouseleave(function(){
    $(this).css("backgroundColor","");
  });
  ```
  ```js
  // delegate("元素", "事件名", 响应函数);
  $("#dv").delegate("p","click",function () {
    console.log("p被点击了");
  });
  ```
  ```js
  // on("事件名", "元素", 响应函数);
  $("#dv").on("click","p",function () {
    console.log("我是p,被点了");
  });
  ```
  ```js
  $("#btn").on({
    "click": function(){console("今天热死了");},
    "mouseenter": function(){$(this).css("backgroundColor","red");}, 
    "mouseleave": function(){$(this).css("backgroundColor","");}
  });
  // on的其他用法与delegate相同, 参数位置不同
  ```
## 绑定事件
  ```js
  // bind 为元素绑定多个事件
  $("#btn").bind("click", function(){
    console("今天热死了");
  }).bind("mouseenter", function(){
    $(this).css("backgroundColor","red");
  }).bind("mouseleave", function(){
    $(this).css("backgroundColor","");
  });
  ```
  ```js
  // bind 为元素绑定多个事件 参数为json
  $("#btn").bind({
    "click": function(){console("今天热死了");},
    "mouseenter": function(){$(this).css("backgroundColor","red");}, 
    "mouseleave": function(){$(this).css("backgroundColor","");}
  });  
  ```
## 移除事件

## 浏览器事件
1. `.resize()` 当浏览器改变大小时, window元素绑定的resize事件将被触发
   ```js
   // 当窗口大小改变时（或改变后），查看窗口的宽度：
   $(window).resize(function() {
    $('body').prepend('<div>' + $(window).width() + '</div>');
   });
   ```
2. `scroll` 用户执行了滚动操作, 就会触发scroll事件
   ```js
   $(window).scroll(function () {
    $("span").css("display", "inline").fadeOut("slow");
   });
   ```

## 表单事件
1. `.blur()`失去焦点
2. `.change()` 用于`<input>`, `<textarea>`和`<select>`元素
3. `.click()`鼠标点击事件
4. `.dblclick()`鼠标双击事件
5. `.focus()` 表单元素获得焦点  
6. `.focusin()` 子元素获得焦点  
7. `.focusout()` 子元素失去焦点  
8. `.hover()` 同时为mouseenter和mouseleave事件指定处理函数  
9. `.keydown()` 按下键盘（长时间按键，只返回一个事件）  
10. `.keypress()` 按下键盘（长时间按键，将返回多个事件）  
11. `.keyup()` 松开键盘  
12. `.load()` 元素加载完毕  
13. `.mousedown()` 按下鼠标  
14. `.mouseenter()` 鼠标进入（进入子元素不触发）  
15. `.mouseleave()` 鼠标离开（离开子元素不触发）  
16. `.mousemove()` 鼠标在元素内部移动  
17. `.mouseout()` 鼠标离开（离开子元素也触发）  
18. `.mouseover()` 鼠标进入（进入子元素也触发）  
19. `.mouseup()` 松开鼠标  
20. `.ready()` DOM加载完成  
21. `.resize()` 浏览器窗口的大小发生改变  
22. `.scroll()` 滚动条的位置发生变化  
23. `.select()` 用户选中文本框中的内容  
24. `.submit()` 用户递交表单  
25. `.toggle()` 根据鼠标点击的次数，依次运行多个函数  
26. `.unload()` 用户离开页面  
