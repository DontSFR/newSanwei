<template>
    <div class="new-content">
        <div class="title">
            <span class="title_icon">
                <img src="~@/assets/index/bullet1.gif" alt="" title="" />
            </span>
            <span>{{this.$route.query.id}}</span>
        </div>
        <div class="new_products">
            <div class="new_prod_box" v-for="item in newbookList">
                <a href="details.html">{{item.name}}</a>
                <div class="new_prod_bg">
                    <a href="details.html"><img src="~@/assets/index/thumb1.gif" alt="" title="" class="thumb" border="0" /></a>
                </div>           
            </div>
        </div>
        <div class="page-container">
            <Page :total="page.total" :page-size="page.pageSize" :current="page.current" show-elevator />
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            page:{
                pageSize: 10,
                total: 0,
                current: 1
            },
            newbookList:[
                {name:'爱生命',content:'爱你就想爱生命',price:'34',src:'~@/assets/newbook/1.jpg'},
                {name:'Storm',content:'暴风雨中的孩子',price:'46',src:'~@/assets/newbook/3.jpg'},
                {name:'ASKME',content:'儿童百科百问百答',price:'65',src:'~@/assets/newbook/2.jpg'},
                {name:'松子',content:'被嫌弃的松子的一生',price:'32',src:'~@/assets/newbook/4.jpg'},
                {name:'坚强',content:'不慌不忙的坚强',price:'26',src:'`@/assets/newbook/5.jpg'},
                {name:'松子',content:'被嫌弃的松子的一生',price:'32',src:'~@/assets/newbook/4.jpg'},
                {name:'爱生命',content:'爱你就想爱生命',price:'34',src:'~@/assets/newbook/1.jpg'},
                {name:'Storm',content:'暴风雨中的孩子',price:'46',src:'~@/assets/newbook/3.jpg'},
                {name:'ASKME',content:'儿童百科百问百答',price:'65',src:'~@/assets/newbook/2.jpg'},
                {name:'松子',content:'被嫌弃的松子的一生',price:'32',src:'~@/assets/newbook/4.jpg'},
                {name:'坚强',content:'不慌不忙的坚强',price:'26',src:'`@/assets/newbook/5.jpg'},
                {name:'松子',content:'被嫌弃的松子的一生',price:'32',src:'~@/assets/newbook/4.jpg'},
                {name:'爱生命',content:'爱你就想爱生命',price:'34',src:'~@/assets/newbook/1.jpg'},
                {name:'Storm',content:'暴风雨中的孩子',price:'46',src:'~@/assets/newbook/3.jpg'}
            ],
            categoryName:''
        }
    },
    create(){
        this.$route.query.id
    },
    // beforeRouteUpdate(to, from, next){
    //     this.categoryName = to.params.name;
    //     console.log('????',this.$route.params.name);
    //     next();
    //     // this.id = this.$route.params.id;
    // },
    watch:{
        //监听相同路由下参数变化的时候，从而实现异步刷新
        '$route'(to,from){
            //做一些路由变化的响应
            // console.log(to,'----',from)
        },
    },
    methods:{
    }
}
</script>
<style lang="less" scoped>
@import "~@/style/basic.less";
.new-content{
    width:100%;
    height:100%;
    padding: 20px 0 20px 20px;
    .title{
        color:#734633;
        font-size:19px;
        height:30px;
        margin:10px 0 10px 0;
        .title_icon{
            float:left;
            padding:0 5px 0 0;
        }
    }
    .new_products{
        width: 100%;
        padding:10px 0;
        overflow:hidden;
        height: 100%;
        .new_prod_box{
            height: 290px;
            float:left;
            text-align:center;
            padding:0 10px;
            a{
                padding:5px 0 5px 0;
                color:#b5b5b6;
                text-decoration:none;
                display:block;
            }
            .new_prod_bg{
                width:188px;
                height:238px;
                text-align:center;
                background-image:url("~@/assets/index/new_prod_box.gif");
                background-size: 100% 100%;
                position:relative;
            }
            .new_icon{
                position:absolute;
                top:0px;
                right:0px;
                z-index:200;
            }
            .thumb{
                display: inline-block;
                width: 130px;
                height:200px;
                padding:30px 0 0 0;
            }
        }
    }
    .page-container{
        width: 100%;
        text-align: center;
    }
}
</style>


