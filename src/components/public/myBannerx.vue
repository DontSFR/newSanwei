<template>
    <div class="menu">
        <Menu class="selected" mode="horizontal" :active-name="activeName">
            <MenuItem name="index">
                <router-link to='/index'>
                    首页
                </router-link>
            </MenuItem>
            <MenuItem name="recommend">
                <router-link to='/recommend'>
                    好书推荐
                </router-link>
            </MenuItem>
            <MenuItem name="newBook">
                <router-link to='/newBook'>
                    新书上架
                </router-link> 
            </MenuItem>
            <MenuItem name="special">
                <router-link to='/special'>
                    特色书籍
                </router-link>
            </MenuItem>
            <MenuItem name="contact">
                <router-link to='/contact'>
                    contact
                </router-link>
            </MenuItem>
            <MenuItem name="prices">
                <router-link to='/prices'>
                    prices
                </router-link>
            </MenuItem>
            <MenuItem name="accout">
                 <router-link to='/accout'>
                    my accout
                </router-link>
            </MenuItem>
        </Menu>
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
                    name: 'index'
                },
                {
                    path: 'recommend',
                    name: 'recommend'
                },
                {
                    path: 'newBook',
                    name: 'newBook'
                }
            ]
        }
    },
    watch: {
        init (v) {}
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            this.menuList.forEach(t => {
                if (t.path === this.$route.name) {
                    this.activeName = t.name
                }
            })
            // this.$nextTick(() => {
            //     this.$refs.side_menu.updateActiveName()
            // })

            console.log('aa',this.activeName)
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
        margin-left: 20px;
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
</style>

