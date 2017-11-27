---
create: 2017年8月22日 08:58:05
status: public
title: Vue笔记
author: 32401545@qq.com
---
# Vue

## MVVM

![](images/vue/mvvm.png)

Model: 数据 -- 负责数据存储 对应前端就是 javascript对象

View: 视图 -- 负责页面展示 对应前端就是 DOM 对象

ViewModel: 连接视图和数据的中间件

在 MVVM 下, 数据和视图是不能直接通讯的, 需要通过 ViewModel 进行通讯, ViewModel 通常要实现一个 observe 观察者, 当 数据 发生变化, observe 能观察到这种变化, 然后通知到对应的 视图 做出更新; 当用户操作视图, observe 也能观察到相应的变化, 然后通知数据做改动 -- 这就是数据的**双向绑定**

## Vue指令

### `{{ }}` 插值表达式

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

用法: `v-for="item in arr" :key="唯一值"` 新版本需要绑定 key

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

需要索引写法:

```html
<div v-for="(item, index) in items"></div>
<div v-for="(val, key) in user"></div>
<div v-for="(val, key, index) in user"></div>
```


### v-bind

可以给 HTML 元素或者动态组件**动态**地绑定一个或多个特性, 如动态绑定 style 和 class

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

### v-text / v-html

解决网速特别慢时, 表达式闪烁

不能单独使用, 必须配合某一个标签元素

```html
<div id="app">
  <span v-text="name"></span>
  <div v-html="name"></div>
</div>
<script>
  new Vue({
    el: '#app',
    data: {
      name: 'zhangsan'
    }
  })
</script>
```

区别: 能否解析标签, 使用 v-html 渲染数据可能会导致 XSS（跨站脚本） 攻击

### v-cloak

v-cloak 指令保持在元素上直到关联实例结束编译后自动移除，v-cloak  和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

通常用来防止 `{{ }}` 表达式闪烁问题

```html
<style>
  [v-cloak] { display: none }
</style>
<span v-cloak>{{msg}}</span>
<script>
  new Vue({
    data:{
        msg:'hello ivan'
      }
  })
</script>
```

### v-on

绑定事件监听，表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略，用在普通的html元素上时，只能监听 原生 DOM 事件。用在自定义元素组件上时，也可以监听子组件触发的自定义事件。

用法:

+ `v-on="{事件名:事件函数,事件名2:事件函数2}"`
+ `v-on:事件名="事件函数"`

tips:

+ `v-on` 可以简写为 `@`
+ 事件函数要写在 methods 参数选项中

常用事件:

+ v-on:click
+ v-on:keydown
+ v-on:keyup
+ v-on:mousedown
+ v-on:mouseover
+ v-on:submit
+ ....

v-on 提供了很多事件修饰符来辅助实现一些功能:

+ `.stop` - 调用 event.stopPropagation()。
+ `.prevent` - 调用 event.preventDefault()。
+ `.capture` - 添加事件侦听器时使用 capture 模式。
+ `.self` - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
+ `.{keyCode | keyAlias}` - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
+ `.native` - 监听组件根元素的原生事件。

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

### v-model 双向数据绑定

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

作用：根据表达式的值的真假条件来决定是否渲染元素.
如果条件为false不渲染（达到隐藏元素的目的），为true则渲染。
在切换时元素及它的数据绑定被销毁并重建

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

### v-show

根据表达式的真假值，切换元素的 display CSS 属性，如果为 false ，则在元素上添加 display:none 来隐藏元素，否则移除 display:none 实现显示元素

```html
<h1 v-show="isShow">Yes</h1>

new Vue({
  data:{
    isShow:true
  }
});

```

v-if 和 v-show 的区别：

  v-if 和 v-show 都能够实现对一个元素的隐藏和显示操作,

  但是 v-if是将这个元素添加或者移除到dom中，
  而v-show 是在这个元素上添加 style="display:none"和移除它来控制元素的显示和隐藏的

## 计算属性

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

## 组件

### 全局定义组件

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

### 局部定义组件

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

### demo

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

### 父子组件通讯

```html
<div id="app">
  <alert msg="怎么弹出这个信息" a="弹出这个" b="还有这个"></alert>
  <user username="whh"></user>
  <user username="lhh"></user>
</div>
```

```javascript
Vue.component('alert', {
  template: '<button @click="onClick">弹弹弹</button>',
  props: ['msg', 'a', 'b'], // 注意这个属性
  methods: {
    onClick: function () {
      alert(`msg:${this.msg}  a:${this.a}  b:${this.b}`)
    }
  }
})
Vue.component('user', {
  template: '<a :href="\'/user/\' + username" >{{ username }}</a>',
  props: ['username'],
  methods: {

  }
})

new Vue({
  el: '#app'
})
```

### 子父组件通讯

```html
<div id="app">
  <balance></balance>
</div>
```

