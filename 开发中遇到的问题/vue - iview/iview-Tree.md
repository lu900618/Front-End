---
title: iview Tree 组件遇到的问题
tags: iview, vue
notebook: vue
---
# iview Tree 组件遇到的问题

```html
<Tree :data="ztreeDataSource" show-checkbox @on-check-change="checkChanged"></Tree>
```

iview 树组件，**checked是否勾选(如果勾选，子节点也会全部勾选)**

将不符合 Tree 结构的数组，转为符合的数组：

```js
/**
 * 格式化 Tree 带CheckBox
 * @param tree
 * @param menu
 * @return {Array}
 */
export function formatTreeWithChecked (tree = [], menu = []) {
  let arr = []
  if (!!tree && tree.length !== 0) {
    tree.forEach(item => {
      let obj = item
      obj.id = item.id
      obj.title = item.name
      obj.expand = true
      obj.checked = (obj.children && obj.children.length > 0) ? false : (menu.some(it => it.menu_id === item.id)) // 此处加判断有没有子节点，在没有子节点的时候正常给 true/false，如果直接给值，父节点的 checked 勾选，子节点会全部勾选。
      obj.children = formatTreeWithChecked(item.children, menu) // 递归调用
      arr.push(obj)
      obj = null
    })
  }
  return arr
}
```