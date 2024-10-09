<!-- 小说信息简略项 -->
<template>
    <router-link :to="{ name: 'novel', params: { id: novelId } }">
      <div class="novelItem-img">
        <img :src="novelImgUrl" alt="">
      </div>
      <div class="novelItem-info">
        <h4>{{ novelTitle }}</h4>
        <p class="novelItem-info-author">{{ novelAuthor }} 著</p>
        <div class="novelItem-info-tags">
          <ul>
            <li v-for="(tag, index) in novelTags" :key="index">
              {{ tag.name }}
            </li>
          </ul>
        </div>
        <p class="novelItem-info-summary">{{ novelSummary }}</p>
      </div>
    </router-link>
  </template>

<script setup>
defineProps({
  novelId: {
    type: [String, Number],
    required: true
  },
  novelImgUrl: {
    type: String,
    required: true
  },
  novelTitle: {
    type: String,
    required: true
  },
  novelAuthor: {
    type: String,
    required: true
  },
  novelTags: {
    type: Array,
    default: () => []
  },
  novelSummary: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
a{
    display: flex;
    justify-content: space-between;
    height: 150px;
    margin-bottom: 20px;
}

.novelItem-img{
    width: 28%;
}
.novelItem-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.novelItem-info{
    width: 68%;
    height: 100%;
}
.novelItem-info h4{
    font-size: 20px;
    /* 文本不换行,超出部分隐藏,并用省略号表示超出 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 30px;
}
.novelItem-info p{
    color: #808080;
    font-size: 15px;
}
.novelItem-info-author{
    height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.novelItem-info-tags{
    /* height: 20px; */
}
.novelItem-info-tags ul{
    height: 25px;
    display: flex;
    justify-content: flex-start;
    white-space: nowrap;
    /* overflow: hidden; */
    overflow-x: auto;
    overflow-y: hidden;
}
.novelItem-info-tags ul::-webkit-scrollbar{
    display: none;
}
.novelItem-info-tags ul li{
    height: 100%;
    margin-right: 5px;
    padding: 5px;
    font-weight: 700;
    color: var(--selectcolor);
    background: var(--bgcolorLight);
    border-radius: 8px;
}

.novelItem-info-summary{
    /* 将元素设置为块级弹性盒子模型 */
    display: -webkit-box;
    overflow: hidden;
    /* 用于指定在长单词或URL内部进行换行的情况。
    如果单词太长以至于无法适应容器的宽度，
    而其他设置（如 word-break）又不允许在单词内部断行，那么 overflow-wrap: break-word; 会允许在单词内部进行换行。 */
    overflow-wrap: break-word;
    /* 限制块容器显示的文本行数  只显示4行*/
    -webkit-line-clamp: 4;
    /* 设置弹性子元素的方向 子元素将垂直排列*/
    -webkit-box-orient: vertical;
}
</style>