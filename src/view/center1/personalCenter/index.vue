<template>
<!-- <div class="main-content"> -->
    <div class="left-content">
        <top-nav></top-nav>
        <!-- <router-view></router-view> -->
    </div>
<!-- </div> -->
</template>
<script>
import topNav from '@/components/center/topNav.vue';
export default {
    components:{topNav}
}
</script>
<style lang="less" scoped>
@import "~@/style/basic.less";
// .main-content{
//     width: 100%;
// }
.left-content{
    width: 65%;
    height: 100%;
    float: left;
    background: url("~@/assets/index/center_bg_1.png") repeat-y;
    background-size:100% 100%;
}
</style>

