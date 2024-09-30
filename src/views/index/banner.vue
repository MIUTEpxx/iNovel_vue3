
  
  <!-- 轮播图 -->
<script setup>
import { ref } from 'vue';
</script>

<template>
        <div class="banner">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <img src="@/assets/images/banner1.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="@/assets/images/banner2.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="@/assets/images/banner3.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="@/assets/images/banner4.jpg" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
</template>

<style scoped>


</style>
