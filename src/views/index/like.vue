<!-- 喜好设置 -->
<script setup>
import { ref } from 'vue';
const show = ref(false);
const showPopup = () => {
     show.value = true;
};
const likelist =ref([
    {name:'都市',id:1,flag:false},
    {name:'科幻',id:2,flag:false},
    {name:'奇幻',id:3,flag:false},
    {name:'武侠',id:4,flag:false},
    {name:'修仙',id:5,flag:false},
    {name:'穿越',id:6,flag:false},
    {name:'同人',id:7,flag:false},
    {name:'宫斗',id:8,flag:false},
    {name:'末世',id:9,flag:false},
    {name:'魔幻',id:10,flag:false},
    {name:'玄幻',id:11,flag:false},
    {name:'后宫',id:12,flag:false},
    {name:'纯爱',id:13,flag:false},
    {name:'沙雕',id:14,flag:false},
    {name:'日常',id:15,flag:false},
    {name:'悬疑',id:16,flag:false},
    {name:'恐怖',id:17,flag:false},
    {name:'游戏',id:18,flag:false},
    {name:'爽文',id:19,flag:false},
    {name:'历史',id:19,flag:false},
])
//已选中的标签数
let n=ref(0);
function changeFlag(v){
    v.flag=!v.flag;
    if(v.flag){
        // 这里的n是响应式引用,需要用n.value来获取和改变其值 不能直接用n++
        n.value++;
    }else{
        n.value--;
    }
    console.log(n);
}
</script>

<template>
    <div class="like">
        <van-cell title="设置喜好" is-link @click="showPopup" />
        <van-popup
        v-model:show="show"
        round
        closeable
        close-icon="arrow-down"
        close-icon-position="top-left"
        position="bottom"
        :style="{ height: '60%' }">
        <div class="like-list">
            <h4>请选择您感兴趣的标签</h4>
            <p>请选择喜欢的分类:(已选择 {{n}} 个)</p>
            <ul>
                <li v-for="(v,i) in likelist" :key="i" @click="changeFlag(v)" :class="v.flag?'addclass':''">{{v.name}}</li>
            </ul>
        </div>
    </van-popup>

    </div>
</template>

<style scoped>


</style>
