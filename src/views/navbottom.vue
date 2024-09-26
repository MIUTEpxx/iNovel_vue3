<script setup>
import { ref } from 'vue';

let footerlist=ref([
    {title:'书城',icon:'icon-ziliaoku'},
    {title:'社区',icon:'icon-shequ-active'},
    {title:'福利',icon:'icon-hongbao'},
    {title:'我的',icon:'icon-wodedamaijihuo'},

])

</script>




<template>

        <div class="footer">
            <div class="footer-seat">
                <div class="footer-list">
                    <ul>
                        <li>
                            <!-- 引入图标 -->
                            <i class="iconfont icon-ziliaoku"></i>
                           <p>书城</p> 
                        </li>
                        <li>
                            <i class="iconfont icon-shequ-active"></i>
                           <p>社区</p> 
                        </li>
                        <li>
                            <i class="iconfont icon-hongbao"></i>
                           <p>福利</p> 
                        </li>
                        <li>
                            <i class="iconfont icon-wodedamaijihuo"></i>
                           <p>我的</p> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<!-- scoped表示该样式是局域样式,不会影响其他组件 -->
<style scoped>


</style>
