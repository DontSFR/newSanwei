<template>
    <div class="spcial-content">
        <span class="detail-title">书本详情</span>
        <div class="title">
            <span class="title_icon">
                <img src="~@/assets/index/bullet1.gif"
                alt=""
                title="" />
            </span>
            {{this.$route.query.id}}
        </div>
        <div class="left-content">
            <div class="prod_img">
                <a href="details.html">
                    <img class="book-img" src="~@/assets/index/prod1.gif"/>
                </a>
                <br /><br />
                <a 
                    href="images/big_pic.jpg"
                >
                    <img src="~@/assets/index/zoom.gif"/>
                </a>
            </div>
            <div class="detail-content">
                <div class="prod_det_box">
                    <div class="detail">
                        <span>作者：444</span>
                        <br>
                        <span>出版社: 上海译文出版社</span>
                        <br>
                        <span>原作名: The Ghost Writer</span>
                        <br>
                        <span>定价(￥): 45</span>
                        <br>
                        <span>出版年: 2019-1-31</span>
                        <br>
                        <span>页数：444</span>
                        <br>
                    </div>
                    <div class="rate">
                        <span>
                            评分：
                        </span>
                        <br>
                        <span>
                            12548人评价
                        </span>
                        <br>
                        <span>
                            <Rate  allow-half disabled v-model="valueCustomText" ></Rate>
                        </span>
                        <br>
                        <span class="rate-num" style="color: #f5a623">{{ valueCustomText }}</span>
                    </div>
                </div>
                <div class="your-rate">
                    <span>你的评价:</span>
                    <Rate show-text allow-half v-model="yourRateValue">
                        <span style="color: #f5a623">{{ yourRateValue }}</span>
                    </Rate>
                </div>
            </div>
        </div>
        <div class="intro-content">
            <Menu mode="horizontal"  active-name="1">
                <MenuItem name="1" @click.native="selectMenu(1)">
                    <Icon type="ios-paper" />
                    详情介绍
                </MenuItem>
                <MenuItem name="2" @click.native="selectMenu(2)">
                    <Icon type="ios-people" />
                    评论
                    <Badge :count="20" class="demo-badge-alone"></Badge>
                </MenuItem>
            </Menu>
            <div class="content">
                <!-- 简介区域-->
                <div class="demo"  v-if="menuTab">
                    <Divider orientation="left" class="divider" v-model="textname">{{textname}}</Divider>
                    <p class="text">
                        《海边理发店》是作家荻原浩获直木奖的短篇小说集，一家原本顾客如织的理发店，不知为何从市中心搬来了这僻静的海边，只有店主一个人在打理。人们怀着不为人知的秘密到来。店主一边理发，一边为你讲述顾客们留下的故事。
                        在结婚前打算鼓起勇气见见父亲的儿子、代替已逝的女儿出席成人礼的父母……六段亦真亦幻的故事，抚平留在时光中的爱与悔恨。来这家店讲述你的秘密吧，即使再微弱的光，也能照亮晦暗的人生。
                        《海边理发店》不仅获直木奖、全国书店大奖、《达文西》年度之书，更获直木奖评委浅田次郎、林真理子、桐野夏生、伊集院静全票支持，被誉为丝毫不输《解忧杂货店》的感动。 在这本书中，与世界达成和解吧。
                    </p>
                    <Divider orientation="left" class="divider" v-model="catalog">{{catalog}}</Divider>
                    <p class="text">
                        《海边理发店》是作家荻原浩获直木奖的短篇小说集，一家原本顾客如织的理发店，不知为何从市中心搬来了这僻静的海边，只有店主一个人在打理。人们怀着不为人知的秘密到来。店主一边理发，一边为你讲述顾客们留下的故事。
                        在结婚前打算鼓起勇气见见父亲的儿子、代替已逝的女儿出席成人礼的父母……六段亦真亦幻的故事，抚平留在时光中的爱与悔恨。来这家店讲述你的秘密吧，即使再微弱的光，也能照亮晦暗的人生。
                        《海边理发店》不仅获直木奖、全国书店大奖、《达文西》年度之书，更获直木奖评委浅田次郎、林真理子、桐野夏生、伊集院静全票支持，被誉为丝毫不输《解忧杂货店》的感动。 在这本书中，与世界达成和解吧。
                    </p>
                    <Divider orientation="left" class="divider" v-model="writerIntro">{{writerIntro}}</Divider>
                    <p class="text">
                        《海边理发店》是作家荻原浩获直木奖的短篇小说集，一家原本顾客如织的理发店，不知为何从市中心搬来了这僻静的海边，只有店主一个人在打理。人们怀着不为人知的秘密到来。店主一边理发，一边为你讲述顾客们留下的故事。
                        在结婚前打算鼓起勇气见见父亲的儿子、代替已逝的女儿出席成人礼的父母……六段亦真亦幻的故事，抚平留在时光中的爱与悔恨。来这家店讲述你的秘密吧，即使再微弱的光，也能照亮晦暗的人生。
                        《海边理发店》不仅获直木奖、全国书店大奖、《达文西》年度之书，更获直木奖评委浅田次郎、林真理子、桐野夏生、伊集院静全票支持，被誉为丝毫不输《解忧杂货店》的感动。 在这本书中，与世界达成和解吧。
                    </p>
                </div> 
                <!-- 评论区域-->
                <div class="demo" v-else>
                    <div class="your-comment" @click="leaveComment">
                        <Icon type="ios-create-outline" color='#37A' size="24"/>
                        <span>留下你的评论</span>
                    </div>    
                    <Modal 
                        v-model="commentModal" 
                        draggable scrollable 
                        ok-text ="发送" 
                        title="评论区"
                        @on-cancel="commentCancel" 
                        @on-ok="commentSend"
                    >
                        <Input v-model="commentText" type="textarea" :autosize="true" placeholder="说点什么吧" />
                    </Modal>
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
    </div>
