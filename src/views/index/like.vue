<!-- 喜好设置 -->
<script setup>
import { ref ,onMounted,inject } from 'vue';
const likelist = inject('likelist');//接收来自父组件的变量likelist
// console.log(likelist);

const show = ref(false);
const showPopup = () => {
     show.value = true;
};
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
    // console.log(n);
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
