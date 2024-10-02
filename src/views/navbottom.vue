<script setup>
import { ref } from 'vue';

let footerlist=ref([
    {title:'书城',icon:'icon-ziliaoku',path:'/index'},
    {title:'社区',icon:'icon-shequ-active',path:'/community'},
    {title:'福利',icon:'icon-fuli',path:'/welfare'},
    {title:'我的',icon:'icon-wodedamaijihuo',path:'/my'},

])

</script>




<template>

        <div class="footer">
            <div class="footer-seat">
                <div class="footer-list">
                    <ul>
                        <li v-for="(v,i) in footerlist" :key="i">
                            <!-- 与<a>类似,允许声明式地导航到不同的路由/页面 -->
                            <router-link :to="v.path" class="v">
                                <i class="iconfont" :class="v.icon"></i>
                                <p>{{ v.title }}</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<!-- scoped表示该样式是局域样式,不会影响其他组件 -->
<style scoped>


</style>
