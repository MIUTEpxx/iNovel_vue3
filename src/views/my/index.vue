<script setup>
import { ref } from 'vue';

let myitem2=ref([
  {title:'历史记录',icon:'icon-lishi'},
  {title:'我的书架',icon:'icon-tushu'},
  {title:'书友圈',icon:'icon-quanquanmendianb'},
  {title:'消息通知',icon:'icon-xiaoxitongzhi'},
])
let myitem3=ref([
  {title:'我的评论',icon:'icon-pinglun'},
  {title:'阅读喜好',icon:'icon-aixin'},
  {title:'帮助反馈',icon:'icon-bangzhu'},
  {title:'邀请好友',icon:'icon-wodehaoyou'},
  {title:'金币提现',icon:'icon-huobi-jinbi'},
  {title:'发布作品',icon:'icon-bianji-gangbi'},
  {title:'青少年模式',icon:'icon-hudongshequ'},
  {title:'设置',icon:'icon-shezhi'},
])
let myitem4=ref(['奖品中心','已购书籍','举报中心','爱心捐赠'])
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
                  <i class="iconfont icon-dianyingpiao"></i>
                  <p>我的金票</p>
                </li>
                <li>
                  <i class="iconfont icon-fuliquan"></i>
                  <p>我的代币</p>
                </li>
              </ul>
          </div>
          <div class="my-body-item2">
              <ul>
                <li v-for="(v,i) in myitem2" :key="i">
                  <i :class="`iconfont ${v.icon}`"></i>
                  <p>{{ v.title }}</p>
                </li>
              </ul>
          </div>
          <div class="my-body-item3">
            <ul>
                <li v-for="(v,i) in myitem3" :key="i">
                  <i :class="`iconfont ${v.icon}`"></i>
                  <p>{{ v.title }}</p>
                </li>
              </ul>
          </div>
          <div class="my-body-item4">
              <ul>
                  <li v-for="(v,i) in myitem4" :key="i">
                    <p>{{ v }}</p>
                    <i class="iconfont icon-you"></i>
                  </li>
              </ul>
          </div>

      </div>
  </div>
</template>

<!-- scoped表示该样式是局域样式,不会影响其他组件 -->
<style scoped>


</style>
