<!-- 书城首页 -->
<script setup>
import { onMounted, ref } from 'vue';
import Header from './header.vue';
import Charts from './charts.vue';
import Chartstab from './chartstab.vue';
import Banner from './banner.vue';
import Recommend from './recommend.vue';

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
        <!-- 开屏广告 -->
         <div class="spread" v-show="adBack" @click="adBack=false">
                <span class="jump">点击跳过 <b>{{n}}</b> 秒</span>
         </div>
         <!-- 首页 -->
        <div class="container">
                <Header></Header>
                <Charts></Charts>
                <Chartstab></Chartstab>
                <Banner></Banner>
                <Recommend></Recommend>
        </div>

</template>

<!-- scoped表示该样式是局域样式,不会影响其他组件 -->
<style scoped>


</style>
