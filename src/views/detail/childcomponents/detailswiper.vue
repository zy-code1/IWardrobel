<template>
  <swiper class="swiper">
      <swiper-item v-for="(item,index) of  topImage" :key="index">
          <img :src="item" >
      </swiper-item>
  </swiper>
</template>

<script>
import { swiper, swiperItem } from "components/common/swiper"
export default {
    props:{
       topImage:{
           type:Array
       }
    },
    components:{
        swiper,
        swiperItem
    }
}
</script>

<style scoped>
.swiper{
    height: 300px;
    margin-top: 44px
}
</style>