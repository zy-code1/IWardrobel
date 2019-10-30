import axios from 'axios'

//config参数为对象
export function request(config){
    //创建axios实例
    const instance=axios.create({
        baseURL:'http://106.54.54.237:8000/api/v1',
        timeout:5000,
    }) 
    //发送真正的网络请求，执行回调函数，因为具体的数据操作应该在外面
    //instance(config.baseconfig).then(res=>{config.success(res)})
                               //.catch(err=>{config.failure(err)})
    //instance返回promise，之后就能直接调用request.then.catch        例子：about.vue                  
    return instance(config)
}