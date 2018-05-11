import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Posts from './pages/Posts.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/posts'},
  { path: '/posts', component: Posts, name: 'posts'}
]

const router = new VueRouter ({
  routes,
  mode: 'history'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
