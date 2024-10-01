<!-- 书城首页 -->
<script setup>
import { onMounted, ref } from 'vue';
import Header from './header.vue';
import Charts from './charts.vue';
import Chartstab from './chartstab.vue';
import Banner from './banner.vue';
import Recommend from './recommend.vue';
</script>

<template>
      
         <!-- 首页 -->
        <div class="container">
                <Header></Header>
                <Charts></Charts>
                <Chartstab></Chartstab>
                <Banner></Banner>
                <Recommend></Recommend>
        </div>

</template>

<!-- scoped表示该样式是局域样式,不会影响其他组件 -->
<style scoped>


</style>
