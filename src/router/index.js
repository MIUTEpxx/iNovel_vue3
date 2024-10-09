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
        meta: {
          title: '书城首页'
        },
        component:()=>import('../views/index/index.vue')//动态导入的组件,当用户访问应用的根路径 / 时,会动态添加其中的组件并渲染
    },
    {
        path:'/community',//社区
        name:'community',
        meta: {
          title: '社区中心'
        },
        component:()=>import('../views/community/index.vue')
    },
    {
        path:'/welfare',//福利
        name:'welfare',
        meta: {
          title: '福利中心'
        },
        component:()=>import('../views/welfare/index.vue')
    },
    {
        path:'/my',//我的
        name:'my',
        meta: {
          title: '个人中心'
        },
        component:()=>import('../views/my/index.vue')
    },
    {
        path:'/login',//登录页
        name:'login',
        meta: {
          title: '登录界面'
        },
        component:()=>import('../views/my/login.vue')
    },
    {
        path: '/novel/:id',
        name: 'novel',
        meta: {
          title: '小说详情页'
        },
        component: () => import("../views/novel/index.vue"),

      },
      {
        //:id表示对应的小说id
        path: '/reader/:id',
        meta: {
          title: '小说阅读器'
        },
        name: 'reader',
        component: () => import("../views/novel/reader.vue"),
      },
      {
        // :keyword? 表示 keyword 是一个可选的动态参数。这意味着URL可以只是 /search，也可以是 /search/some_keyword
        path: '/search/:keyword?',
        meta: {
          title: '搜索结果页面'
        },
        name: 'search',
        component: () => import("../views/search/index.vue"),
      },
      
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
   // 创建一个正则表达式对象来匹配以 '/novel' 开头的路径
   const novelRegex = /\/novel(.*)/;
   const novelRegex2 = /\/read(.*)/;
    // if (to.path === '/login'||novelRegex.test(to.path)||novelRegex2.test(to.path)) {
    //   store.commit('setTabBarShow', false);
    // } else {
    //   store.commit('setTabBarShow', true);
    // }
    // next();
    if (to.path === '/index'||to.path === '/community'||to.path === '/welfare'||to.path === '/my') {
      store.commit('setTabBarShow', true);
    } else {
      store.commit('setTabBarShow', false);
    }
    next();
  });

export default router// 导出路由实例，以便在 Vue 应用中使用