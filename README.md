**安装：**

    npm install vue-loading-plug --save-dev

**使用**
1.在路口文件main.js

```
import Vue from 'vue'
import App from './App'
import router from './router'

import vueLoadingPlug from 'vue-loading-plug'
Vue.use(vueLoadingPlug, {
	// ...options 如： timeout：30000
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


```

template:

1. v-vloading值为Boolean类型时
```
<div class="page-wrap theme-color" v-vloading="true">
    <section class="page-content">
      <div><a href="#">样式一</a></div>
      <div><a href="#">样式二</a></div>
      <div><a href="#">样式三</a></div>
      <div><a href="#">样式四</a></div>
    </section>
  </div>
```

2. v-vloading值为Object类型时, **配置项数据为响应式的，更改配置项可动态更改loading组件的样式**
```
<template>
  <div class="page-wrap theme-color" v-vloading="options">
    <section class="page-content">
      <div><a href="#">样式一</a></div>
      <div><a href="#">样式二</a></div>
      <div><a href="#">样式三</a></div>
      <div><a href="#">样式四</a></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      options: {
        show: false, // 是否显示加载效果
        showIcon: true, // 是否显示加载图标
        iconClass: 'iconfont icon-time', // 显示加载图标的样式，基于iconfont，也可以自定义
        text: '加载中...', // 设置加载时显示的文本
        showMask: true, // 是否需要遮罩层
        maskStyle: { // 遮罩层的样式
          'border-width': '1px'
        },
        mainStyle: { // 加载效果中心主体结构的样式
          'border-color': 'red'
        },
        fullScreen: false, // 是否全屏显示
        timeout: 30000 // 加载效果最大显示时间
      }
    }
  }
}
</script>

```
**配置项参数**
|  配置项	| 类型 | 默认值 | 说明| 备注|
|-- |--|--|--|--|
| show |  Boolean |false | 是否显示加载效果, |可选值为true, false |
| timeout|  Number | 30000| 加载效果最大显示时间， 超过时间则自动隐藏 | 大于等于零的正整数 |
| showIcon|  Boolean |true| 是否显示加载图标| 可选值为true, false|
|iconClass | String | iconfont icon-time| 显示加载图标的样式| 基于iconfont，也可以自定义, 插件内置五种加载效果： icon-wheel ， icon-circle，icon-loading, icon-step, icon-time, 具体效果表格下方的图片： |
| text|  String | '加载中...'| 设置加载时显示的文本,|可以是任何文本|
| showMask|  Boolean |true| 是是否需要遮罩层|可选值为true, false |
| maskStyle|  Object | {}| 遮罩层的样式| 以json形式设置样式， 如： { ‘border’: '1px solid red;'} |
| mainStyle|  Object | {}| 加载效果中心主体结构的样式|  用法同 maskStyle|
| fullScreen|  Boolean |true| 是否全屏显示| 当前加载效果是基于绑定元素进行绝对定位，局部显示，如果想要全屏显示加载效果，可以将该值设置为true，可选值为true, false |

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190901184133917.png)