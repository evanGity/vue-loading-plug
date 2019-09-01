<template>
  <div class="ui-loading-content" v-if="show" :style="{position: fullScreen ? 'fixed' : 'absolute'}">
    <div class="loading-mask" :style="maskStyle" v-if="showMask"></div>
    <div class="loading-main" :style="mainStyle" :class='{[position]: true, "space-center": true}'>
      <span v-if="showIcon"><i :class="iconClass"></i></span>
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: null, // 定时器
      positionDefine: 'absolute' // 基于某个元素时定位为absolute,全屏幕时定位fixed
    }
  },
  props: {
    // 是否显示组件
    show: {
      type: Boolean,
      default: false
    },
    // 是否显示图标
    showIcon: {
      type: Boolean,
      default: true
    },
    // 显示加载图标的样式
    iconClass: {
      type: String,
      default: 'iconfont icon-time'
    },
    // 动态效果主体的样式
    position: {
      type: String,
      default: 'center-center'
    },
    // 设置加载的问题
    text: {
      type: String,
      default: '加载中...'
    },
    // 是否需要遮罩层
    showMask: {
      type: Boolean,
      default: true
    },
    // 遮罩层的样式
    maskStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 设置组件自定义样式
    mainStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    // 自动消失时间
    timeout: {
      type: Number,
      default: 30000
    }
  },
  watch: {
    show (val) {
      if (val) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          if (val) {
            this.show = false
            clearTimeout(this.timer)
          }
        }, this.timeout)
      } else {
        clearTimeout(this.timer)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/iconfont/iconfont.css';
.ui-loading-content{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  .loading-mask{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.5)
  }
  .loading-main{
    min-width: 100px;
    min-height: 100px;
    color: #2D8cF0;
    font-size: 13px;
    position: absolute;
    z-index: 200;
    text-align:center;
  }
}

.center-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.space-center {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.iconfont {
  font-size: 15px;
  display: inline-block;
  animation: rotate 1.5s infinite linear;
  transform-origin: center center;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>
