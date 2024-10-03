<!-- 登录界面 -->
<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex'; // 引入 useStore 用于操作 Vuex

const router=useRouter();
const store = useStore(); // 获取 Vuex store 实例

function goBack(){
    // 在返回之前重新显示底部导航栏
    store.commit('setTabBarShow', true);
    // 返回上一个界面
    window.history.go(-1);
}

</script>

<template>
        <div class="login">
            <div class="login-list"> 
                <div @click="goBack"><van-icon name="arrow-left" /></div>
                <h2>欢迎使用 <span>iNovel</span> !!!</h2>
                <p>登录账户,发现好书</p>
                <input type="text" placeholder="请输入账号">
                <input type="text" placeholder="请输入密码">
                <div class="agrement">
                    <input type="checkbox">
                    <span>已阅读并同意 <a href="https://blog.csdn.net/weixin_55553121/article/details/120492101">《用户服务协议》及《隐私政策》</a></span>
                </div>
                <button>登录</button>
                <div class="login-title">
                    <span>短信验证登录</span>
                    <span>忘记密码</span>
                </div>
            </div>
            <div class="login-way">
                <p>其他登录方式</p>
                <ul>
                    <li>
                        <i class="iconfont icon-weixin"></i>
                        <p>微信</p>
                    </li>
                    <li>
                        <i class="iconfont icon-QQ"></i>
                        <p>QQ</p>
                    </li>
                </ul>
            </div>

        </div>
</template>

<style scoped>


</style>
