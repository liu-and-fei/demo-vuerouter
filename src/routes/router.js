// 引入 vue
import Vue from 'vue';
// 引入 vue-router
import VueRouter from 'vue-router';

// 引入需要路由处理的文件
import home from '../views/home.vue'
import detail from '../views/detail.vue'
import mi9 from '../components/mi9';
import vmallp30 from '../components/vmallp30';

// 使用 Vuerouter 插（感觉像是中间件）
Vue.use(VueRouter);

// 各页面路由的配置
const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/detail',
    component: detail,
    children: [
      {
        path: 'mi9',
        component: mi9
      },
      {
        path: 'vmallp30',
        component: vmallp30
      }
    ]
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  // 设定路由模式（默认模式 hash）
  mode: 'hash',
  routes
});

export default router;
