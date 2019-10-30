<template>
    <div class="tar-bar-item" @click="toWhere">
       <div v-if="!isActive"><slot name="img1"></slot></div>
       <div v-else><slot name="img2"></slot></div>
       <div :class="{active:isActive}"><slot name="text"></slot></div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        
      }
    },
    props:{
      path:String
    },
    methods:{
      toWhere() {
        this.$router.push(this.path)
      }
    },
    computed:{
      isActive() {
        return this.$route.path.indexOf(this.path)!=-1 
      }
    }
}
</script>

<style scoped>
.tar-bar-item{
  flex: 1;
  height: 49px;
  text-align: center;
}
.tar-bar-item img{
    width: 24px;
    height: 24px;
}
.active{
  color: red
}
</style>