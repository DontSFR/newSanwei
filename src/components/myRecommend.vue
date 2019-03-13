<template>
    <div>
        <div class="peijian w">
			<div class="title center">
                <router-link class="moreTitle" to='/recommend'>
                    好书推荐/更多
                </router-link>
            </div>
			<div class="main center">
				<div class="content">
					<li class="remen fl" v-for="(item,t) in recommendList" :class="{lastOne:t%5===4}">
						<div class="tu"><a href=""><img v-bind:src="item.src"></a></div>
						<div class="miaoshu"><a href="">{{item.name}}</a></div>
						<div class="jiage">{{item.price}}元</div>
						<div class="pingjia">{{item.comment}}人评价</div>
						<div class="piao">
							<a href="">
								<span>{{item.content}}</span>
							</a>
						</div>
					</li>
				</div>				
			</div>
		</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            recommendList:[
                {name:'爱生命',content:'爱你就想爱生命',comment:'59',price:'34',src:'../assets/newbook/1.jpg'},
                {name:'Storm',content:'暴风雨中的孩子',comment:'754',price:'46',src:'../assets/newbook/3.jpg'},
                {name:'ASKME',content:'儿童百科百问百答',comment:'365',price:'65',src:'../assets/newbook/2.jpg'},
                {name:'松子',content:'被嫌弃的松子的一生',comment:'46',price:'32',src:'../assets/newbook/4.jpg'},
                {name:'坚强',content:'不慌不忙的坚强',comment:'50',price:'26',src:'../assets/newbook/5.jpg'},
                {name:'爱生命',content:'爱你就想爱生命',comment:'59',price:'34',src:'../assets/newbook/1.jpg'},
                {name:'Storm',content:'暴风雨中的孩子',comment:'754',price:'46',src:'../assets/newbook/3.jpg'},
                {name:'ASKME',content:'儿童百科百问百答',comment:'365',price:'65',src:'../assets/newbook/2.jpg'},
                {name:'松子',content:'被嫌弃的松子的一生',comment:'46',price:'32',src:'../assets/newbook/4.jpg'},
                {name:'坚强',content:'不慌不忙的坚强',comment:'50',price:'26',src:'../assets/newbook/5.jpg'},
            ]
        }
    },
    // computed: {
    //     listTemp: function () {
    //         var list = this.recommendList;
    //         var arrTemp = [];
    //         var index = 0;
    //         var sectionCount = 6;
    //         for (var i = 0; i < list.length; i++) {
    //             index = parseInt(i / sectionCount);
    //             if (arrTemp.length <= index) {
    //                 arrTemp.push([]);
    //             }
    //             arrTemp[index].push(list[i]);
    //         }
    //         return arrTemp;
    //     }
    // }
}
</script>
<style lang="less" scoped>
@import "~@/style/basic.less";
.w{width: @win-width-med;margin: 0 auto;}
.title{width:  @win-width-med;height: 58px;line-height: 58px;font-size: 22px;font-weight: bold;margin-top: 20px;}
.moreTitle{
    font-size: 20px;
}
.peijian{
    background: rgb(245,245,245);
    .main{
        height:630px;
        .content{
            // background-color: #ff6700;
            width:  @win-width-med;
            // height: 300px;
            .remen{
                width: 19%;
                height: 300px;
                margin-top: 15px;
                margin-right:1.25%;
                position:relative;
                background: #fff;
                .tu a img{margin:10px 42px 20px 42px;}
                .miaoshu{width: 234px;height: 25px;line-height: 25px;text-align: center;overflow: hidden;}
                .miaoshu a{color:#000;font-size: 14px;}
                .jiage{color:#ff6700;font-size: 14px;text-align:center;width: 234px;height: 25px;line-height: 25px;}
                .pingjia{width:234px;height: 15px;line-height: 15px;font-size: 12px;color:#aaa;text-align: center;}
                .piao{width: 204px;height: 60px;font-size:12px;padding:10px 0px 0px 30px;background:#ff6700; position: absolute;display: none;}
                .piao a{color:#fff;}
                .piao span{display: block;margin-top:5px;}

            }
            .lastOne{
                margin-right:0;
            }
            .remen:hover .piao{display: block;margin-top: -20px;}
            .remen:hover{box-shadow: 0px 0px 5px #ccc;}
            .peijian .main .content .remen:nth-of-type(5){margin:0;}
        }
    }
}


</style>

