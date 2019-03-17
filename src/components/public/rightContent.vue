<template>
    <div class="right-content">
        <input-search></input-search>
        <div class="splid"></div>
        <div class="splid"></div>
        <hot-tag></hot-tag>
        <hot-books></hot-books>
    </div>
</template>
<script>
import hotTag from '@/components/hotTag.vue'
import hotBooks from '@/components/hotBooks.vue'
import inputSearch from '@/components/inputSearch.vue'
export default{
    components: {hotTag,hotBooks,inputSearch},
    data () {
        return {
        }
    }
}
</script>
<style lang="less" scoped>
@import "~@/style/basic.less";
.right-content{
    width:35%;
    // height: 1746px;
    float: left;
    background: url("~@/assets/index/center_bg_2.png") repeat-y;
    background-size:100% 100%;
    .splid{
        width: 100%;
        height: 50px;
        background: url("~@/assets/index/border.gif") no-repeat bottom center;
    }
}
</style>


