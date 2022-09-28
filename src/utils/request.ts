import axios from "axios";

let http=axios.create({
    baseURL:"http://203.187.171.233:8003",
    timeout:3000
})

// 请求拦截
http.interceptors.request.use(function (config) {
    
    return config;
})
// 响应拦截
http.interceptors.response.use(function (res) {
    
    return res;
})

export default http;