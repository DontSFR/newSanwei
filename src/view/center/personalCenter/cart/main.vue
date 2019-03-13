<template>
    <div class="rtcont">
        <div class="list">
            <p class="title">购物清单</p>
            <div id="app">
                <table class="table" >
                        <tr>
                            <td>
                            <!-- <input type="checkbox" v-if="isSelectAll==false"  @click="selectAll(),select=!select"> 全选</input> -->
                            <input type="checkbox"   @click="selectAll(),select=!select"> 全选</input>
                            <!-- <input type="checkbox" v-else="isSelectAll==true"  @click="selectNone(),select=!select">全选</input> -->
                            </td>
                            <td>商品</td>
                            <td>数量</td>
                            <td>单价(元)</td>
                            <td>金额(元)</td>
                            <td>操作</td>
                        </tr>
                        <tr v-for="goods in goodsList">
                            <td>
                                <input type="checkbox"  @click="goods.select=!goods.select"><img src=""></input>
                                <!-- <span v-if="goods.select==false"  @click="goods.select=!goods.select"><img src=""></span>
                                <span v-else="gooods.select==true"  @click="goods.select=!goods.select"><img src=""></span> -->
                            </td>
                            <td>
                                    <div class="left"><img src="" style="width: 100;height: 100%;"></div>
                                    <div class="right">
                                        <h5>{{goods.name}}</h5>
                                        <p>品牌：{{goods.brand}}  产地:{{goods.location}}</p>
                                        <p>规格/纯度:{{goods.size}}  起定量:{{goods.number}}</p>
                                        <p>配送仓储:{{goods.send}}</p>
                                    </div>
                            </td>
                            <td>
                                <a class="btn" @click="goods.num--">-</a>
                                <input type="text" class="number" v-model="goods.num" style="text-align: center;"></input>
                                <a class="btn" @click="goods.num++">+</a>
                            </td>
                            <td>${{goods.price}}</td>
                            <td>${{goods.num*goods.price}}</td>
                            <td>
                                <Button class="btn btn-danger" @click="deleteOne(index)">删除</Button>
                            </td>
                        </tr>
                </table>
                <p style="float: left;"><a class="btn" @click="deleteGoods()">删除选中商品</a></p>
                <p style="float: right;">您挑选了{{getTotal.totalNum}}商品，共计{{getTotal.totalPrice}}元</p>
            </div>
        </div>
    </div>
</template>
 <script>
    export default{
        data () {
            return {
                goodsList:[
                {
                    name:'可乐',
                    brand:'可口可乐公司',
                    location:'海外',
                    size:'300ml',
                    number:10,
                    send:'海外仓库',
                    price:3,
                    num:2,
                },
                {
                    name:'雪碧',
                    brand:'可口可乐公司',
                    location:'海外',
                    size:'270ml',
                    number:10,
                    send:'海外仓库',
                    price:3,
                    num:1,
            
            
                },
                {
                    name:'芬达',
                    brand:'可口可乐公司',
                    location:'海外',
                    size:'300ml',
                    number:20,
                    send:'海外仓库',
                    price:4,
                    num:4,
                },
                {
                    name:'美年达',
                    brand:'可口可乐公司',
                    location:'海外',
                    size:'300ml',
                    number:16,
                    send:'海外仓库',
                    price:2,
                    num:3,
                },
                ]

            }
        },
        methods:{
            selectAll:function(){
                for(var i=0;i<this.goodsList.length;i++){
                    this.goodsList[i].select=true;
                }
            },
            selectNone:function(){
                for(var i=0;i<this.goodsList.length;i++){
                    this.goodsList[i].select=false;
                }
            },
            deleteOne:function(index){
                //选中之后删除
                //this.goodsList=this.goodsList.filter(function (item) {return !item.select});
                //点击删除按钮后直接删除
                this.goodsList.splice(index,1);
            },
            deleteGoods:function(){
                this.goodsList=this.goodsList.filter(function (item) {return !item.select});
            },
        },
        computed: {
            isSelectAll:function(){
                //如果每一条数据的select都为true，返回true，否则返回false;
                return this.goodsList.every(function (val) { return val.select});
            },
            getTotal:function(){
                //获取goodsList中select为true的数据。
                var _proList=this.goodsList.filter(function (val) { return val.select}),totalPrice=0;
                for(var i=0,len=_proList.length;i<len;i++){
                    //总价累加
                    totalPrice+=_proList[i].num*_proList[i].price;
                }
                //选择产品的件数就是_proList.length，总价就是totalPrice
                return {totalNum:_proList.length,totalPrice:totalPrice}
            },
        },
        mounted:function () {
                var _this=this;
                this.goodsList.map(function (goods) {
                    _this.$set(goods, 'select', false);
                })
            }
    }
</script>
<style lang="less" scoped>
.rtcont{
    position: absolute;
    left: 50%;
    margin-left: -613px;
    top:140px;
    width: 1226px;
    height: 100%;
    background: #d2e484;
    .title{
        font-size:12px;
        font-family: 'Courier New', Courier, monospace;
    }
}
.list{
    position: relative;
    margin-left: 250px;
    width: 978px;
    background: #dda9a9;
    float: left;
    height: 100%;
}
.left{
    display: block;
    float: left;
    width: 80px;
    height: 100px;
}
.right{
    display: block;
    margin-left: 90px;
    height: 100px;
}
.number{
    width: 40px;
}
</style>
