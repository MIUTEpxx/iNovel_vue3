<!-- 喜好设置 -->
<script setup>
import { ref } from 'vue';
const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
</script>

<template>
    <div class="like">
        <van-cell title="设置喜好" is-link @click="showPopup" />
        <van-popup
        v-model:show="show"
        round
        closeable
        close-icon="arrow-down"
        close-icon-position="top-left"
        position="bottom"
        :style="{ height: '60%' }">
        <div class="like-list">
            <h4>请选择您感兴趣的标签</h4>
            <p>请选择喜欢的分类:(已选择 个)</p>
            <ul>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
                <li>奇幻</li>
            </ul>
        </div>
    </van-popup>

    </div>
</template>

<style scoped>


</style>
