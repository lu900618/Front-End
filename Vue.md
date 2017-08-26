---
create: 2017年8月22日 08:58:05
status: public
title: Vue笔记
author: 32401545@qq.com

---
# Vue

## Vue指令

### `{{ }}`

```html
<div id="app">
  <div>
    <input type="text" v-model="name">
    <span>你的名字叫: {{ name }}</span>
  </div>
  <div>
    <input type="text" v-model="age">
    <span>你的年龄是: {{ age }}</span>
  </div>
  <div>
    <input type="text" v-model="sex">
    <span v-show="sex">你的性别是: {{ sex }}</span>
    <!-- 
    v-show  和  v-if 的区别 
    如果 sex 的值不存在, 都可以达到显示的作用
    v-show : 相当于 display:none DOM中元素仍然存在
    v-if : DOM删除     
    -->
  </div>
</div>
```

```javascript
/**
 * 构造函数的方式创建
 * el data 参数选项
 * template: 模板
 */
var app = new Vue({
  el: '#app',  // 装载的位置 css选择器
  data: {  // 数据 可以 app.name 访问
    name: 'AAA',
    age: 18,
    sex: null
  }
})
```

在控制台修改 `app.name` 实例也随之更新

`{{ }}` 中支持简单的 `javascript` 表达式:

+ `{{ number + 1 }}`
+ `{{ true ? 'yes' : 'no' }}`
+ `{{ message.split('').reverse().join('') }}`

`{{ }}` 中不支持:

+ `{{ var a = 1 }}`
+ `{{ if (true) { return true }}}`

### v-for

用法: `v-for="item in arr"`

```html
<div id="app">
  <ul>
    <li v-for="food in foodList">
      {{ food.name }}:&yen{{ food.discount ? food.price * food.discount : food.price}}
    </li>
  </ul>
  <!-- 
    v-for 也是动态的 一直在监控 app.foodList数据
    当在 console 中执行: 
    app.foodList.push({ name: '黄瓜',  price: 2, discount: 0.6}) 的时候, 
    页面的展示也会刷新

    -->
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    // foodList: ['香蕉', '橘子', '苹果', '月饼'],
    foodList: [
      { name: '香蕉', price: 10, discount: 0.8 },
      { name: '橘子', price: 20, discount: 1 },
      { name: '苹果', price: 3, discount: 0.5 },
      { name: '月饼', price: 128 }
    ]
  }
})
```

### v-bind

用法: `v-bind:属性名="属性值"`

tips: `v-bind:` 可以简写成 `:`

```html
<div id="app">
  <!-- <a v-bind:class="klass" v-bind:href="url"> -->
  <!-- {active:isActive} {类名:参数} 这里是 { } 单花括号-->
  <!-- {active:isActive} 表示 当 isActive 是 true 的时候激活-->
  <a :class="{active:isActive}" :href="url">
    <img :src="img">
  </a>
  <!-- 
    注意: url 没有被 {{ }} 包裹
    浏览器解析后不会显示 v-bind
    -->
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    url: 'http://www.baidu.com',
    img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3610571309,474794913&fm=58&u_exp_0=3043537694,141489503&fm_exp_0=86&bpow=500&bpoh=454',
    klass: 'btn btn-default',
    isActive: true
  }
})
```

### v-on

用法:

+ `v-on="{事件名:事件函数,事件名2:事件函数2}"`
+ `v-on:事件名="事件函数"`

tips:

+ `v-on` 可以简写为 `@`
+ 事件函数要写在 methods 参数选项中

```html
<div id="app">
  <!-- 注意: 在 js 中 onClick 的位置 method中-->
  <!-- 可以传对象 -->
  <button v-on="{mouseenter:onEnter,mouseleave:onOut}" v-on:click="onClick">点我</button>
  <!-- <form v-on:submit="onSubmit($event)">
    <input type="text">
    <button type="submit">提交</button>
  </form> -->

  <!-- vue 封装了 preventDefault(); -->
  <!-- vue 封装了 stopPropagation(); 
    v-on:submit.stop
    停止冒泡事件
  -->
  <!-- 
    键盘事件: 封装了keycode事件
    v-on:keyup.enter="onEnter"
    -->
    <!-- v-on 可以简写为 @ : @keyup.enter-->
  <form v-on:submit.prevent="onSubmit2">
    <input type="text">
    <button type="submit">提交</button>
  </form>
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  methods: {
    onClick: function () {
      console.log('clicked')
    },
    onEnter: function () {
      console.log('mouse enter')
    },
    onOut: function () {
      console.log('mouse leave')
    },
    onSubmit: function (e) {
      e.preventDefault()
      console.log('submitted')
    },
    onSubmit2: function () {
      console.log('submitted')
    }
  }
})
```

### v-model

```javascript
var app = new Vue({
  el: '#app',
  data: {
    sex: 'female',
    hobby: [], // 可以设置默认值
    article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sed laboriosam beatae eveniet quisquam ad fugiat enim, pariatur labore quas? ',
    from: 1,
    to: []
  }
})
```

#### v-model 在 `input[text]` 中的使用

