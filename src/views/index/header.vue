<script setup>
import { ref } from 'vue';
</script>

<template>
 
        <div class="header">
            <div class="header-search">
                <div class="search-list">
                    <i class="iconfont icon-sousuo"></i>
                    <input type="text" placeholder="请输入书名,作者">
                </div>
            </div>
            <div>
                <van-sticky>
                    <ul class="header-tabs">
                    <li>推荐</li>
                    <li>男生</li>
                    <li>女生</li>
                    <li>图书</li>
                    <li>新书</li>
                    <li>最新上架</li>
                </ul>
                </van-sticky>
            </div>
            <div>
                <img src="@/assets/images/header.jpg" alt="">
            </div>
            <!-- <p class="TempTest">头部</p> -->
             <div class="box"></div>
        </div>
</template>

<style scoped>


</style>
