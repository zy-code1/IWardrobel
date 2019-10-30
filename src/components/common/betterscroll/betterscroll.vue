<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data() {
        return {
            scroll:null
        }
    },
    props:{
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        //1.创建scroll对象
        this.scroll=new BScroll(this.$refs.wrapper,{
            probeType:3,
            click:true,
            pullUpLoad:this.pullUpLoad
        })
        //2监听滚动的位置
        this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
        })
        //3.监听上拉加载更多
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })
  }

}
</script>

<style scope>

</style>