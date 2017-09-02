export default {
  install (Vue) {
    require('./ajax').default(Vue)
  }
}
