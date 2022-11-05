import axios from "axios";

export function request(config){
    const instance=axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    });
    // 拦截器使用
    // 请求拦截
    // instance.interceptors.request.use(config=>{
    //     console.log(config)
    //     // 拦截之后，需要再把这个值返回回去
    //     return config
    // },err=>{
    //     console.log(err)
    // })
    // 响应拦截
    instance.interceptors.response.use(res=>{
        // console.log(res)
        // 拦截之后需要再返回一下，可以只返回data
        return res.data
    },err=>{
        console.log(err)
    })
    // 直接返回instance实例即可，因为这个实例本身返回的就是Promise
    return instance(config);
}