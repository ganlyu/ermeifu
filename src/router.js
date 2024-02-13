import { createRouter, createWebHistory } from 'vue-router';
import homeIndex from './home/home_index.vue';
import productList from './home/product_list.vue';
import productAddress from './home/product_address.vue';
import productDetail from './home/product_detail.vue';

// 使用VueRouter插件  
// Vue.use(VueRouter);

// 定义路由映射  
const routes = [
  {
    path: '/',
    name: 'homeIndex',
    component: homeIndex
  },
  {
    path: '/goods',
    name: 'productList',
    component: productList
  },
  {
    path: '/address',
    name: 'productAddress',
    component: productAddress
  },
  {
    path: '/detail',
    name: 'productDetail',
    component: productDetail
  }
  // 可以添加更多路由...  
];

// 创建router实例  
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 History 模式，去掉 URL 中的 #  
  routes// 简写，相当于 routes: routes  
});

export default router;