### 模板引擎

    将数据动态生成HTML格式的代码渲染到页面

### 常见的模板引擎

  + **`artTemplate`** 腾讯
  + baiduTemplate 百度
  + velocity 淘宝


### 使用artTemplate

  下载:[GitHub][https://github.com/aui/art-template]

  步骤:

    1. 准备数据
    2. 准备模板
    3. 数据和模板绑定返回HTML格式的字符串
    4. 渲染页面

#### 原生方式使用

  + 支持js循环, 分支语句, 可以定义变量.
  + 不能使用**外部变量**, 解决办法: 
    1. 外部变量当做数据传入 `var html = template('template', {list:data, $:$});`
    2. 使用 template 的辅助方法 `template.helper(方法名, function(){})`
    ```javascript
    template.helper(getJquery, function(){
      return jQuery;
    })
    ```
    ```javascript
    <script type="text/html" id="template">
    var $ = getJquery();
    </script>
    ```
  + <%= %> 默认的渲染方式是字符串
  + <%=# %> 渲染方式是HTML  --  会有xss(cross site scripting 跨站脚本攻击)问题


  [注]html引入模板JS`template-native.js`文件

    1. 准备数据
  ```javascript
  // 通过json获取
  // 模拟数据
  var data=[
      {
    "url":"http://www.study.com/heima11/day02/jdM/images/detail01.jpg",
    "nowPrice":"10.00",
    "oldPrice":"190.00"
  },
  {
    "url":"http://www.study.com/heima11/day02/jdM/images/detail01.jpg",
    "nowPrice":"10.00",
    "oldPrice":"190.00"
  }
  ];
  ```
    2. 准备模板
  ```javascript
  <script type="text/html" id="template">
  <% for(var i = 0; i < list.length; i++){ %>
  <tr>
    <td><%= i+1 %></td>
    <td><img src="<%= list[i].url %>"></td>
    <td><%= list[i].nowPrice %></td>
    <td><%= list[i].oldPrice %></td>
  </tr>
  <% }%>
  </script>
  ```
    3. 数据和模板绑定返回HTML格式的字符串
  ```javascript
  // template 模板 id
  // 第二个参数 数据 必须传对象
  var html = template('template', {list:data});
  ```
    4. 渲染页面
  ```javascript
  document.querySelector('tbody').innerHTML = html;
  ```

#### 简洁语法使用

  不能定义变量 *定义变量会直接被输出* -- 不够灵活 

  [注]html引入模板JS `jquery.js`, `template.js`文件

    1. 准备数据
  ```javascript
  // 通过json获取
  // 模拟数据
  var data=[
    {
      "url":"http://www.study.com/heima11/day02/jdM/images/detail01.jpg",
      "nowPrice":"10.00",
      "oldPrice":"190.00"
    },
    {
      "url":"http://www.study.com/heima11/day02/jdM/images/detail01.jpg",
      "nowPrice":"10.00",
      "oldPrice":"190.00"
    }
  ];
  ```
    2. 准备模板
  + 默认写法
    ```
    <script type="text/template" id="template">
    {{ each model }}
    <tr>
      <td>{{ $index + 1 }}</td> // $index默认索引  $value 默认值
      <td><img src="{{ $value.url }}"></td>
      <td>{{ $value.nowPrice }}</td>
      {{ if item.oldPrice > 1000 }}
      <td style="color:red">{{ $value.oldPrice }}</td>
      {{ else }}
      <td>{{ $value.oldPrice }}</td>
      {{ /if}}
    </tr>
    {{ /each }}}
    </script>
    ```
  + 自定义写法
    ```
    <script type="text/template" id="template">
    {{ each model as $val $i}}
    <tr>
      <td>{{ $i + 1 }}</td> 
      <td><img src="{{ $val.url }}"></td>
      <td>{{ $val.nowPrice }}</td>
      <td>{{ $val.oldPrice }}</td>
    </tr>
    {{ /each }}}
    </script>
    ```

    3. 数据和模板绑定返回HTML格式的字符串
  ```javascript
  // template 模板 id
  // 第二个参数 数据 必须传对象
  var html = template('template', {model:data});
  ```
    4. 渲染页面
  ```javascript
  document.querySelector('tbody).innerHTML = html;
  ```