<template>
    <tar-bar>
      <tar-bar-item path='/home'>
        <img slot="img1" src="~assets/img/tabbar/home.svg">
        <img slot="img2" src="~assets/img/tabbar/home_active.svg">
        <div slot="text">首页</div>
      </tar-bar-item>
      <tar-bar-item path='/category'>
        <img slot="img1" src="~assets/img/tabbar/category.svg">
        <img slot="img2" src="~assets/img/tabbar/category_active.svg">
        <div slot="text">分类</div>
      </tar-bar-item>
      <tar-bar-item path='/cart'>
        <img slot="img1" src="~assets/img/tabbar/shopcart.svg">
        <img slot="img2" src="~assets/img/tabbar/shopcart_active.svg">
        <div slot="text">购物车</div>
      </tar-bar-item>
      <tar-bar-item path='/profile'>
        <img slot="img1" src="~assets/img/tabbar/profile.svg">
        <img slot="img2" src="~assets/img/tabbar/profile_active.svg">
        <div slot="text">我的</div>
      </tar-bar-item>
   </tar-bar>
</template>
<script>
import tarBar from 'components/common/tarbar/tarbar.vue'
import tarBarItem from 'components/common/tarbar/tarbaritem.vue'
export default {
    components:{
        tarBar,
    tarBarItem
    }
}
</script>
 
<style scoped>

</style>