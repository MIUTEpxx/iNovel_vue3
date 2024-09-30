
  
  <!-- 轮播图 -->
<script setup>
import { ref } from 'vue';
let bannerList=ref([
    {id:1,img_url:'banner1.jpg'},
    {id:2,img_url:'banner2.jpg'},
    {id:3,img_url:'banner3.jpg'},
    {id:4,img_url:'banner4.jpg'},
    {id:5,img_url:'banner5.jpg'},
])
</script>

<template>
        <div class="banner">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="v in bannerList" :key="v.id">
                    <img :src="`/src/assets/images/${v.img_url}`" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
</template>

<style scoped>


</style>
