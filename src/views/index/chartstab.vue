<!-- 排行榜分类标签和横向滑动内嵌页 -->
<script setup>
 import { ref } from 'vue';

//当前选中的标签
 const active = ref(0);
 const chartstab=ref([
    {title:'全部',content:'内容1'},
    {title:'都市',content:'内容2'},
    {title:'历史',content:'内容3'},
    {title:'科幻',content:'内容4'},
    {title:'全部',content:'内容5'},
    {title:'都市',content:'内容6'},
    {title:'历史',content:'内容7'},
    {title:'科幻',content:'内容8'},
    
 ])
</script>

<template>
        <div class="chartstab">
            <van-tabs v-model:active="active">
                <van-tab  v-for="(v,i) in chartstab" :key="i" :title="v.title">
                    {{ v.content }}
                </van-tab>
            </van-tabs>
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
