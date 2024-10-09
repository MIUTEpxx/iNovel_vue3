<!-- 搜索结果界面 -->
<script setup>
import HeaderHd from '@/components/header/HeaderHd.vue';
import NovelItem from '@/components/novelInfo/NovelItem.vue';
import { ref,onMounted ,watch } from 'vue';
import { useRoute } from 'vue-router';
import { getNovelsInfo} from '@/api/novel'; // 获取小说信息的API


const route = useRoute();
const keyword = ref(route.params.keyword || '');//获取搜索关键词
const filteredNovels = ref([]);//筛选后的小说信息                                                            
let novels=ref([]);//所有小说信息
onMounted(async () => {
    try {
        const response=await getNovelsInfo(); // 获取全部小说的信息
        novels.value=response.data.data;
        filterNovels();
    } catch (error) {
        console.error('Failed to fetch novel tags:', error);
    }

});
//监听搜索关键词
watch(() => route.params.keyword, (newKeyword) => {
  keyword.value = newKeyword;
  filterNovels();
});

const filterNovels = () => {
  if(keyword.value=='ALL'||keyword.value=='all'){
    filteredNovels.value = novels.value;
  }
  else if (keyword.value) {
    filteredNovels.value = novels.value.filter(novel => 
      novel.title.includes(keyword.value) || novel.author.includes(keyword.value) || novel.summary.includes(keyword.value)
    );
  } else {
    filteredNovels.value = []; // 如果没有关键字，则不显示任何结果
  }
};

const activeSort = ref('default'); // 默认排序方式
const handleSortChange = (name) => {
  // 根据选中的排序方式，重新获取或排序搜索结果
  // 例如，你可以根据 name 的值来调用不同的 API 或对本地数据进行排序
  console.log(`Sorting by: ${name}`);
  // 以下是伪代码，需要根据你的实际情况来编写
  // fetchSortedResults(name);
};
</script>

<template>
    <div class="search">
        <HeaderHd></HeaderHd>
        <div class="sort-tabs">
            <van-tabs v-model:active="activeSort" @change="handleSortChange">
            <van-tab title="默认" name="default"></van-tab>
            <van-tab title="最新发布" name="latest"></van-tab>
            <van-tab title="最多赞" name="mostLiked"></van-tab>
            <van-tab title="最多观看" name="mostViewed"></van-tab>
            </van-tabs>
        </div>
        <div class="search-list">
                <ul>
                    <li v-for="(novel, index) in filteredNovels" :key="index">
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
