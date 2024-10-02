<script setup>
import { ref } from 'vue';
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
                                <p class="welfare-text1">每日阅读任务</p>
                                <p class="welfare-text2">持续阅读 挣取金币</p>
                                <button class="btn2">去看书</button>
                                <van-steps :active="active">
                                        <van-step>十分钟</van-step>
                                        <van-step>半小时</van-step>
                                        <van-step>一小时</van-step>
                                        <van-step>两小时</van-step>
                                </van-steps>
                                                        </div>
                        <div class="welfare-body-item3">3</div>
                </div>

        </div>
</template>

<!-- scoped表示该样式是局域样式,不会影响其他组件 -->
<style scoped>


</style>
