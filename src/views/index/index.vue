<!-- 书城首页 -->
<script setup>
import { ref } from 'vue';
import Header from './header.vue';
import Charts from './charts.vue';
</script>

<template>
 
        <div>
                <Header></Header>
                <Charts></Charts>
        </div>

</template>

<!-- scoped表示该样式是局域样式,不会影响其他组件 -->
<style scoped>


</style>
