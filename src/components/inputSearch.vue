<template>
  <div class="input-search">
    <p class="searchBody">
      <Input v-model="lampPoleName"  class="searchInput" @keyup.enter.native="searchLampPole"/>
      <a>
        <img src="~@/assets/index/search.png" alt="" @click="searchLampPole" >
      </a>
    </p>
  </div>
</template>

<script>
export default {
  // name: 'inputSearch',
  data () {
    return {
      lampPoleName: '',
    }
  },
  watch: {
    drawerStart (t) {
      this.$emit('drawerShow', t)
    }
  },
  methods: {
    searchLampPole () {
      this.$emit('on-search', this.lampPoleName)
    }
  }
}
</script>

<style lang="less" scoped>
.input-search {
    height: 50px;
    padding: 18px 0;
    width: 100%;
  .searchBody {
    width: 80%;
    margin: 0 auto;
    line-height: 32px;
    .searchInput {
      width:  calc(~"100% - 46px");
      display: inline-block;
      /deep/.input-search{
        width:100%;
      }
      /deep/.ivu-input{
        //     border: 1px solid #fff;
        // background-color: rgba(255,255,255,0) !important;
      }
    }
    img{
      width: 25px;
      vertical-align: middle;
      display: inline-block;
    }
  }
}
</style>
