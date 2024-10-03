//导入 Vue Router 库中的两个函数，用于创建和管理单页应用的路由
import { createRouter,createWebHashHistory } from "vue-router";
import store from '@/store'; // 引入 Vuex store

const routes=[
    {
        //路由重定向
        path:'/',
        //任何对根路径的访问都应该被重定向到 /index 路径 即首页
        redirect:'/index'
    },
    {
        //首页
        path:'/index',//路径
        name:'index',//名字
        component:()=>import('../views/index/index.vue')//动态导入的组件,当用户访问应用的根路径 / 时,会动态添加其中的组件并渲染
    },
    {
        path:'/community',//社区
        name:'community',
        component:()=>import('../views/community/index.vue')
    },
    {
        path:'/welfare',//福利
        name:'welfare',
        component:()=>import('../views/welfare/index.vue')
    },
    {
        path:'/my',//我的
        name:'my',
        component:()=>import('../views/my/index.vue')
    },
    {
        path:'/login',//登录页
        name:'login',
        component:()=>import('../views/my/login.vue')
    },
    {
        path:'/login',//登录页
        name:'login',
        component:()=>import('../views/my/login.vue')
    }
]
//创建一个路由实例
const router=createRouter({
    history:createWebHashHistory(),//创建一个 hash 模式的历史记录管理器
    routes, // routes:routes 键与值名一样 可简写为routes //包含了所有的路由定义的数组
    // 当你访问某个路由，并且有对应的 <router-link> 时，应该给这个 <router-link> 添加一个名为 selected 的类
    //例如navbottom.vue中的<router-link :to="v.path">,点击后表示当前选中,给该标签添加 selected
    linkActiveClass:'selected'
})

// 设置了 beforeEach 路由守卫来处理底部导航栏的显示和隐藏
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
      store.commit('setTabBarShow', false);
    } else {
      store.commit('setTabBarShow', true);
    }
    next();
  });

export default router// 导出路由实例，以便在 Vue 应用中使用