<!-- 书籍详情页 -->
<script setup>
import { ref } from 'vue';
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'; // 引入 useStore 用于操作 Vuex
import { getNovelById } from '@/api/novel';//根据id获得小说信息

const route = useRoute(); // 获取当前路由信息
const store = useStore(); // 获取 Vuex store 实例
const novelId = computed(() => route.params.id);//当前小说id
const novelinfo = ref({}); // 小说信息
onMounted(async () => {
    try {
        // 获取所有标签
        const response = await getNovelById(novelId.value);
        novelinfo.value = response.data.data; 
        // console.log(novelinfo.value.title);
    } catch (error) {
        console.error('Failed to fetch novel tags:', error);
    }

});
function goBack(){
    // 在返回之前重新显示底部导航栏
    store.commit('setTabBarShow', true);
    // 返回上一个界面
    window.history.go(-1);
}
</script>

<template>
        <div class="novel">
            <van-sticky>
                <div class="backbtn" >
                    <van-icon @click="goBack" name="arrow-left" />
                </div>
            </van-sticky>

            <div class="novel-hd">
                <div class="novel-hd-img">
                    <img :src="`${novelinfo.img_url}`" alt="" />
                </div>
                <div class="novel-hd-info">
                    <h3>{{ novelinfo.title }}</h3>
                    <p>{{ novelinfo.author }} 著</p>
                    <p><span>{{ novelinfo.num }}字</span> | <span>连载中</span></p>
                    <p>上次更新: {{ novelinfo.publishDate }}</p>
                </div>
            </div>
            <div class="novel-info">
                <div class="novel-info-likes">
                    <div class="tickets">
                        <van-icon name="coupon-o" />
                        <p class="num">{{ novelinfo.goldticket }}</p>
                        <p class="name">金票</p>
                    </div>
                    <div class="likes">
                        <van-icon name="good-job-o" />
                        <p class="num">{{ novelinfo.Likes }}</p>
                        <p class="name">点赞</p>
                    </div>
                    <div class="favorites">
                        <van-icon name="star-o" />
                        <p class="num">{{ novelinfo.views }}</p>
                        <p class="name">收藏</p>
                    </div>
                </div>
                <div class="novel-summary">
                    <h3>作品概要</h3>
                    <p>
                        {{ novelinfo.summary }}
                    </p>
                </div>
            </div>
            <div class="novel-tags">
                <h3>作品标签</h3>
                <ul>
                    <li v-for="(v,i) in novelinfo.tags" :key="i">
                        {{ v.name }}
                    </li>
                </ul>
            </div>
            <div class="novel-bottom">
                <router-link :to="{
                                name: 'reader',
                                params: { id: novelId },
                            }">
                     <button>立即阅读</button>
                </router-link>
            </div>
            <div class="novel-Comment">
                <h3>评论区</h3>
            </div>
        </div>
</template>

<style scoped>


</style>
