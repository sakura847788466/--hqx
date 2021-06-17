import axios from 'axios';
// const baseUrl = 'https://ygashr.gdhqx.cn';
// const baseUrl = 'http://192.168.5.59:8093';
import {
    Message,
    Loading
} from 'element-ui';
import router from '../router';

let loading;

function startLoading() {
    loading = Loading.service({
        lock: true,
        text: '数据加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 0.5)'
    });
}

function endLoading() {
    loading.close();
}
let http = axios.create({
    timeout: 100000,
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});
// 请求拦截
// 请求的时候需要加载动画
http.interceptors.request.use(
    config => {
        startLoading();
        // 加载动画
        if (sessionStorage.getItem('token')) {
            // 设置统一的请求头
            config.headers.token = sessionStorage.getItem('token')
        }
        return config;
    },
    error => {
        endLoading()
        return Promise.reject(error);
    }
);
// 响应拦截
http.interceptors.response.use(
    response => {
        // 响应成功关闭loading
        // setTimeout(() => {
        //         endLoading()
        //     }, 100000)
        endLoading()
        if (response.data.code === 200 || response.data && !response.data.code) {
            return response;
        } else if (response.data.code === -2) {
            Message.warning({
                message: '登录过期，请重新登录',
                duration: 1500
            });
            // 清除token
            sessionStorage.removeItem("id");
            sessionStorage.removeItem("accountNumber");
            sessionStorage.removeItem("roleId");
            sessionStorage.removeItem("roleName");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("userName");
            // 跳转到登录页面
            router.push("/login");
        } else {
            Message.error(response.data.msg);
            return Promise.reject(response.data);
        }
    }, error => {
        endLoading()
        Message.error('服务器异常，请稍后再试');
        return Promise.reject(error);
    }
);

export default function ajax(url, params, method, isForm, isBlob) {
    let paramsData = isForm ? params : JSON.stringify(params)
    let httpUrl = (method === 'GET' || method === 'DELETE') && params ? url + params : url
    return new Promise((resolve, reject) => {
        http({
            method: method,
            url: httpUrl,
            data: method === 'POST' || method === 'PUT' ? paramsData : null,
            headers: {
                'Content-Type': isForm ? 'multipart/form-data;charset=UTF-8' : 'application/json'
            },
            responseType: isBlob ? 'blob' : ''
        }).then((res) => {
            if (res) {
                resolve(res.data);
            }
        }).catch((err) => {
            reject(err);
        })
    })
}