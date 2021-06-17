import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index/Index.vue'
import TransferStatus from '../views/TransferStatus/TransferStatus.vue'
import Monitoring from '../views/Monitoring/Monitoring.vue'
import DataShow from '../views/DataShow/DataShow.vue'
import AlarmStatus from '../views/AlarmStatus/AlarmStatus.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Index',
    component: Index,
    redirect: "/index/transferStatus",
    children: [{
            path: '/index/transferStatus', //传输状态
            name: 'transferStatus',
            component: TransferStatus
        },
        {
            path: '/index/monitoring', //一页图监控
            name: 'monitoring',
            component: Monitoring
        },
        {
            path: '/index/dataShow', //数据展示
            name: 'dataShow',
            component: DataShow
        },
        {
            path: '/index/alarmStatus', //数据展示
            name: 'alarmStatus',
            component: AlarmStatus
        }
    ]
}]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
});

// 路由守卫
router.beforeEach((to, from, next) => {
    // 判断sessionStorage里面是否有token
    const isLogin = sessionStorage.getItem('token') ? true : false;
    if (to.meta.requireAuth) {
        if (to.path == "/login") {
            next();
        } else {
            // 如果为真，正常跳转，否则跳到登录页面
            isLogin ? next() : next('/login');
        }
    } else {
        next()
    }
    if (to.fullPath == "/login") {
        if (isLogin) {
            next({
                path: from.fullPath
            });
        } else {
            next();
        }
    }

})
export default router