```javascript
Vue.component('balance', {
  template: `
  <div>
    <show @show-balance="show_balance"></show>
    <div v-if="show">
      您的余额: 00.00
    </div>
  </div>
  `,
  methods: {
    show_balance: function (data) {
      this.show = true
      console.log('data',data);
    }
  },
  data: function () {
    return {
      show: false
    }
  }
})

Vue.component('show', {
  template: `
  <button @click="onClick()">显示余额</button>
  `,
  methods: {
    onClick() {
      // $emit 触发当前实例上的事件 (事件名, 参数)
      this.$emit('show-balance', {a: 1, b: 2})
    }
  }
})

var app = new Vue({
  el: '#app'
})
```

### 兄弟组件通讯

```html
<div id="app">
  <huahua></huahua>
  <shuandan></shuandan>
</div>
```

```javascript
var Event = new Vue()

Vue.component('huahua', {
  template: `<div>我说: <input @keyup="on_change" v-model="i_said"></div>`,
  methods: {
    on_change: function () {
      Event.$emit('huahua-said-something', this.i_said)
    }
  },
  data: function () {
    return {
      i_said: ''
    }
  }
})

Vue.component('shuandan', {
  template: `<div>花花说: {{huahua_said}}</div>`,
  data: function () {
    return {
      huahua_said: ''
    }
  },
  mounted: function () { // 初始化完毕节点--钩子
    var that = this
    Event.$on('huahua-said-something', function (data) {
      that.huahua_said = data
    })
  }
})
new Vue({
  el: '#app'
})
```

## 过度&动画

将需要动画的组件放入 'transition' 组件内部

在进入/离开的过渡中，会有 6 个 class 切换。
v-enter：定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
v-enter-active：定义过渡的状态。在元素整个过渡过程中作用，在元素被插入时生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入一帧后生效 (于此同时 v-enter 被删除)，在 transition/animation 完成之后移除。
v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
v-leave-active：定义过渡的状态。在元素整个过渡过程中作用，在离开过渡被触发后立即生效，在 transition/animation 完成之后移除。这个类可以被用来定义过渡的过程时间，延迟和曲线函数。
v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发一帧后生效 (于此同时 v-leave 被删除)，在 transition/animation 完成之后移除。

// TODO

## 生命周期

![vue声明周期](/images/vue/lifecycle.png)

## vue-cli

### 安装

```bash
npm install -g vue-cli
```

### 测试

```bash
vue -V # 测试是否安装成功
```

结果

```bash
2.8.2 # 安装的 vue 的版本号
```

### 搭建第一个项目

```bash
vue init webpack helloworld
```

webpack 是官方模板
helloworld 是项目名称

依次按提示输入

```bash
? Project name (helloworld) # 项目名 指的是 package.json 中的项目名
? Project description (A Vue.js project) # 项目描述
? Author (xxxx <xxxx@qq.com>) # 作者
> Runtime + Compiler: recommended for most users # 运行时 + 编译
  Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allow
ed in .vue files - render functions are required elsewhere # 仅运行时
? Install vue-router? (Y/n) # 是否安装 vue-router
? Use ESLint to lint your code? (Y/n) # 是否使用 ESLint
? Pick an ESLint preset (Use arrow keys) # 选择ESLint 规则
> Standard (https://github.com/feross/standard)
  Airbnb (https://github.com/airbnb/javascript)
  none (configure it yourself)
? Setup unit tests with Karma + Mocha? (Y/n) # 测试环境
? Setup e2e tests with Nightwatch? (Y/n)

# 等待
# 完成后会显示以下提示
   vue-cli · Generated "helloworld".
# 按提示依次执行
   To get started:

     cd helloworld
     npm install
     npm run dev

   Documentation can be found at https://vuejs-templates.github.io/webpack
```

一次输入命令, 浏览器会自动弹出, 显示页面.

### 项目文件夹说明

![项目文件夹说明](images/vue/项目文件夹说明.png)

### 使用组件

1.在 `src/components` 下新建文件夹 `m-header`, 创建 `m-header.vue` 文件.

```html
<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
```

2.在主文件 App.vue 中引入

```html
<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header' // 让程序自动查询.vue文件
  export default {
    components: {
      MHeader
    }
  }
</script>
```

3.在主文件 App.vue 使用处加上组件名

```html
<template>
  <div id="app">
    <m-header></m-header>
  </div>
</template>
```

### 路由

1.在 `\src\router\index.js` 中注册路由

```javascript
// 导包
import Vue from 'vue'
import Router from 'vue-router'
// 注册路由
Vue.use(Router)
```

2.导入其他组件, 配置路由

```javascript
import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/recommend', component: Recommend },
    { path: '/singer', component: Singer },
    { path: './rank', component: Rank },
    { path: '/search', component: Search }
  ]
})
```

3.在 main.js 中使用

```javascript
import router from './router' // 这个 router 是上一步导出的 Router的实例

new Vue({
  el: '#app',
  router, // 传入 router
  render: h => h(App)
})
```

4.配置 tab.vue

```html
<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>
```

5.App.vue 中使用

```html
<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'

  export default {
    components: {
      MHeader,
      Tab
    }
  }
</script>
```