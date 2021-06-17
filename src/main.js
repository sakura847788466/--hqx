import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './font/iconfont'
import './utils/flexible'
import './plugins/element'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
    // 复制粘贴
import Clipboard from 'clipboard';
Vue.prototype.Clipboard = Clipboard;
require('./mock/dataList');

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')