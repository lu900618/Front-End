# Vue-cli 开发

## 安装

`npm install -g vue-cli`
`npm install -g webpack`

## 创建项目

`vue init webpack vue-music` 使用 webpack 模板创建, 项目名为 vue-music
此时会弹出命令: 选择 回车即可

```bash
? Project name (aaa) # 项目名
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

# 然后出现
   vue-cli · Generated "aaa".
# 按提示依次执行
   To get started:

     cd aaa
     npm install
     npm run dev

   Documentation can be found at https://vuejs-templates.github.io/webpack
```

## Vue 组件

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

## 路由

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
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: './rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
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

<script type="text/ecmascript-6">
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
