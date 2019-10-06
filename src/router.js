
import VueRouter from 'vue-router'
import home from './lib/components/home.vue'
import member from './lib/components/member.vue'
import shopcar from './lib/components/shopcar.vue'
import search from './lib/components/search.vue'
import newslist from './lib/news/NewsList.vue'
import newsinfo from './lib/news/NewsInfo.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search},
        {path:'/home/newslist',component:newslist},
        {path:'/home/newsinfo/:id',component:newsinfo}
    ],
    linkActiveClass:'mui-active'
})

export default router