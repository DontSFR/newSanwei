export default {
    path:'personalCenter',
    name:'个人中心',
    component: r => require.ensure([], () => r(require('../view/center/personalCenter/index.vue')), 'centerindex'),
    children:[
        {
            path:'cart',
            name:'购物车',
            component: r => require.ensure([], () => r(require('../view/center/personalCenter/cart/main.vue')), 'cart'),
        },
        {
            path:'goodCollect',
            name:'商品收藏',
            component: r => require.ensure([], () => r(require('../view/center/personalCenter/goodCollect/main.vue')), 'goodCollect'),
        },
        {
            path:'messageNotice',
            name:'消息通知',
            component: r => require.ensure([], () => r(require('../view/center/personalCenter/messageNotice/main.vue')), 'messageNotice'),
        },
        {
            path:'myCenter',
            name:'我的中心',
            component: r => require.ensure([], () => r(require('../view/center/personalCenter/myCenter/main.vue')), 'myCenter'),
        },
        {
            path:'receiveAddress',
            name:'收货地址',
            component: r => require.ensure([], () => r(require('../view/center/personalCenter/receiveAddress/main.vue')), 'receiveAddress')
        }
    ]
}