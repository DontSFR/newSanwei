import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
// import personalCenter from '@/router/personalCenter.js'
// import orderCenter from '@/router/orderCenter.js'

Vue.use(Router)

const routes =  [
  {
    path: '/',
    name: '主界面',
    redirect: 'index',//重定位
    // meta: {
    //   requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    // },
    component: index,
    children: [
      // personalCenter,
      // orderCenter,
      {
        path: 'index',
        name:'index',
        component: r => require.ensure([], () => r(require('../view/index/index.vue')), 'index')
      },
      {
        path:'newBook',
        name:'newBook',
        component: r => require.ensure([], () => r(require('../view/newBook/index.vue')), 'newBook')
      },
      {
        path:'recommend',
        name:'recommend',
        component: r => require.ensure([], () => r(require('../view/recommend/index.vue')), 'recommend')
      },
      {
        path:'special',
        name:'special',
        component: r => require.ensure([], () => r(require('../view/special/index.vue')), 'special')
      },
      {
        path:'details',
        name:'details',
        component: r => require.ensure([], () => r(require('../view/details/index.vue')), 'details')
      },
      {
        path:'category',
        name:'category',
        component: r => require.ensure([], () => r(require('../view/category/index.vue')), 'category')
      },
      {
        path:'center',
        name:'center',
        component: r => require.ensure([], () => r(require('../view/center/index.vue')), 'center')
      }
    ]
  },
  {
    path: '/login',
    component: r => require.ensure([], () => r(require('../view/login.vue')), 'login')//设施路由
  },
  {
    path: '/regist',
    component: r => require.ensure([], () => r(require('../view/regist.vue')), 'regist')//设施路由
  }
  
];


// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//   store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

const router = new Router({
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requireAuth)) {
//       if (store.state.token) {
//           next();
//       }
//       else {
//           next({
//               path: '/login',
//               query: {redirect: to.fullPath}
//           })
//       }
//   }
//   else {
//       next();
//   }
// })

export default router
