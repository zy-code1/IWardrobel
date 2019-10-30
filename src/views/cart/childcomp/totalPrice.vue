<template>
  <div class="totalPrice">
    <div class="total">
      <radio class="radio" :isactive="isAll" @click.native="allClick"></radio>
      <div class="allChoose">全选</div>
      <div class="allAdd">合计：￥{{totalPrice}}</div>
      <div class="toPay">去计算({{listLength}})</div>
    </div>
  </div>
</template>

<script>

import radio from './radio.vue'

export default {
  data() {
    return {
    }
  },
  components:{
    radio
  },
  computed:{
    isAll(){
      if(this.$store.state.cartList.length==0) return false
      return !this.$store.state.cartList.filter(x=>!x.checked).length
    },
    totalPrice(){
       return this.$store.state.cartList.filter( p =>{ //筛选出没选中的
        return p.checked
        }).reduce((x,y)=>{
          return x + y.price*y.count
        },0).toFixed(0)
    },  
    listLength(){
      return this.$store.state.cartList.filter( item =>{return item.checked}).length
    }
  },
  methods: {
    allClick(){
      if(this.isAll){
        this.$store.state.cartList.map(x=>x.checked=false) //全部选中
      }else{
        this.$store.state.cartList.map(x=>x.checked=true)  //部分选中或者全没选中
      }
    }
  },
}
</script>

<style scoped>
.totalPrice{
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
    background: rgba(0, 0, 0, .1)
}
.total{
  display:flex;
  height: 35px;
}
.radio{
  margin-top: 10px
}
.allChoose{
  padding-top: 10px;
  margin-left: 5px
}
.allAdd{
  padding-top: 10px;
  margin-left: 5px
}
.toPay{
  position: relative;
  background: orange;
  color: aliceblue;
  right:-104px;
  padding-top: 10px
}
</style>