import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store'
import ElementUI from 'element-ui'
// import { Button, Select } from 'element-ui';
import '@/assets/css.css';

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
})

router.beforeEach((to, from, next) => {
  // 判断是否需要登录权限
  if (!store.state.user && to.path != '/login') {
    next('/login')
  } else {
    next()
  }
})
