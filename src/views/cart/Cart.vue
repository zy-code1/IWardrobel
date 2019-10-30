<template>
  <div class="cart">
    <nav-bar class="navBar">
      <div slot="center">购物车({{cartGood.length}})</div>
    </nav-bar>
    <better-scroll class="bs" ref="bsc">
      <cart-item :cartGood="cartGood"></cart-item>
    </better-scroll>
    <total-price></total-price>
  </div>
</template>

<script>
import cartItem from './childcomp/cartItem.vue'
import totalPrice from './childcomp/totalPrice.vue'

import navBar from 'components/common/navbar/navbar.vue'
import betterScroll from 'components/common/betterscroll/betterscroll.vue'

  export default {
    name: "Cart",
    data() {
      return {
        cartGood:this.$store.state.cartList
      }
    },
    components:{
      navBar,
      cartItem,
      betterScroll,
      totalPrice
    },
    activated(){
      this.$refs.bsc.scroll.refresh()
    }
  }
</script>

<style scoped>
.navBar{
  background: hotpink
}
.bs{
  position:absolute;
  top: 44px;
  bottom: 84px;
  overflow: hidden;
}
</style>
