<!-- 热门分类 从右侧弹出 -->
<script setup>
import { ref } from 'vue';
    //vant4从右弹出组件函数
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    const popuplist=ref(['热门','都市','奇幻','武侠','悬疑'])//分类标签数组
    const n=ref(0)//n为当前选中的分类标签

</script>

<template>
        <div class="popup">
            <van-cell title="热门分类" is-link @click="showPopup" />
            <!-- 右侧弹出 -->
            <van-popup
                v-model:show="show"
                closeable
                close-icon-position="top-left"
                position="right"
                :style="{ width: '70%', height: '100%' }">
                <div class="popuplist">
                    <h4>热门分类</h4>
                    <ul>
                        <!-- :class="n==i? 'active':'' "  若当前标签被选中则添加active属性,否则不添加 -->
                        <li v-for="(v,i) in popuplist" :key="i" :class="n==i? 'active':'' " @click="n=i">{{ v }}</li>
                    </ul>
                </div>

            </van-popup>
        </div>
</template>

<style scoped>


</style>
