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
        console.log(novelinfo.value.title);
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
                <div class="backbtn" @click="goBack">
                    <van-icon name="arrow-left" />
                </div>
            </van-sticky>

            <div class="novel-hd">
                <div class="novel-hd-img">
                    <img src="@/assets/images/1.png" alt="" />
                </div>
                <div class="novel-hd-info">
                    <h3>荡魔途</h3>
                    <p>堕落太监 著</p>
                    <p><span>201.8万字</span> | <span>连载中</span></p>
                    <p>上次更新: 2022-12-31</p>
                </div>
            </div>
            <div class="novel-info">
                <div class="novel-info-likes">
                    <div class="tickets">
                        <van-icon name="coupon-o" />
                        <p class="num">123</p>
                        <p class="name">金票</p>
                    </div>
                    <div class="likes">
                        <van-icon name="good-job-o" />
                        <p class="num">123</p>
                        <p class="name">点赞</p>
                    </div>
                    <div class="favorites">
                        <van-icon name="star-o" />
                        <p class="num">123</p>
                        <p class="name">收藏</p>
                    </div>
                </div>
                <div class="novel-summary">
                    <h3>作品概要</h3>
                    <p>
                        第一次担当班主任的片野厚介，从班上两个调皮的男生那里看到一张神秘的照片，照片中豪华的神社宫殿与狼的雕像让人心生向往。厚介从二人口中得知，他们是在山林间探险时无意中发现这座宫殿的，可周围的人却对此讳莫如深，仿佛那是不祥的事物。踏上山间探险之路的厚介他们，遇到了一群浑身包着白绷带的怪人，这帮人似乎也对神秘的宫殿感兴趣。此后，邻校的美少女、怪异的宗教团体、当地的神职人员等接连卷入这场争夺战。危机一触即发，守护秘密宫殿的人究竟是谁?
                    </p>
                </div>
            </div>
            <div class="novel-tabs">
                <h3>作品标签</h3>
                <ul>
                    <li>奇幻</li>
                </ul>
            </div>
            <div class="novel-bottom">
                <button>立即阅读</button>
            </div>
        </div>
</template>

<style scoped>


</style>
