<!-- 登录界面 -->
<script setup>
import { ref } from 'vue';

</script>

<template>
        <div class="login">
            <div class="login-list"> 
                <div>X</div>
                <h2>欢迎使用iNovel</h2>
                <p>登录账户,发现好书</p>
                <input type="text" placeholder="请输入账号">
                <input type="text" placeholder="请输入密码">
                <div>
                    <input type="checkbox">
                    <span>已阅读并同意《用户服务协议》及《隐私政策》</span>
                </div>
                <button>登录</button>
                <div class="login-title">
                    <span>短信验证登录</span>
                    <span>忘记密码</span>
                </div>
            </div>
            <div class="login-way"></div>
        </div>
</template>

<style scoped>


</style>
