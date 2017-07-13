---
date: 2017-07-12 15:40
status: private
title:jQueryDOM操作
author:32401545@qq.com
---
DOM操作
=========================================

## 1.HTML代码/文本/值

1. `$(" ").html()`
  * 相当于原生JS中的innerHTML
  * 设置 参数写在括号里, 括号里没有内容为获取.
  ```js
  $("div").html("<p>这是一个p标签</p>");
  ```
2. `$(" ").text()`
  * 相当于原生JS中的innerText, 在jQuery中没有兼容性问题.
  * 设置 参数写在括号里, 括号里没有内容为获取.
  ```js
  $("div").text("今天天气不错");
  ```
3. `$(" ").val()`
  * 相当于原生JS中的value
  * 设置 参数写在括号里, 括号里没有内容为获取.
  ```js
  $("div").val("今天天气不错");
  ```

## 2.遍历DOM树
1. 父子关系
  * `children()`
  * `parent()`
2. 兄弟关系
  * `prev()`
  * `next()`
  * `prevAll()`
  * `nextAll()`
  * `siblings()`
3. `find("筛选条件")`
  ```js
  $(function () {
    //鼠标进入li设置背景颜色
    $("ul>li").mouseenter(function () {
      $(this).css("backgroundColor","red")
        .siblings("li").css("backgroundColor","");
    }).click(function () {
      //当前的元素前面的所有兄弟元素一个颜色
      //$(this).prevAll().css("backgroundColor","green");
      //当前的元素后面的所有兄弟元素一个颜色
      //$(this).nextAll().css("backgroundColor","blue");

      $(this).prevAll().css("backgroundColor","green")
      // 修复断链
      .end().
      nextAll().css("backgroundColor","blue");
    }).mouseleave(function () {
      //干掉所有的li的背景颜色
      $("ul>li").css("backgroundColor","");
    });
  });
  ```

## 3.获取节点的属性
1. `$(" ").attr()` 设置或者获取元素的属性值
  * 设置元素的单个属性值, 包括标签的属性，自定义的属性
  ```js
  $(".box").attr("myattr", "值");
  ```
  * 设置元素的多个属性值, 使用json
  ```js
  $(".box").attr({"title":"abc","index":"def"});
  ```
2. `$(" ").prop()` 设置或者获取元素的属性值, 针对属性值只有true,false. 如:checked, selected, readonly等。
  ```js
  $(".cb").attr("checked"); // attr判断的时候返回的可能是undefined的字符串
  $(".box").prop("checked") // prop返回的是布尔值
  ```
3. `$(" ").removeAttr()`
4. `$(" ").removeProp()`

## 4.CSS相关的属性
1. `$(" ").width()` 设置或者获取元素的宽度--Number类型, 没有px
   `$(" ").height()`
    > css()方法获得的宽高是字符串类型, 有单位px
    
    ```js
    // 使用css()方法
    var w = $("#dv").css("width");
    var h = $("#dv").css("height");
    $("#dv").css("width", 2 * parseInt(w)+"px");// 将宽高变为2倍
    $("#dv").css("height", 2 * parseInt(h)+"px");
    // 使用width()、height()
    var w=$("#dv").width();
    var h=$("#dv").height();
    $("#dv").width(2 * w);
    $("#dv").height(2 * h);
    ```
2. `$(" ").offset()` 设置或者获取元素的left|top, 返回的是一个对象.
  ```js
  console.log($("#dv").offset().left);     //获取left
  $("#dv").offset({"left":200,"top":300}); //设置
  ```
3. `$(document).scrollTop()` 获取的是向上卷曲出去的距离
  `$(document).scrollLeft()`获取的是向左卷曲出去的距离
  ```js
  $(window).scroll(function () {
    var top=$(document).scrollTop();
    console.log(top);
    //window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop  
  });
  ```

## 5.节点操作
1. 创建元素 
  * `$("标签及代码")` 返回的是这个对象
  ```js
  var pObj=$("<p>这是一个p标签</p>");
  ```
  > 利用`html()`也能实现
  > `$("#dv").html("<a href='http://www.baidu.com'>百度</a>")`
2. 追加元素
  * `父元素.append(子元素);`
  * `子元素.appendTo(父元素);`
  ```js
  $("#dv2").append($("#dv1>p")); //可以理解成是剪切
  $("#dv2").append($("#dv1>p").clone(true)); //相当于复制的意思
  $("#dv1>p").appendTo($("#dv2")); //也可以看成是剪切
  //如果是从父级元素中获取子级元素,再次追加到其他元素中的时候,注意:此时看成是剪切,第一个父级元素中没有这个元素
  ```
3. 清空元素
  * `父元素.html("");`
  * `元素.empty(); // '自杀'效果`