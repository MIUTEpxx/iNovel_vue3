<template>
    <div class="header-hd">
      <!-- 搜索栏 -->
      <div class="header-search">
        <div class="search-list">
          <i class="iconfont icon-sousuo" @click="handleSearch"></i>
          <input type="text" 
          placeholder="请输入书名,作者"
          v-model="searchKeyword"
          @keyup.enter="handleSearch"
          >
        </div>
      </div>
      <!-- 用户头像 -->
      <router-link to="/my" class="header-user">
        <div class="user-img">
          <img src="@/assets/images/h.jpg" alt="">
        </div>
      </router-link>
    </div>
  </template>

  <script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchKeyword = ref('');

const handleSearch = () => {
  const keyword = searchKeyword.value.trim();
  //若关键字不为空，则跳转到搜索结果页面
  if (keyword) {
    // 跳转到搜索结果页面，并将关键字作为参数传递
    router.push({
      name: 'search',
      params: { keyword }
    });
  }
};
  </script>

  <style scoped>
.header-hd{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: var(--bgcolor);
}   
.header-search{
    background-color: var(--bgcolor);
    padding: 10px;
    margin-top: 10px;
}
.search-list{
    width: 280px;
    background-color: rgba(255, 251, 251, 0.5);
    border-radius: 10px;
    padding:5px;
}
.header-search input{
   border: 0;
   background-color: transparent;
   margin-left: 10px;
}

.header-user .user-img{
    width: 40px;
    height: 40px;
    margin: 12px 15px 0 0;
;
}
.header-user .user-img img{
    border-radius: 50%;
}
  </style>