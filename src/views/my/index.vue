<script setup>
import { ref } from 'vue';
</script>

<template>
  <div class="my">
      <div class="my-hd">
          <div class="my-hd-login">
              <div class="my-hd-img">
                  <img src="@/assets/images/h.jpg" alt="头像">
              </div>
              <div class="my-hd-item">
                  <div class="username">游客</div>
                  <button>点击登录</button>
              </div>
          </div>
      </div>
      <div class="my-body">
          <div class="my-body-item1">
              <ul>
                <li>
                  <i class="iconfont icon-jinbi"></i>
                  <p>我的金币</p>
                </li>
                <li>
                  <i class="iconfont icon-shuji"></i>
                  <p>我的书架</p>
                </li>
                <li>
                  <i class="iconfont icon-lishi"></i>
                  <p>浏览记录</p>
                </li>
              </ul>
          </div>
          <div class="my-body-item2">2</div>
          <div class="my-body-item3">3 </div>
          <div class="my-body-item4">4 </div>

      </div>
  </div>
</template>

<!-- scoped表示该样式是局域样式,不会影响其他组件 -->
<style scoped>


</style>
