<template>
  <div class="pingLun">
      <div class="top">
          <span>用户评价</span>
          <span>更多 =></span>
      </div>
      <div class="user">
          <img :src="pingLun.user.avatar">
          <span>{{pingLun.user.uname}}</span>
      </div>
      <div class="content">{{pingLun.content}}</div>
      <div class="extraInfo"><strong v-for="(item,index) of pingLun.extraInfo" :key="index">{{item+'/'}}</strong></div>
      <div class="noName"><strong>{{pingLun.created}}</strong>/<strong>{{pingLun.style}}</strong></div>
      <div v-for="(item,index) of pingLun.images" :key="index" class="pingLunImg"><img :src="item"></div>
  </div>
</template>

<script>
export default {
    props:{
        pingLun:{
            type:Object,
            default(){
                return {content:'该用户未评价'}
            }
        }
    },
    created() {
        console.log(this.pingLun)
    },
}
</script>

<style scoped>
.top{
    margin-top: 50px;
    font-size: 18px;
    background: rgba(197, 195, 195, 0.1);
    height: 50px;
    line-height: 50px
}
.top>span:last-child{
    margin-left: 180px
}
.user>img{
    width: 57px;
    height: 57px;
}
.user>span{
    position: relative;
    top: -27px
}
.content{
    text-indent: 2em;
    line-height: 21px;
    font-size: 13px
}
.extraInfo{
    margin: 12px 0 6px 0px;
    font-size: 13px
}
.extraInfo>strong{
    margin-right: 5px
}
.noName>strong{
    font-size: 13px;
    margin-right: 5px
}
.pingLunImg>img{
    width: 100px;
    height: 100px;
}

</style>