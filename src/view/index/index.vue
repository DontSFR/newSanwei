<template>
    <div class="main-content">
        <div class="left-content">
            <my-special></my-special>
            <my-newbook></my-newbook>
        </div>
    </div>
</template>
<script>
import mySpecial from '@/components/mySpecial.vue'
import myNewbook from '@/components/myNewbook.vue'
    export default{
        components: {mySpecial,myNewbook}
    }
</script>
<style lang="less" scoped>
@import "~@/style/basic.less";
.main-content{
    width: 100%;
    
}
.left-content{
    width: 65%;
    height: 100%;
    float: left;
    background: url("~@/assets/index/center_bg_1.png") repeat-y;
    background-size:100% 100%;
}
</style>

