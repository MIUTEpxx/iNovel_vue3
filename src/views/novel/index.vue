<!-- 书籍详情页 -->
<script setup>
import { ref } from 'vue';
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute(); // 获取当前路由信息
 const novelId = computed(() => route.params.id);
</script>

<template>
        <div class="novel">
            <p class="tempTest">小说详情页{{ novelId }}</p>
        </div>
</template>

<style scoped>


</style>
