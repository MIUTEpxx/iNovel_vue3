<!-- 为你推荐 -->
<script setup>
import { ref } from 'vue';
let recommendlist=ref([
    {title:'荡魔途',img_url:'1.png',autor:'4396y',desc:'杨凡无意间穿越到异世荒天大陆，这是一片属于修行者的世界，一切实力为尊，两世为人以身契魔，誓荡尽天下魔——多年后忆往昔峥嵘岁月，三十年太久只争朝夕。'},
    {title:'天幕 暗黑丛林',img_url:'2.png',autor:'楼笑羽',desc:'这个世界中，忽然降临了一个名为天幕的小世界！ 在这个天幕世界中，有这各种的机遇和危险！ 而主角千叶在天幕世界中，理解了人性的丑恶，化为魔神！ 开始，屠杀！'},
    {title:'镜之森',img_url:'7.png',autor:'（日）大崎梢',desc:'第一次担当班主任的片野厚介，从班上两个调皮的男生那里看到一张神秘的照片，照片中豪华的神社宫殿与狼的雕像让人心生向往。厚介从二人口中得知，他们是在山林间探险时无意中发现这座宫殿的，可周围的人却对此讳莫如深，仿佛那是不祥的事物。踏上山间探险之路的厚介他们，遇到了一群浑身包着白绷带的怪人，这帮人似乎也对神秘的宫殿感兴趣。此后，邻校的美少女、怪异的宗教团体、当地的神职人员等接连卷入这场争夺战。危机一触即发，守护秘密宫殿的人究竟是谁?'},
])
</script>

<template>
        <div class="recommend">
            <div class="recommend-like">
                <h3>为你推荐</h3>
                <p>设置喜好 ></p>
            </div>
            <div class="recommend-list">
                <ul>
                    <li v-for="(v,i) in recommendlist" :key="i">
                        <div class="recommend-img">
                            <img :src="`/src/assets/images/${v.img_url}`" alt="">
                        </div>
                        <div class="recommend-title">
                            <h4>{{ v.title }}</h4>
                            <p class="recommend-title-author">{{ v.autor }} 著</p>
                            <p class="recommend-title-desc">{{ v.desc }}</p>
                        </div>
                            
                    </li>
                </ul>
            </div>
        </div>
</template>

<style scoped>


</style>

