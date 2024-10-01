<!-- 社区 -->
<script setup>
import { ref } from 'vue';
let community=ref([
        {name:'丁真纯一郎',                   
        title:'1,5!对镜子倾诉心事,这现实有些讽刺,讽刺的是没有考试就有编制,于是我拆封电子,把故事装进盒子,盒子里是用纯真换的物质,我的心炽热 肺却冰冷着,其实我想抽但不敢对你说,歌词的字我 认不得几个,可为何总是让我当个 raper',
        from:'好书推荐圈',
        hd_img:'userImg1.jpg',
        img_url:['community1.jpg','community2.jpg'],
        },
        {name:'坤坤',                   
        title:'很喜欢《顾此失彼》中的一段:"我希望,你把篮球和鸡联系起来想一想",这段给了我很大的创作思路',
        from:'小说鉴赏圈',
        hd_img:'userImg2.jpg',
        img_url:[],
        },
        {name:'野兽先辈(田所浩二)',                   
        title:'更新完《真夏の夜の银梦》后,和朋友去看了球赛,喝了迎宾酒',
        from:'催更圈',
        hd_img:'userImg3.jpg',
        img_url:['community3.jpg'],
        },
])
</script>

<template>

        <div class="community">
                <div class="community-hd">
                        <div class="community-hd-item">
                                <h3>推荐</h3>
                        </div>
                </div>
                <div class="community-body">
                        <div class="community-body-item" v-for="(v,i) in community" :key="i">
                                <div class="community-item-hd">
                                        <img :src="`/src/assets/images/${v.hd_img}`" alt="头像">
                                        <span>{{ v.name }}</span>
                                        <p>{{v.from}}</p>
                                        <div class="community-share">
                                                <i class="iconfont icon-gengduo"></i>
                                        </div>
                                </div>
                                <div class="community-item-title">
                                        {{ v.title }}
                                </div>
                                <div class="community-item-img">
                                        <img  v-for="(v1,i1) in v.img_url" :key="i1" :src="`/src/assets/images/${v1}`" alt="">
                                </div>
                                <div class="community-item-review">
                                        <span><i class="iconfont icon-fenxiangzhuanfa"></i>114</span>
                                        <span><i class="iconfont icon-comment"></i>541</span>
                                        <span><i class="iconfont icon-aixin"></i>666</span>
                                </div>
                        </div>
                        
                </div>
        </div>
</template>

<!-- scoped表示该样式是局域样式,不会影响其他组件 -->
<style scoped>


</style>
