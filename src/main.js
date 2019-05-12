// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router' // 路由
import store from './store'// vuex
import './assets/style/common.css'// 公共样式
import * as filters from './components/filters' // 全局过滤器

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 路由
  store, // 应用级数据（分组数据存贮）
  template: `<div id="app" style="width:100%;height:100%">
              <router-view/>
            </div>`
})
