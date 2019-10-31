import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addtoCart(state,payLoad){
      state.cartList.push(payLoad)
    },
    addCount(state,payLoad){
        payLoad.count++
    }
  },
  actions: {
    addCart(context,payLoad){
      return new Promise((resolve,reject)=>{
        let oldobj=context.state.cartList.find((x)=>x.iid==payLoad.iid)
        if(oldobj){
          context.commit('addCount',oldobj)
          resolve('数量加1')
        }else{
          payLoad.count=1
          context.commit('addtoCart',payLoad)
          resolve('成功加入购物车')
      }
      })
    }
  },
  modules: {
  }
})
