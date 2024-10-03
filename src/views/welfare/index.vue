<script setup>
import { Steps } from 'vant';
import { ref } from 'vue';
const steps =ref([
        {time:'10分钟',num:'10'},
        {time:'30分钟',num:'30'},
        {time:'60分钟',num:'80'},
        {time:'90分钟',num:'100'},
        {time:'120分钟',num:'150'},
])
</script>

<template>

        <div class="welfare">
                <div class="welfare-hd">
                        <h3>登录账号, 天天领福利</h3>
                        <router-link to="login">
                                <button>登录</button>
                        </router-link>
                </div>
                
                <div class="welfare-body">
                        <div class="welfare-body-item1">
                                <h2>做任务 赚金币</h2>
                                <p class="welfare-text1">观看视频领取金币</p>
                                <p class="welfare-text2">每次200金币,可重复</p>
                                <button class="btn">去观看</button>
                        </div>
                        <div class="welfare-body-item2">
                                <p class="welfare-text1">每日阅读奖励</p>
                                <p class="welfare-text2">持续阅读 挣取金币</p>
                                <button class="btn2">去看书</button>
                                <van-steps :active="active" active-color="#ff7300">
                                        <van-step v-for="(v,i) in steps" :key="i">
                                                <div class="welfare-icon">
                                                        <img src="@\assets\images\gold.png" alt="">
                                                        <span>{{v.num}}</span>
                                                </div>
                                                <p>{{v.time}}</p>
                                        </van-step>
                                        
                                </van-steps>
                                                        </div>
                        <div class="welfare-body-item3">
                                <div class="welfare-item3-list">
                                        <p class="welfare-text1">每日阅读任务</p>
                                        <img src="@\assets\images\gold.png" alt="">
                                        <span>100</span>
                                        <button class="btn2">去看书</button>
                                </div>
                                
                        </div>
                </div>

        </div>
</template>

<!-- scoped表示该样式是局域样式,不会影响其他组件 -->
<style scoped>


</style>
