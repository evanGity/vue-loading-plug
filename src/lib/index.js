import Loading from './loading.vue'
import { getStyle } from '../api/util.js'

export default {
  install (Vue, opts) {
    let LoadingComponent = Vue.extend(Loading)
    let loadingComp = new LoadingComponent()
    Vue.directive('vloading', {
      bind (el, binding, vNode, oldVnode) {
        const posVal = getStyle(el, 'position')
        const posArr = ['absolute', 'fixed']
        if (!posArr.includes(posVal)) {
          el.style.position = 'relative'
        }
        let bValue = binding.value
        if (typeof bValue === 'boolean') {
          loadingComp.show = bValue === true
        } else if (typeof bValue === 'object' && !Array.isArray(bValue)) {
          let finalOpt = {}
          Object.assign(finalOpt, opts, bValue)
          for (let item in finalOpt) {
            loadingComp[item] = finalOpt[item] ? finalOpt[item] : ''
          }
        }
        if (binding.modifiers.full) {
          loadingComp.fullScreen = true
        }
        const tgt = document.createElement('div')
        loadingComp.$mount(tgt)
        el.appendChild(loadingComp.$el)
      },
      update (el, binding, vNode, oldVnode) {
        let bValue = binding.value
        if (typeof bValue === 'boolean') {
          loadingComp.show = bValue === true
        } else if (typeof bValue === 'object' && !Array.isArray(bValue)) {
          let finalOpt = {}
          Object.assign(finalOpt, opts, bValue)
          for (let item in finalOpt) {
            loadingComp[item] = finalOpt[item] ? finalOpt[item] : ''
          }
        }
      }
    })
  }
}
