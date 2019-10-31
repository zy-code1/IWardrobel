<template>
  <div class="insertCart">
      <div class="kefu">客服</div>
      <div class="dianpu">店铺</div>
      <div class="shoucang">收藏</div>
      <div class="addcart" @click="addCartClick">加入购物车</div>
      <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
    props:{
        cartGood:{
            type:Object
        }
    },
    methods: {
        addCartClick(){
            this.$store.dispatch('addCart',this.cartGood).then(res=>this.$emit('toastShow',res))
        }
    },
}
</script>

<style scoped>
.insertCart{
    display: flex;
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    background:white;
    width: 100%;
}
.insertCart>div{
    text-align: center;
    line-height: 49px
}
.kefu{width: 15.3%;font-size:15px }
.dianpu{width: 15.3%;font-size:15px}
.shoucang{width: 15.3%;font-size:15px}
.addcart{
    width: 27%;
    background: orange;   
}
.buy{
    width: 27%;
    background: hotpink
}
</style>