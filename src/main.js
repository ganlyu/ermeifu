import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './styles/global.css';
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App);
app.use(ElementPlus)
// 注入router实例
app.use(router)
// 全局注册图标  
for (const [key, component] of Object.entries(Icons)) {
    app.component(key, component)
}
app.mount('#app');

document.addEventListener('DOMContentLoaded', function () {
    // 处理滚动事件的逻辑  
    window.addEventListener('scroll', function () {
        var element = document.getElementById('home_index');
        var element2 = document.getElementById('home_head_title');
        var element3 = document.getElementById('home_head_title2');
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (element) {
            if (scrollTop > 50) {  // 当滚动距离大于50px时  
                element.classList.remove('fixed-head');
                element.classList.add('fixed-head2');
                element2.classList.remove('head-title');
                element2.classList.add('head-title2');
                element3.classList.remove('head-title');
                element3.classList.add('head-title2');
            } else {
                element.classList.remove('fixed-head2');
                element.classList.add('fixed-head');
                element2.classList.remove('head-title2');
                element2.classList.add('head-title');
                element3.classList.remove('head-title2');
                element3.classList.add('head-title');
            }
        }
    });
});
