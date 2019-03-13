<template>
    <div class="spcial-content">
        <a class="title">
            <span class="title_icon">
                <img src="~@/assets/index/bullet1.gif" alt="" title="" />
            </span>
            特色书籍/更多
        </a>
        <div class="feat_prod_box" v-for="(item,t) in newbookList">
            <div class="prod_img">
                <router-link :to="'/details'" >
                    <a >
                        <img src="~@/assets/index/prod1.gif" alt="" title="" border="0" />
                    </a>
                </router-link> 
            </div>
            <div class="prod_det_box">
                <div class="prod_title">{{item.name}}</div>
                <p class="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <router-link :to="'/details'" >
                    <a  class="more">- more details -</a> 
                </router-link>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            newbookList:[
                {name:'爱生命',content:'爱你就想爱生命',price:'34',src:'~@/assets/newbook/1.jpg'},
                {name:'Storm',content:'暴风雨中的孩子',price:'46',src:'~@/assets/newbook/3.jpg'},
                {name:'ASKME',content:'儿童百科百问百答',price:'65',src:'~@/assets/newbook/2.jpg'}
            ]
        }
    }
}
</script>
<style lang="less" scoped>
@import "~@/style/basic.less";
.spcial-content{
    width:100%;
    height: 100%;
    padding: 20px 0 0 20px;
    .title{
        display: inline-block;
        color:#734633;
        font-size:19px;
        height:30px;
        margin:10px 0 20px 0;
        .title_icon{
            float:left;
            padding:0 5px 0 0;
        }
    }
    .feat_prod_box{
        padding-left:10px ;
        height:280px;
        margin:0 20px 20px 0;
        border-bottom:1px #b2b2b2 dashed;
        .prod_title{
            color:#f8981d;
            padding:5px 0 0 15px;
            font-size:16px;
        }
        p.details{
            padding:5px 15px 5px 15px;
            font-size:14px;
        }
        .more{
            display: inline-block;
            height:20px;
            font-style:italic;
            color:#f8981d;
            float:right;
            text-decoration:none;
            font-size:11px;
            padding:0px 15px 0 0 ;
        }
    }
    .feat_prod_box_details{
        padding:10px 0 10px 0;
        margin:0 20px 10px 0;
        clear:both;
    }
    .prod_img{
        float:left;
        padding:0 5px 0 0;
        text-align:center;
        img{
            width: 200px;
            height:260px;
        }
    }
    .prod_det_box{
        width:295px;
        height: 240px;
        border:1px solid rgb(209, 205, 205);
        border-radius:10px;
        float:left;
        margin-left: 25px;
        padding:0 0 0 25px;
        position:relative;
    }
}

</style>


