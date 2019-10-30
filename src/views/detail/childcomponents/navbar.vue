<template>
  <nav-bar class="baba">
    <div slot="left" class="lefta" @click="back">
      <img src="~assets/img/common/back.svg" />
    </div>
    <div slot="center" class="decenter">
      <div v-for="(item,index) of title"
           :key="index"
           :class="{active:currentIndex===index}"
           class="centerItem"
           @click="titleClick(index)">
           {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import navBar from 'components/common/navbar/navbar.vue'
export default {
    data() {
        return {
            title:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    components:{
        navBar
    },
    methods: {
        titleClick(index){
            this.currentIndex=index
            this.$emit('titleClick',index)
        },
        back(){
            this.$router.back()
        }
    },
};
</script>

<style scoped>
.baba{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: 9;
    background: white
}
.decenter{
    display: flex;
    font-size: 15px
}
.centerItem{
    flex: 1

}
.active{
    color:#ff577f;
}
.left{
   text-align: center 
}
</style>