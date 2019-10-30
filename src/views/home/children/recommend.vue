<template>
  <div class="recommend">
    <div v-for="(item,index) of recommend" :key="index" class="icon">
        <a :href="item.link">
            <img :src="item.image">
            <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    props:{
      recommend:{
          type:Array
      }
    },
}
</script>

<style scoped>
.recommend{
    display: flex;
    text-align: center;
}
.icon{
    flex: 1;
    margin-top:10px;
    cursor: pointer;
}
img{
    width: 75px;
    height: 75px;
    margin-bottom: 5px
}
</style>