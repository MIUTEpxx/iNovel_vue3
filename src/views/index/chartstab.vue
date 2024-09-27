<!-- 排行榜分类标签和横向滑动内嵌页 -->
<script setup>
 import { ref } from 'vue';

//当前选中的标签
 const active = ref(0);
 const chartstab=ref([
    {title:'全部',content:[{name:'内容a1'},{name:'内容b'},{name:'内容c'},{name:'内容a1'},{name:'内容b'},{name:'内容c'},{name:'内容a1'},{name:'内容b'},{name:'内容c'}]},
    {title:'都市',content:[{name:'内容a2'},{name:'内容b'},{name:'内容c'}]},
    {title:'历史',content:[{name:'内容a3'},{name:'内容b'},{name:'内容c'}]},
    {title:'科幻',content:[{name:'内容a4'},{name:'内容b'},{name:'内容c'}]},
    {title:'武侠',content:[{name:'内容a5'},{name:'内容b'},{name:'内容c'}]},
    {title:'奇幻',content:[{name:'内容a6'},{name:'内容b'},{name:'内容c'}]},
    {title:'穿越',content:[{name:'内容a7'},{name:'内容b'},{name:'内容c'}]},
    {title:'悬疑',content:[{name:'内容a8'},{name:'内容b'},{name:'内容c'}]},
    
 ])
</script>

<template>
        <div class="chartstab">
            <van-tabs v-model:active="active">
                <van-tab  v-for="(v,i) in chartstab" :key="i" :title="v.title">
                   <div class="chartstab-content">
                        <div class="chartstab-item">
                            <div class="chartstab-list" v-for="(item,i) in v.content" :key="i">
                                {{ item.name }}
                            </div>
                        </div>
                   </div>
                </van-tab>
            </van-tabs>
        </div>
</template>

<style scoped>
/* 以下仅为实例用 */
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
