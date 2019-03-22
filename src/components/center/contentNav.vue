<template>
    <div class="selfinfo">
        <Menu mode="horizontal"  active-name="1">
            <MenuItem name="1" @click.native="selectMenu(1)">
                <Icon type="ios-heart"/>
                <!-- <Icon type="ios-paper" /> -->
                个人收藏
            </MenuItem>
            <MenuItem name="2" @click.native="selectMenu(2)">
                <!-- <Icon type="ios-people" /> -->
                <Icon type="ios-create" />
                个人评论
            </MenuItem>
        </Menu>
        <div class="content">
            <!-- 简介区域-->
            <div class="demo" v-if="menuTab">
                <div class="new_products">
                    <div class="new_prod_box" v-for="item in newbookList">
                        <router-link 
                            :to="{name:'details',query:{bookId:item.bookId}}"
                        >
                            <a>{{item.name}}</a>
                            <div class="new_prod_bg">
                                <!-- <Icon class="new_icon" color='#f34f4f' size="24" type="ios-heart"/> -->
                                <span class="new_icon"><img src="~@/assets/index/collect.jpg" alt="" title="" /></span>
                                <img  class="thumb" :src="`https://images.weserv.nl/?url=${item.img}`"/>
                                <a>{{item.writer}}</a>
                            </div>
                        </router-link>
                    </div>          
                </div>
            </div> 
            <!-- 评论区域-->
            <div class="demo" v-else>
                <div class="comment-container">
                    <div class="user-message">
                        <p class="user-name">我***家</p>
                        <p class="user-grade">评分：9.4</p>
                        <p class="user-date">2018-12-22</p>
                    </div>
                    <div class="comment-message">
                        <p class="user-comment">我一直有一种错觉，好像直木奖的作者都很会讲故事，因此就应该很年轻。然而这本短篇集，越读到后面，就越感受到字里行间的某种疲惫之意，读完上维基百科一看，果然年过半百了啊，而且2006年就获得了直木奖提名，然后一路长跑至今。其中有一个故事里带到了一名一事无成的小说家、死于车祸的失败父亲，有了一种：是不是每一个挣扎着努力的人，都会或多或少生出一种“能就这么挂了真好啊”的情绪呢.....我死后哪管什么的，呵</p>
                    </div>
                    <Divider/>
                </div>
                <div class="comment-container">
                    <div class="user-message">
                        <p class="user-name">我***家</p>
                        <p class="user-grade">评分：9.4</p>
                        <p class="user-date">2018-12-22</p>
                    </div>
                    <div class="comment-message">
                        <p class="user-comment">我一直有一种错觉，好像直木奖的作者都很会讲故事，因此就应该很年轻。然而这本短篇集，越读到后面，就越感受到字里行间的某种疲惫之意，读完上维基百科一看，果然年过半百了啊，而且2006年就获得了直木奖提名，然后一路长跑至今。其中有一个故事里带到了一名一事无成的小说家、死于车祸的失败父亲，有了一种：是不是每一个挣扎着努力的人，都会或多或少生出一种“能就这么挂了真好啊”的情绪呢.....我死后哪管什么的，呵</p>
                    </div>
                    <Divider/>
                </div>
                <div class="comment-container">
                    <div class="user-message">
                        <p class="user-name">我***家</p>
                        <p class="user-grade">评分：9.4</p>
                        <p class="user-date">2018-12-22</p>
                    </div>
                    <div class="comment-message">
                        <p class="user-comment">我一直有一种错觉，好像直木奖的作者都很会讲故事，因此就应该很年轻。然而这本短篇集，越读到后面，就越感受到字里行间的某种疲惫之意，读完上维基百科一看，果然年过半百了啊，而且2006年就获得了直木奖提名，然后一路长跑至今。其中有一个故事里带到了一名一事无成的小说家、死于车祸的失败父亲，有了一种：是不是每一个挣扎着努力的人，都会或多或少生出一种“能就这么挂了真好啊”的情绪呢.....我死后哪管什么的，呵</p>
                    </div>
                    <Divider/>
                </div>
                <div class="comment-container">
                    <div class="user-message">
                        <p class="user-name">我***家</p>
                        <p class="user-grade">评分：9.4</p>
                        <p class="user-date">2018-12-22</p>
                    </div>
                    <div class="comment-message">
                        <p class="user-comment">我一直有一种错觉，好像直木奖的作者都很会讲故事，因此就应该很年轻。然而这本短篇集，越读到后面，就越感受到字里行间的某种疲惫之意，读完上维基百科一看，果然年过半百了啊，而且2006年就获得了直木奖提名，然后一路长跑至今。其中有一个故事里带到了一名一事无成的小说家、死于车祸的失败父亲，有了一种：是不是每一个挣扎着努力的人，都会或多或少生出一种“能就这么挂了真好啊”的情绪呢.....我死后哪管什么的，呵</p>
                    </div>
                    <Divider/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            textname:"内容简介",
            catalog:"目录",
            writerIntro:"作者简介",
            menuTab:true,
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
                {name:'松子',content:'被嫌弃的松子的一生',price:'32',src:'~@/assets/newbook/4.jpg'}
            ]
        }
    },
    
    mounted(){
        this.init()
    },
    methods:{
        init(){
            this.getBookList()
        },
        getBookList(){
            this.$ajax({
                method:'post',
                url:'/getCollections',
                params:{
                    userId:this.$cookies.get('userId')
                }
            }).then(res=>{
                this.newbookList=res.res
            })
        },
        selectMenu(index){
            this.menuTab=(index===1)
        }
    }
}
</script>
<style lang="less" scoped>
.selfinfo{
    width: 100%;
    .content{
        width: 100%;
        .demo{
            margin:20px 0 ;
            .new_products{
                width: 100%;
                padding:10px 0;
                overflow:hidden;
                height: 100%;
                .new_prod_box{
                    float:left;
                    text-align:center;
                    padding:10px;
                    a{
                        padding:5px 0 5px 0;
                        color:#b5b5b6;
                        // color:#f34f4f;
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
                        // top:6px;
                        // right:6px;
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
            .your-comment{
                // float: right;
                width: 100px;
                height: 25px;
                margin-left: 80%;
                span{
                    color: #37A;
                }
                :hover{
                    cursor:pointer
                }
            }
            .divider{
                color: #1f8566;
            }
            .text{
                width: 90%;
                margin:0 auto;
            }
            .comment-container{
                padding:10px 20px; 
                margin:0 auto;
                height: 100%;
                .user-message{
                    text-align: center;
                    float: left;
                    width: 15%;
                    .user-name{
                        color:#37A;
                        margin-top:10px;
                    }
                    .user-grade{
                        color:#f5a623;
                    }
                }
                .comment-message{
                    float: left;
                    margin:0 0 3% 3%;
                    width: 82%;
                }
            }
        }
    }
    /deep/.ivu-menu-light{
        background: none;
    }
}

</style>

