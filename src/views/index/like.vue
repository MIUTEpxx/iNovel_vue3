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
        1111
    </van-popup>

    </div>
</template>

<style scoped>


</style>
