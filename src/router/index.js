import Vue from 'vue';
import VueRouter from 'vue-router';

const Home=()=>import('views/home/Home.vue')
const Category=()=>import('views/category/Category.vue')
const Cart=()=>import('views/cart/Cart.vue')
const Profile=()=>import('views/profile/Profile.vue')

//安装vuerouter
Vue.use(VueRouter);

//配置路径映射关系
const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    }
]

//创建VueRouter实例
const router=new VueRouter({
    routes,
    mode:'history'
})

//导出router
export default router;