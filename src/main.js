// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import ajax from '@/js/Ajax/index.js'
import 'iview/dist/styles/iview.css'
import '@/style/common.less'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(ajax)
// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   // var reg = new RegExp('(^|&)id=([^&]*)(&|$)')
//   // var r = window.location.search.substr(1).match(reg)
//   // console.log('0_o?', r)
//   if (!window.sessionStorage.getItem('token') && to.fullPath !== '/login') {
//     next({ path: '/login' })
//   } else {
//     next()
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
