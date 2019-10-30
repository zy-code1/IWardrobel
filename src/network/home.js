import {request} from './request'

//首页不止一个请求数据,首页所有请求数据封装在这，方便于管理
export function getHomeData(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGood(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}