
import VueRouter from 'vue-router'
import home from './lib/components/home.vue'
import member from './lib/components/member.vue'
import shopcar from './lib/components/shopcar.vue'
import search from './lib/components/search.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search},
    ],
    linkActiveClass:'mui-active'
})

export default router