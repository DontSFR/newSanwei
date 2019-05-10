import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
Vue.use(Router)

const routes =  [
  {
    path: '/',
    name: '主界面',
    component: index,
    children: [
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
        path:'search',
        name:'search',
        component: r => require.ensure([], () => r(require('../view/searchBook/index.vue')), 'search')
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
    component: r => require.ensure([], () => r(require('../view/login.vue')), 'login')
  },
  {
    path: '/regist',
    component: r => require.ensure([], () => r(require('../view/regist.vue')), 'regist')
  }
  
];

const router = new Router({
  routes
});
export default router
