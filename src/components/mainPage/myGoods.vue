<template>
    <div>
        <div class="danpin center">	
			<div class="title center">
                    好书推荐
            </div>
            <div class="main center">
				<div class="content">
					<li class="remen fl" v-for="item in recommendList">
						<div class="tu"><a href=""><img v-bind:src="item.src"></a></div>
						<div class="miaoshu"><a href="">{{item.name}}</a></div>
						<div class="jiage">{{item.price}}元</div>
						<div class="pingjia">{{item.comment}}人评价</div>
						<div class="piao">
							<a href="">
								<span>{{item.detail}}</span>
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
                {name:'2爱生命',content:'爱你就想爱生命',comment:'59',price:'34',src:'../assets/newbook/1.jpg'},
                {name:'2Storm',content:'暴风雨中的孩子',comment:'754',price:'46',src:'../assets/newbook/3.jpg'},
                {name:'2ASKME',content:'儿童百科百问百答',comment:'365',price:'65',src:'../assets/newbook/2.jpg'},
                {name:'2松子',content:'被嫌弃的松子的一生',comment:'46',price:'32',src:'../assets/newbook/4.jpg'},
                {name:'2坚强',content:'不慌不忙的坚强',comment:'50',price:'26',src:'../assets/newbook/5.jpg'},
                {name:'3爱生命',content:'爱你就想爱生命',comment:'59',price:'34',src:'../assets/newbook/1.jpg'},
                {name:'3Storm',content:'暴风雨中的孩子',comment:'754',price:'46',src:'../assets/newbook/3.jpg'},
                {name:'3ASKME',content:'儿童百科百问百答',comment:'365',price:'65',src:'../assets/newbook/2.jpg'},
                {name:'3松子',content:'被嫌弃的松子的一生',comment:'46',price:'32',src:'../assets/newbook/4.jpg'},
                {name:'3坚强',content:'不慌不忙的坚强',comment:'50',price:'26',src:'../assets/newbook/5.jpg'},
                {name:'4爱生命',content:'爱你就想爱生命',comment:'59',price:'34',src:'../assets/newbook/1.jpg'},
                {name:'4Storm',content:'暴风雨中的孩子',comment:'754',price:'46',src:'../assets/newbook/3.jpg'},
                {name:'4ASKME',content:'儿童百科百问百答',comment:'365',price:'65',src:'../assets/newbook/2.jpg'},
                {name:'4松子',content:'被嫌弃的松子的一生',comment:'46',price:'32',src:'../assets/newbook/4.jpg'},
                {name:'4坚强',content:'不慌不忙的坚强',comment:'50',price:'26',src:'../assets/newbook/5.jpg'},
            ]
        }
    },
    methods:{
         queryData () {
            this.$ajax({
                method: 'POST',
                url:'http://192.168.0.107:7777/getBooks'
            }).then((data) => {
                console.log(data)
            })
            },
    },
    mounted () {
        this.queryData()
    },
}
</script>
<style lang="less" scoped>
@import "~@/style/basic.less";
.title{width: 1226px;height: 58px;line-height: 58px;font-size: 22px;font-weight: bold;margin-top: 20px;}
.moreTitle{
    font-size: 20px;
}
.danpin{
    // width: 1226px;
    // background: rgb(245,245,245);
    .main{
        width: 1226px;
        .content{
            // background-color: #ff6700;
            width: 1260px;
            // height: 1000px;
            // background: #bddb5a;
            // height: 300px;
            .remen{
                width:235px;
                height: 300px;
                margin-top: 15px;
                margin-right: 14px;
                position:relative;
                background: #bb8888;
                .tu a img{margin:10px 42px 20px 42px;}
                .miaoshu{width: 234px;height: 25px;line-height: 25px;text-align: center;overflow: hidden;}
                .miaoshu a{color:#000;font-size: 14px;}
                .jiage{color:#ff6700;font-size: 14px;text-align:center;width: 234px;height: 25px;line-height: 25px;}
                .pingjia{width:234px;height: 15px;line-height: 15px;font-size: 12px;color:#aaa;text-align: center;}
                .piao{width: 204px;height: 60px;font-size:12px;padding:10px 0px 0px 30px;background:#ff6700; position: absolute;display: none;}
                .piao a{color:#fff;}
                .piao span{display: block;margin-top:5px;}

            }
            .remen:hover .piao{display: block;margin-top: -20px;}
            .remen:hover{box-shadow: 0px 0px 5px #ccc;}
            .peijian .main .content .remen:nth-of-type(5){margin:0;}
        }
    }
}


</style>



