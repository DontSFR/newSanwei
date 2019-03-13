<template>
    <div class="spcial-content">
        <div class="title">
            <span class="title_icon">
                <img src="~@/assets/index/bullet5.gif" alt="" title="" />
            </span>
            热评TOP10
        </div>
        <div class="classify-box" >
            <div class="ranking-content"  v-for="(t,i) in rankList">
                <span class="nunmber">{{t.top}}.</span>
                <div class="name-writer">
                    <a class="book-name">
                        <router-link 
                            :to="{name:'details',query:{id:t.name}}"
                        > 
                        {{t.name}}
                        </router-link>
                    </a>
                    <span class="book-writer" >作者:{{t.writer}}</span>
                </div>
                <span class="book-grade">评分：{{t.grade}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            rankList:[
                {
                    name:"小说",
                    top:"1",
                    writer:"你好",
                    grade:'9.7'
                },
                {
                    name:"小说",
                    top:"2",
                    writer:"你loookkokhdhd好",
                    grade:'9.7'
                    
                },
                {
                    name:"小说",
                    top:"3",
                    writer:"你好",
                    grade:'9.7'
                },
                {
                    name:"小说",
                    top:"4",
                    writer:"你好",
                    grade:'9.7'
                },
                {
                    name:"小说",
                    top:"5",
                    writer:"你好",
                    grade:'9.7'
                },
                {
                    name:"小说",
                    top:"6",
                    writer:"你好",
                    grade:'9.7'
                },
                {
                    name:"小说",
                    top:"7",
                    writer:"你好",
                    grade:'9.7'
                },
                {
                    name:"小说",
                    top:"8",
                    writer:"你好",
                    grade:'9.7'
                },
                {
                    name:"小说",
                    top:"9",
                    writer:"你好",
                    grade:'9.7'
                },
                {
                    name:"小说",
                    top:"10",
                    writer:"你好",
                    grade:'9.7'
                }
            ]
        }
    },
    mounted(){
        this.init()
    },
    computed:{
        // filter: {
        //     ellipsis (value) {
        //         if (!value) return ''
        //         if (value.length > 8) {
        //             return value.slice(0,8) + '...'
        //         }
        //     return value
        //     }
        // }
    },
    methods:{
        init(){
            this.getRankList()
        },
        getRankList(){
            this.$ajax({
                method:"post",
                url:"http://192.168.1.9:7777/getGradeTop10"
            }).then(res=>{
                console.log('list',res.res)
            })
        }
    }
}
</script>
<style lang="less" scoped>
@import "~@/style/basic.less";
.spcial-content{
    width:100%;
    // height: 100%;
    padding: 20px 0 0 20px;
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
    .classify-box{
        padding:0 0 10px 10px;
        // height:100%;
        margin:0 20px 20px 0;
        .ranking-content{
            border-bottom:1px #b2b2b2 dashed;
            padding-left: 20px;
            width:100%;
            height: 50px;
            // background-color: rgb(141, 170, 154);
            .nunmber{
                font-size: 14px;
                width: 15px;
                color:#37A;
                float: left;
                display: inline-block;
            }
            .name-writer{
                display: inline-block;
                height:50px;
                width: 60%;
                // background-color: #474747;
                // line-height: 50px;
                margin-left:10px;
                .book-name{
                    font-size: 14px;
                    color:#37A;
                    display: inline-block;
                    text-overflow:ellipsis; //文本溢出显示省略号；
                }
                .book-writer{
                    font-size: 14px;
                    width: 175px;
                    display: -webkit-box;
                    text-overflow:ellipsis; //文本溢出显示省略号；
                }
            }
            .book-grade{
                display: inline-block;
                float: right;
                margin-right:10px;
            }
        }
        // .title{
        //     color:#000000;
        //     font-size:14px;
        // }
        // .classify-content{
        //     width: 100%;
        //     margin-top: 10px;
        //     .name{
        //         color:#37A;
        //         display: inline-block;
        //         background-color:rgb(213, 219, 219);
        //         padding:2px 5px;
        //         margin:5px 0 0 10px;
        //         // line-height: px;
        //     }
        // }
    }
}

</style>


