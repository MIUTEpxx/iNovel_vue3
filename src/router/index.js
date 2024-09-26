//导入 Vue Router 库中的两个函数，用于创建和管理单页应用的路由
import { createRouter,createWebHashHistory } from "vue-router";

const routes=[
    {
        path:'/',//路径
        name:'Home',//名字
        component:()=>import('')// 动态导入的组件,当用户访问应用的根路径 / 时,会动态添加其中的组件并渲染
    }
]
//创建一个路由实例
const router=createRouter({
    history:createWebHashHistory,//创建一个 hash 模式的历史记录管理器
    routes // routes:routes 键与值名一样 可简写为routes //包含了所有的路由定义的数组
})

export default router// 导出路由实例，以便在 Vue 应用中使用