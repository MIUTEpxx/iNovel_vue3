<!-- 排行榜分类标签和横向滑动内嵌页 -->
<script setup>
// 导入 bigNumberTransform 函数
import { bigNumberTransform } from '@/utils/countManage.js';

 import { ref,onMounted ,watch  } from 'vue';
 import { getNovelTags, getNovelsByTag, getNovelsInfo} from '@/api/novel'; // 获取标签和小说信息的API
 let novelTabs = ref([]);
 let novels=ref([]);
const active = ref(0); // 默认激活的标签索引
onMounted(async () => {
    try {
        // 获取所有标签
        let response = await getNovelTags();
        response.data.data.unshift({name:'全部'} ); // 添加一个默认的标签
        novelTabs.value = response.data.data; // 响应的数据结构是 { status, message, data }
        console.log(response);
        response=await getNovelsInfo(); // 获取全部小说的信息
        novels.value=response.data.data;

    } catch (error) {
        console.error('Failed to fetch novel tags:', error);
    }

});

// 监听 active 的变化来获取特定标签的小说信息
watch(active, async (newActive) => {
    try {
        console.log(newActive);
        if(newActive===0){
            let response=await getNovelsInfo(); // 获取全部小说的信息
            novels.value=response.data.data;
            return;
        }
        // 当 active 变化时，获取新的小说列表
        let response = await getNovelsByTag(novelTabs.value[newActive].id);
        novels.value = response.data.data; // 更新 novels
         console.log(response);
    } catch (error) {
        console.error('Failed to fetch novels by tag:', error);
    }
});
</script>

<template>
        <div class="chartstab">
            <van-tabs v-model:active="active">
                <van-tab  v-for="(v,i) in novelTabs" :key="i" :title="v.name">
                   <div class="chartstab-content">
                        <div class="chartstab-item">
                            <router-link :to="{
                                name: 'novel',
                                params: { id: item.id },
                            }" class="chartstab-list" v-for="(item, i) in novels" :key="i">
                           <div class="chartstab-img">
                                    <img :src="`${item.img_url}`" alt="">
                                </div>
                                <div class="chartstab-title">
                                    <h3>{{ item.title }}</h3>
                                    <p>作者:{{item.author}}</p>
                                    <p><van-icon name="good-job-o" />{{ item.Likes }}</p>
                                </div>
                            </router-link>
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

<!-- //  const chartstab=ref([
//     {title:'全部',content:[{
//         name:'PxxDMX',img_url:"1.png",info:"pxx",num:"连载中 256万字"},
//         {name:'内容b',img_url:"2.png",info:"pxx",num:"连载中 256万字"},
//         {name:'内容c',img_url:"3.png",info:"pxx",num:"连载中 256万字"},
//         {name:'内容a1',img_url:"4.png",info:"pxx",num:"连载中 256万字"},
//         {name:'内容b',img_url:"5.png",info:"pxx",num:"连载中 256万字"},
//         {name:'内容c',img_url:"6.png",info:"pxx",num:"连载中 256万字"},
//         {name:'内容a1',img_url:"7.png",info:"pxx",num:"连载中 256万字"},
//         {name:'内容b',img_url:"8.png",info:"pxx",num:"连载中 256万字"},
//         {name:'内容c',img_url:"9.png",info:"pxx",num:"连载中 256万字"}]},

//     {title:'都市',content:[{name:'内容a2'},{name:'内容b'},{name:'内容c'}]},
//     {title:'历史',content:[{name:'内容a3'},{name:'内容b'},{name:'内容c'}]},
//     {title:'科幻',content:[{name:'内容a4'},{name:'内容b'},{name:'内容c'}]},
//     {title:'武侠',content:[{name:'内容a5'},{name:'内容b'},{name:'内容c'}]},
//     {title:'奇幻',content:[{name:'内容a6'},{name:'内容b'},{name:'内容c'}]},
//     {title:'穿越',content:[{name:'内容a7'},{name:'内容b'},{name:'内容c'}]},
//     {title:'悬疑',content:[{name:'内容a8'},{name:'内容b'},{name:'内容c'}]},
    
//  ]) -->