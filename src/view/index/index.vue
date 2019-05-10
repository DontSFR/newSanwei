<template>
        <div class="left-content">
            <my-recommend></my-recommend>
            <my-special></my-special>
            <my-newbook></my-newbook>
        </div>
</template>
<script>
import mySpecial from '@/components/mainPage/mySpecial.vue'
import myNewbook from '@/components/mainPage/myNewbook.vue'
import myRecommend from '@/components/mainPage/myRecommend.vue'
    export default{
        components: {mySpecial,myNewbook,myRecommend}
    }
</script>
<style lang="less" scoped>
@import "~@/style/basic.less";
.left-content{
    width: 65%;
    min-height: 1251px;
    // height: 100%;
    float: left;
    background: url("~@/assets/index/center_bg_1.png") repeat-y;
    background-size:100% 100%;
}
</style>

