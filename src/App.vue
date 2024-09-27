<script setup>
/*
响应式数据:指的是那些能够自动追踪其变化并在变化发生时触发视图更新的数据。
在 Vue 中，当你创建一个响应式数据时，Vue 会自动监听这些数据的变化，
一旦数据被修改，Vue 就能够知道并作出相应的响应，比如更新 DOM，以确保视图与数据保持同步
*/
import { ref } from 'vue';// ref是一个用于创建响应式数据的函数
import Navbottom from './views/navbottom.vue';

</script>

<template>

        <div>
            
            <!-- 路由匹配到的组件将渲染在这里↓ -->
            <router-view></router-view>
            
            <!-- 底部导航栏 -->
             <!-- <p class="TempTest">书城 社区 福利 我的</p> -->
             <Navbottom /> 
        </div>
</template>

<!-- scoped表示该样式是局域样式,不会影响其他组件 -->
<style scoped>


</style>
