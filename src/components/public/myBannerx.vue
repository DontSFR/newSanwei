<template>
    <div class="menu">
        <Menu class="selected" ref="side_menu" mode="horizontal" :active-name="activeName">
            <MenuItem name="index">
                <router-link to='/index' class="a-link">
                    首页
                </router-link>
            </MenuItem>
            <MenuItem name="recommend">
                <router-link to='/recommend' class="a-link">
                    好书推荐
                </router-link>
            </MenuItem>
            <MenuItem name="newBook">
                <router-link to='/newBook' class="a-link">
                    新书上架
                </router-link> 
            </MenuItem>
            <MenuItem name="special">
                <router-link to='/special' class="a-link">
                    特色书籍
                </router-link>
            </MenuItem>
            <MenuItem name="center">
                <router-link to='/center' class="a-link personer">
                    个人中心
                </router-link>
            </MenuItem>
        </Menu>
        <div class="right-selected">
            <router-link to='/login' class="a-link login">
                登录
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            activeName: '',
            menuList: [
                {
                    path: 'index',
                    name:'index'
                },
                {
                    path: '/recommend',
                    name:'recommend'
                },
                {
                    path: '/newBook',
                    name:'newBook'
                },
                {
                    path: '/special',
                    name:'special'
                },
                {
                    path: '/center',
                    name:'center'
                }
            ]
        }
    },
    created(){
        this.$route.name
    },
    watch: {
        init (v) {},
        '$route'(to){
            //做一些路由变化的响应
            this.activeName=to.name
            // console.log('----',to.name)
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            this.menuList.forEach(t => {
                if (t.name === this.$route.name) {
                    this.activeName = this.$route.name
                }
            })
            this.$nextTick(() => {
                this.$refs.side_menu.updateActiveName()
            })
        }
    }

}
</script>

<style lang="less" scoped>
@import "~@/style/basic.less";
.menu{
    width:@win-width-xmin;
    .selected{
        // margin-top: -25px;
        width: 80%;
        float:left;
        padding-left: 20px;
    }
    .right-selected{
        float:right;
        height:30px;
        width: 20%;
        line-height: 30px;
        .login{
            display: inline-block;
            width: 50px;
            margin-left: 60%;
        }
        .personer{
            display: inline-block;
            width: 50px;
        }
    }
}
/deep/.ivu-menu-horizontal{
        height:30px;
        line-height:30px;
    }
/deep/.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active{
    color: #f7a849 !important;
    border-bottom: 2px solid #f7a849;
}
/deep/.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
    color: #f7a849 !important;
    border-bottom: 2px solid #f7a849;
}

/deep/.ivu-menu-light{
    background: none;
}
/deep/.ivu-menu-horizontal.ivu-menu-light:after{
    background: none;
}
.a-link:hover{
    color:#f7a849;
}
</style>

