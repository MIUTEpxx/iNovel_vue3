<!-- 排行榜分类标签和横向滑动内嵌页 -->
<script setup>
 import { ref } from 'vue';

//当前选中的标签
 const active = ref(0);

</script>

<template>
        <div class="chartstab">
            <van-tabs v-model:active="active">
                <van-tab title="标签 1">内容 1</van-tab>
                <van-tab title="标签 2">内容 2</van-tab>
                <van-tab title="标签 3">内容 3</van-tab>
                <van-tab title="标签 4">内容 4</van-tab>
            </van-tabs>
        </div>

        <div class="box">
            <div class="box-item">11</div>
            <div class="box-item">22</div>
            <div class="box-item">33</div>
            <div class="box-item">44</div>
            <div class="box-item">55</div>
            <div class="box-item">66</div>
            <div class="box-item">77</div>
            <div class="box-item">88</div>
            <div class="box-item">88</div>
            <div class="box-item">88</div>
            <div class="box-item">88</div>
        </div>

</template>

<style scoped>
    .box{
        /* 横向滑动实现方法1 */
        /* 父元素设置横向滚区域 */
        /* overflow-x:auto ; */
        /* 不允许子元素换行 */
        /* white-space: nowrap; */
        /* width: 100vw; */

        /* 横向滑动实现方法2 */
        display: flex;
        overflow-x: auto;
        width: 100vw;
    }
    .box-item{
        /* 横向滑动实现方法1 */
        /* background: lightcoral; */
        /* padding: 5px 20px; */
        /* 使得元素像内联元素一样排列（不会独占一行）同时能设置宽高 */
        /* display: inline-block; */
        /* margin:5px */

        /* 横向滑动实现方法2 */
        width: 100px;
        background: lightcoral;
        /* 固定元素不被挤压 */
        flex-shrink: 0;
        margin: 0 5px;
    }
    .box::-webkit-scrollbar{
        display: none;
    }
</style>
