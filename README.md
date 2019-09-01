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
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190901200912753.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3N0dWRlbnRlbmdsaXNo,size_16,color_FFFFFF,t_70)