+ `v-model.lazy`: 懒加载, 在 `input` 失去焦点时更新
+ `v-model.trim`: 去掉前后的空格, 注意在 `password` 类型的 `input` 的使用
+ `v-model.number`: `Number` 类型数据, 避免获取的 `input` 数据是字符串带来的运算问题

```html
<div id="app">
  <input type="text" v-model="name"><br>
  <input type="text" v-model.lazy="name"><br>
  <input type="text" v-model.trim="name"><br>
  <input type="text" v-model.number="price"><br>
  <!-- 
  多空格在 HTML 中只显示一个空格, 但是在数据库中会远洋存储
  <pre> 按原格式显示
   -->
  <pre>{{ name }}</pre>
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    name: 'whh',
    price: 10
  }
})
```

#### v-model 在 `input[radio]` 中的使用

在使用 `<input type="radio" value="male" name="sex">` 时, 同一组的多个 `radioButton` 要放在同一个 `name` 下, 在 Vue 中, 放在同一个 `v-model` 下

```html
<div id="app">
  <label for="">
    男:
    <input type="radio" value="male" v-model="sex">
  </label>
  <label for="">
    女:
    <input type="radio" value="female" v-model="sex">
  </label>
  <br>
  {{sex}}
</div>
```

#### v-model 在 `input[CheckBox]` 中的使用

```html
<div id="app">
  <label for="">
    男:
    <input type="checkbox" value="male" v-model="hobby">
  </label>
  <label for="">
    女:
    <input type="checkbox" value="female" v-model="hobby">
  </label>
  <br>
  {{hobby}}
</div>
```

#### v-model 在 textarea 中的使用

```html
<div id="app">
  <textarea v-model="article" name="" id="" cols="30" rows="10"></textarea>
</div>
```

#### v-model 在 select 中的使用

```html
<div id="app">
<div>你来自哪里?</div>
  <select v-model="from">
    <option value="1">hkong</option>
    <option value="2">dlu</option>
  </select> {{ from }}
  <hr>
  <div>你要去哪里?</div>
  <select v-model="to" multiple>
    <option value="1">hkong</option>
    <option value="2">dlu</option>
  </select> {{ to }}
</div>
```

### v-if

```html
<div id="app">
  <div v-if="role === 'admin' || role === 'super_admin'">
    管理员你好
  </div>
  <div v-else-if="role === 'hr'">
    hr你好
  </div>
  <div v-else>
    你没有权限访问此页面
  </div>
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    role: 'hr'
  }
})
```

### 计算属性

用于通过其他的数据计算出新数据

好处: 缓存了计算出的结果, 优先调用缓存数据 -- 提高程序的性能

与 `methods` 的区别: `methods` 每次都会重新计算

```html
<table border="1" collspan="0" collspace="0" id="app">
  <thead>
    <tr>
      <th>科目</th>
      <th>成绩</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>语文</td>
      <td><input type="text" v-model.number="chinese"></td>
    </tr>
    <tr>
      <td>数学</td>
      <td><input type="text" v-model.number="math"></td>
    </tr>
    <tr>
      <td>英语</td>
      <td><input type="text" v-model.number="english"></td>
    </tr>
    <tr>
      <td>总分</td>
      <td>{{ sum }}</td>
    </tr>
    <tr>
      <td>平均分</td>
      <td>{{ averange }}</td>
    </tr>
  </tbody>
</table>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    chinese: 90,
    math: 85,
    english: 50
  },
  computed: {
    sum: function () {
      return this.math + this.chinese + this.english
    },
    averange: function () {
      return (this.sum / 3).toFixed(2)
    }
  }
})
```

### 组件

#### 全局定义组件

`Vue.component(标签名, 内容)` 在 HTML 中 Vue 接管的范围内都可以使用

```html + javascript
Vue.component('alert', {
  template: '<button @click="on_click">弹弹弹</button>',
  methods: {
    on_click: function () {
      alert('Yo.')
    }
  }
})
```

#### 局部定义组件

```javascript
new Vue({
  el: '#seg1',
  components: {
    alert: {
      template: '<button @click="on_click">弹弹弹</button>',
      methods: {
        on_click: function () {
          alert('Yo.')
        }
      }
    }
  }
})
```

#### demo

```html
<div id="app">
  <like></like>
</div>

<template id="like-component-tpl">
  <button :class="{liked:liked}" @click="toggle_like">
  👍  {{ likeCount }}
  </button>
</template>
```

```javascript
Vue.component('like', {
  // template: '<button :class="{liked:liked}" @click="toggle_like">👍  {{ likeCount }}</button>',
  // template 内容过长可以使用 es6 模板字符串
  // 也可以定义在 HTML 中模板 这里传选择器
  template: '#like-component-tpl',
  data: function () {  // 使用function return 避免引用赋值
    return {
      likeCount: 10,
      liked: false
    }
  },
  methods: {
    toggle_like: function () {
      if (!this.liked) {
        this.likeCount++
      } else {
        this.likeCount--
      }
      this.liked = !this.liked
    }
  }
})

new Vue({
  el: '#app'
})
```
