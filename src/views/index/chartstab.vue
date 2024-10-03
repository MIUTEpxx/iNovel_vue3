<!-- 排行榜分类标签和横向滑动内嵌页 -->
<script setup>
 import { ref,onMounted } from 'vue';
// import { getCategoriesWithNovels } from '@/api/novel'; // 导入 API 函数
//当前选中的标签
 const active = ref(0);
//  const chartstab = ref([]); // 初始化为空数组
//  onMounted(async () => {
//     try {
//       const response = await getCategoriesWithNovels(); // 调用 API 获取数据
//       chartstab.value = response.data; // 假设响应的数据结构是 { data: [...] }
//     } catch (error) {
//       console.error('Failed to fetch categories with novels:', error);
//       // 处理错误情况，例如显示错误消息
//     }
//   });
 const chartstab=ref([
    {title:'全部',content:[{
        name:'PxxDMX',img_url:"1.png",info:"pxx",num:"连载中 256万字"},
        {name:'内容b',img_url:"2.png",info:"pxx",num:"连载中 256万字"},
        {name:'内容c',img_url:"3.png",info:"pxx",num:"连载中 256万字"},
        {name:'内容a1',img_url:"4.png",info:"pxx",num:"连载中 256万字"},
        {name:'内容b',img_url:"5.png",info:"pxx",num:"连载中 256万字"},
        {name:'内容c',img_url:"6.png",info:"pxx",num:"连载中 256万字"},
        {name:'内容a1',img_url:"7.png",info:"pxx",num:"连载中 256万字"},
        {name:'内容b',img_url:"8.png",info:"pxx",num:"连载中 256万字"},
        {name:'内容c',img_url:"9.png",info:"pxx",num:"连载中 256万字"}]},

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
                                <div class="chartstab-img">
                                    <img :src="`/src/assets/images/${item.img_url}`" alt="">
                                </div>
                                <div class="chartstab-title">
                                    <h3>{{ item.name }}</h3>
                                    <p>{{item.info}}</p>
                                    <p>{{ item.num }}</p>
                                </div>
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
