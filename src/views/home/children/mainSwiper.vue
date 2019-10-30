<template>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="swiperLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { swiper, swiperItem } from "components/common/swiper";

export default {
  components: {
    swiper,
    swiperItem
  },
  props: {
    banner:{
        type:Array
    }
  },
  methods: {
    swiperLoad(){
      this.$emit('swiperLoad')
    }
  },
};
</script>