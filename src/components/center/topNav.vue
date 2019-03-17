<template>
    <div class="person-top">
        <div class="user-massage">
            <Avatar class="user-img" size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            <div  class="message">
                <p class="name">John.Smith</p>
                <p>17858287600</p>
            </div>
            <div  class="active">
                <span class="num-content">
                    <p class="num">64</p>
                    <p class="title">收藏数</p>
                </span>
                <span class="num-content">
                    <p class="num">64</p>
                    <p class="title">评论数</p>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
@import "~@/style/basic.less";
.person-top{
    width: 100%;
    height: 200px;
    // background: url("~@/assets/index/c4.jpg") center center;
    // opacity:0.5;
    // background-size:cover;
    overflow: hidden;
    .user-massage{
        width: 85%;
        height: 180px;
        line-height: 180px;
        margin: 0 auto;
        // margin-top:10%;
        .user-img{
            display: inline-block;
        }
        .message{
            display: inline-block;
            height: 80px;
            line-height:80px;
            vertical-align: middle;
            margin-left:20px;
            .name{
                font-weight: 600;
            }
            p{
                line-height:40px;
                font-size: 18px;
            }
        }
        .active{
            display: inline-block;
            float: right;
            text-align: center;
            font-size: 16px;
            margin-right: 20px;
            .num-content{
                display: inline-block;
                vertical-align: middle;
                width: 60px;
                // height:80px;
                .title{
                    font-size: 13px;
                }
                .num{
                    color:#f5a623;
                    font-size: 24px;
                    font-weight: 700;
                }
            }
        }
    }
    /deep/.ivu-avatar-large {
        width: 80px;
        height: 80px;
        line-height:80px;
        border-radius: 80px;
    }
}
// .person-top::before{
//     content:"";
//     background: url("~@/assets/index/c4.jpg") center center;
//     background-size:cover;
//     opacity:0.5;//透明度设置
//     z-index:-1;
//     width: 100%;
//     height: 200px;
//     // position:absolute;
//     //一定要设置position:absolute,这样才能设置z-index，让背景处于内容的下一层
//     // top:0px;
//     // left:0px;
//     // border-radius:40px;
// }
</style>