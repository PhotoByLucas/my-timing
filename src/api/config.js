// 定义请求返回成功状态、请求超时时间等变量
// 对请求做一次公共封装
// 对token存储存储和拦截

import axios from 'axios'

export const TIME_OUT = 1000
export const ERR_OK = true
export const baseUrl = process.env.BASE_URL

// 请求超时时间
axios.defaults.timeout = TIME_OUT

// 封装请求拦截
// axios.interceptors.request.use(

// )
