# vue-element-ui-transfer-tree

一个基于 Vue.js 2.X 和 element ui 的穿梭树组件。使用前请确认已经引入 element-ui。

![vue-element-ui-transfer-tree](https://raw.githubusercontent.com/mars-ou1991/vue-element-ui-transfer-tree/main/src/assets/vue-element-ui-transfer-tree.png?sanitize=true)

### [在线预览 / Online preview](https://mars-ou1991.github.io/vue-element-ui-transfer-tree/)

## 安装

```
yarn add vue-element-ui-transfer-tree

npm i -S vue-element-ui-transfer-tree

```

```
  import VueElementUiTransferTree from 'vue-element-ui-transfer-tree'
  ...
  export default {
        components: {
            VueElementUiTransferTree
        },
  ...
```

### [Demo 具体代码](https://github.com/mars-ou1991/vue-element-ui-transfer-tree/blob/main/src/App.vue)

## 参数 Props

### tree-props

element ui tree 组件的参数对象，详见：https://element.eleme.cn/#/zh-CN/component/tree#attributes

### default-checked-keys

默认选中的节点

### left-title

待选区的标题

### right-title

已选区的标题

## 事件 Events

### checked-change

当节点被选中时，默认参数返回所有被选中的节点

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies component for production

```
yarn build-component
```

### Compiles and minifies doc for production

```
yarn build-component
```

### Lints and fixes files

```
yarn build-doc
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
