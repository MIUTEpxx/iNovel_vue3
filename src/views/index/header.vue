<!-- 头部 -->
<script setup>
import { ref } from 'vue';
import HeaderHd from '@/components/header/HeaderHd.vue';
</script>

<template>
 
        <div class="header">
            <!-- 头部搜索栏 -->
            <HeaderHd />
            <!-- 头部导航栏 -->
            <div>
                <van-sticky>
                    <ul class="header-tabs">
                    <li style="color: white;">首页</li>
                    <li>男生</li>
                    <li>女生</li>
                    <li>图书</li>
                    <li>新书</li>
                    <li>最新上架</li>
                </ul>
                </van-sticky>
            </div>
            <!-- 头部图片 -->
            <div class="headerImgBox">
                <img src="@/assets/images/header2.jpg" alt="">
            </div>
            <!-- <p class="TempTest">头部</p> -->
             <!-- <div class="box"></div> -->
        </div>
</template>

<style scoped>


</style>
