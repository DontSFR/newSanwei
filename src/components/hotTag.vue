<template>
    <div class="spcial-content">
        <div class="title">
            <span class="title_icon">
                <img src="~@/assets/index/bullet4.gif" alt="" title="" />
            </span>
            热门标签
        </div>
        <div class="classify-box" v-for="t in bookTypeList">
            <span class="title">{{t.name}}</span>
            <div class="classify-content">
                <a class="name" v-for="tt in t.class">
                    <router-link 
                        :to="{name:'category',query:{id:tt.name}}"
                    > 
                    {{tt.name}}
                    </router-link>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
                bookTypeList: [
                    {
                        id: '1', 
                        name: '小说文学馆',
                        class:[
                            {name:'古典'},
                            {name:'现代'},
                            {name:'古往今来'},
                            {name:'显示'},
                            {name:'科学'},
                            {name:'力石'},
                            {name:'文化'},
                            {name:'电视'},
                            {name:'可乐'},
                            {name:'MOOC'}
        
                        ]
                    }, 
                    {id: '2', name: '古籍收藏鉴赏馆',
                        class:[
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'}
                        ]
                    },
                    {id: '3', name: '童书馆',
                        class:[
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'}
                        ]
                    }, 
                    {id: '4', name: '人文社会馆',
                        class:[
                            {name:'古kkk典'},
                            {name:'古典'},
                            {name:'古www典'},
                            {name:'古ss典'},
                            {name:'古典'},
                            {name:'sss'},
                            {name:'古典'},
                            {name:'古ss典'},
                            {name:'古典'},
                            {name:'古典'}
                        ]
                    },
                    {id: '5', name: '教育馆',
                        class:[
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'}
                        ]
                    }, 
                    {id: '6', name: '自然科学馆',
                        class:[
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'},
                            {name:'古典'}
                        ]
                    } 
                ],
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
        border-bottom:1px #b2b2b2 dashed;
        .title{
            color:#000000;
            font-size:14px;
        }
        .classify-content{
            width: 100%;
            margin-top: 10px;
            .name{
                color:#37A;
                display: inline-block;
                background-color:rgb(213, 219, 219);
                padding:2px 5px;
                margin:5px 0 0 10px;
                // line-height: px;
            }
        }
    }
}

</style>


