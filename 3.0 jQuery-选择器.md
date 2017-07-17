#jQuery选择器
==========================================
## DOM对象:
> 通过原生js获取的是DOM对象
> 通过jQuery选择器获取的是jQuery对象
> jQuery对象的方法与DOM对象的方法不通用

## 选择器的互相转换
1. DOM对象转为jQuery对象
  `$(DOM对象)`
2. jQuery对象转为DOM对象
  `jQuery对象[index]` 或 `jQuery对象.get(index)`

## 基本选择器
1. id选择器
  ```javascript
  $("#id");
  ```
2. 类选择器
  ```javascript
  $(".class");
  ```
3. 标签选择器
  ```javascript
  $("tagName");
  ```
4. 组合选择器
  * 交集选择器
    ```javascript
    $("li.cls"); // 应用了cls样式的li标签
    ```
  * 并集选择器
    ```javascript
    $("p, span, .cls");
    ```
  * 层级选择器
    ```javascript
    $("#dv p"); // id为dv的所有后代的p标签,(子子孙孙, 后代的后代)
    $("#dv>p"); // id为dv的所有子代的p标签
    $("#dv~p"); // id为dv的所有后面的兄弟p元素
    $("#dv+p"); // id为dv后面的相邻兄弟p元素, 只有一个
    ```
5. *
  ```javascript
  $("*");
  ```
## 内容过滤选择器
1. :first 在匹配的所有li的数组中选取第一个
  ```javascript
  $("li:first");
  ```
2. :last 在匹配的所有li的数组中选取最后一个
  ```javascript
  $("li:last");
  ```
3. :eq(index) 下标从0开始
  ```javascript
  $("li:eq(1)");
  ```
4. :lt(index) 下标从小于index
  ```javascript
  $("li:lt(2))");
  ```
5. :gt(index) 下标大于index
  ```javascript
  $("li:gt(3)");
  ```
  > tips: `$("li:gt(5):lt(3)")`是在下标大于5的范围内选择下标小于3的 指向发生了变化

6. :odd 奇数
   ```javascript
   $("li:odd");
   ```
7. :even 偶数
   ```javascript
   $("li:even");
   ```
  > tips: 注意写代码时的奇数与偶数和用户看到的奇数偶数不同.

## 表单过滤选择器
1. :enabled | :disabled 
2. :checked 单选框、复选框
3. :selected select中的option，`$("option:selected")`

## 属性过滤选择器
1. `[attr]` 含有指定属性的元素
  ```js
  $("input[placeholder]"]);
  ```
2. `[attr=value]` 含有指定属性的**值**的元素
  ```js
  $("input[type=button]"]);
  ```
3. `[attr!=value]` 属性的值**不等于**指定值的元素
4. `[attr^=value]` 属性的值**以指定值开头**的元素
5. `[attr$=value]` 属性的值**以指定值结束**的元素
6. `[attr*=value]` 属性的值**包含**指定值结束的元素
7. `[attr1] [attr2] [attr3] [...]` 筛选**多个**指定属性的元素