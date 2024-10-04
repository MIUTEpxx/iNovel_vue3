<!-- 小说阅读器 -->

<script setup>
    import { ref } from 'vue'
    import { onMounted, computed } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex'; // 引入 useStore 用于操作 Vuex
    import { getNovelById } from '@/api/novel';//根据id获得小说信息


    const route = useRoute(); // 获取当前路由信息
    const store = useStore(); // 获取 Vuex store 实例
    const novelId = computed(() => route.params.id);//当前小说id
    const novelinfo = ref({}); // 小说信息

  

  onMounted(async () => {
    try {
        // 获取所有标签
        const response = await getNovelById(novelId.value);
        novelinfo.value = response.data.data; 
    } catch (error) {
        console.error('Failed to fetch novel tags:', error);
    }

});
  const showDirectory = ref(false)
  const novelContent = ref('')
  const onClickRight = () => {
    showDirectory.value = true
  }

  function goBack(){
    // 返回上一个界面
    window.history.go(-1);
}
  </script>

<template>
    <div class="app-container">
      <van-nav-bar
        title="小说阅读器"
        left-text="返回"
        right-text="目录"
        @click-left="goBack"
        @click-right="onClickRight"
      />
      <div class="reader-content">
        <h1>第一章：{{novelinfo.title}}</h1>
        <p>{{ novelinfo.summary}}</p>
      </div>
      <van-popup v-model:show="showDirectory" position="right" :style="{ width: '70%' }">
        <!-- 目录内容 -->
        <div class="directory-content">
          <p>章节目录</p>
          <!-- 这里可以添加章节列表 -->
        </div>
      </van-popup>
    </div>
  </template>
  
  
  
  <style scoped>

  </style>
  