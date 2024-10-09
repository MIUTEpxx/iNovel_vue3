<template>
    <div class="header-hd">
      <!-- 搜索栏 -->
      <div class="header-search">
        <div class="search-list">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="请输入书名,作者">
        </div>
      </div>
      <!-- 用户头像 -->
      <router-link to="my" class="header-user">
        <div class="user-img">
          <img src="@/assets/images/h.jpg" alt="">
        </div>
      </router-link>
    </div>
  </template>