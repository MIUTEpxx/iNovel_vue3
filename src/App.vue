<script setup>
/*
响应式数据:指的是那些能够自动追踪其变化并在变化发生时触发视图更新的数据。
在 Vue 中，当你创建一个响应式数据时，Vue 会自动监听这些数据的变化，
一旦数据被修改，Vue 就能够知道并作出相应的响应，比如更新 DOM，以确保视图与数据保持同步
*/
import { ref ,onMounted} from 'vue';// ref是一个用于创建响应式数据的函数
import Navbottom from './views/navbottom.vue';
let adBack=ref('true')//开屏广告的显示和隐藏
let n =ref(5)//默认时间 秒
let timer=null;
function play(){
        n.value--;
        console.log(n.value);
        if(n.value<=0){
                adBack.value=false;
        }
};
function autoPlay(){
        timer=setInterval(play,1000);//定时器 1s
}
onMounted(()=>{
        autoPlay();
})
</script>

<template>

        <div class="appRoot">
              <!-- 开屏广告 -->
                <div class="spread" v-show="adBack" @click="adBack=false">
                        <span class="jump">点击跳过 <b>{{n}}</b> 秒</span>
                </div>

            <!-- 路由匹配到的组件将渲染在这里↓ -->
            <router-view v-show="!adBack"></router-view>
            
            <!-- 底部导航栏 -->
             <!-- <p class="TempTest">书城 社区 福利 我的</p> -->
             <Navbottom v-show="!adBack"/> 
        </div>
</template>

<!-- scoped表示该样式是局域样式,不会影响其他组件 -->
<style scoped>


</style>