</template>
<script>
   export default {
        data () {
            return {
                id:12345,
                valueCustomText: 3.4,
                yourRateValue:0,
                textname:"内容简介",
                catalog:"目录",
                writerIntro:"作者简介",
                menuTab:true,
                commentModal:false,
                commentText:'',
                bookDetail:[
                    {
                        name:"小河西",
                        writer:'44',
                        date:'2010-10-22',
                        pages:"444",
                        piblish:"山东出版社",
                        price:'55',
                        grade:{
                            count:12548,
                            num:9.5
                        }
                    }
                ]
            }
        },
        create(){
            this.$route.query.id
        },
        methods:{
            selectMenu(index){
                this.menuTab=(index===1)
            },
            leaveComment(){
                this.commentModal=true
            },
            commentSend(){
                this.commentText=''
            },
            commentCancel(){
                this.commentText=''
            }
        }
    }
</script>
<style lang="less" scoped>
@import "~@/style/basic.less";
.spcial-content {
    width: 100%;
    height: 100%;
    padding: 20px 0 0 20px;
    .detail-title{
        display: inline-block;
        width: 100%;
        font-size: 20px;
        text-align: center;
    }
    .title {
        color: #734633;
        font-size: 19px;
        height: 30px;
        margin: 10px 0 10px 0;
        .title_icon {
            float: left;
            padding: 0 5px 0 0;
        }
    }
    .left-content{
        padding-left:10px ;
        height:280px;
        margin:0 20px 20px 0;
        .detail-content{
            width:60%;
            float:left;
            margin-left: 25px;
            position:relative;
            .your-rate{
                line-height: 50px;
                height:50px;
            }
            
        }
        .prod_det_box{
            height: 240px;
            padding:25px 0 0 25px;
            border:1px solid rgb(209, 205, 205);
            border-radius:10px;
            .detail{
                width: 50%;
                float: left;
                display: inline-block;
                span{
                    margin: 5px 0;
                    display: inline-block;
                }
            }
            .rate{
                display:inline-block;
                width: 50%;
                span{
                    margin: 5px 0;
                    display: inline-block;
                }
                .rate-num{
                    font-size: 50px;
                    line-height: 60px;
                }
            }
        }
    }
    .prod_img{
        float:left;
        padding:0 5px 0 0;
        text-align:center;
        .book-img{
            width: 200px;
            height:260px;
        }
    }
    .intro-content{
        width: 93%;
        margin:50px 0 0 10px;
        /deep/.ivu-menu-light{
            background: none;
        }
        /deep/.ivu-badge-count{
            background: #5cb85c;
        }
        .demolayout{
            list-style-type: none;
            float: left;
            margin:0px;
            padding:0px;
        }
        .content{
            width: 100%;
            .demo{
                margin:20px 0 ;
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
    }
}
</style>


