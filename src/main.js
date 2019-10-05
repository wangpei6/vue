//入口文件
import Vue from 'vue'
import app from './app.vue'
import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf' 

import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入路由
import router from './router.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router//挂载路由对象
})