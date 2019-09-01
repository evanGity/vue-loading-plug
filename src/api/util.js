/**
 * 获取当前元素的样式
 * @param obj 目标元素
 * @param attr 目标属性
*/
export const getStyle = function (obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr]
  } else {
    return getComputedStyle(obj)[attr]
  }
}
