<template>
  <div class="radio" :class="{active:isactive}">
      <img src="~assets/img/cart/tick.svg">
  </div>
</template>

<script>
export default {
props:{
    isactive:{
        type:Boolean
    }
}
}
</script>

<style scoped>
.radio{
    width: 17px;
    height: 17px;
    border-radius: 15px;
    border: 1px solid gray
}
.active{
    background: hotpink
}
</style>