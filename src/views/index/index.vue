<!-- 书城首页 -->
<script setup>
import { ref } from 'vue';
import Header from './header.vue';
import Charts from './charts.vue';
import Chartstab from './chartstab.vue';
</script>

<template>
 
        <div class="container">
                <Header></Header>
                <Charts></Charts>
                <Chartstab></Chartstab>
        </div>

</template>

<!-- scoped表示该样式是局域样式,不会影响其他组件 -->
<style scoped>


</style>
