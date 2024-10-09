<!-- 为你推荐 -->
<script setup>
import Like from './like.vue';
import NovelItem from '@/components/novelInfo/NovelItem.vue';
import { ref,onMounted,provide,watch  } from 'vue';
import { getNovelTags,getNovelsByTag} from '@/api/novel'; // 获取标签API

let recommendlist=ref([])//筛选后的小说                                                            
const likelist = ref([]);
provide('likelist', likelist); // 使用 provide 向子组件like.vue来提供 likelist

onMounted(async () => {
    try {
        // 获取所有标签
        const response = await getNovelTags();
        likelist.value = response.data.data; 
        // console.log(likelist.value);
    } catch (error) {
        console.error('Failed to fetch novel tags:', error);
    }
});

watch(likelist, async (newVal, oldVal) => {
    // 当 likelist 发生变化时，这里的代码会被执行

    // 监听小说喜好标签
    recommendlist.value = [];
    newVal.forEach(async(v, i) => {
        if(v.flag){
            const response = await getNovelsByTag(v.id);
            response.data.data.forEach(item => {
                if (!recommendlist.value.some(recommendItem => recommendItem.id === item.id)) {
                    recommendlist.value.push(item);
                }
            });
        }
    });
}, {
    deep: true // 如果 likelist 是一个对象或数组，你可能需要设置 deep: true 来深度监听其内部变化
});
</script>

<template>
        <div class="recommend">
            <div class="recommend-like">
                <h3>为你推荐</h3>
                <Like></Like>
            </div>
            <div class="recommend-list">
                <ul>
                    <li v-for="(novel, index) in recommendlist" :key="index">
                        <NovelItem
                            :novelId="novel.id"
                            :novelImgUrl="novel.img_url"
                            :novelTitle="novel.title"
                            :novelAuthor="novel.author"
                            :novelTags="novel.tags"
                            :novelSummary="novel.summary"
                        />
                    </li>
                </ul>
            </div>
        </div>
</template>

<style scoped>


</style>

