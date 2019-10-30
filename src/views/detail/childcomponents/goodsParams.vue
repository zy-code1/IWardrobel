<template>
  <div class="goodsParams">
      <header class="header">产品参数</header>
      <div v-for="(item,index) of goodsParams" :key="'infoA-'+index" class="params">
          <span>{{item.key+'=>'}}</span>
          <span>{{item.value}}</span>
      </div>
      <br>
      <div class="header1">以上尺寸为实物人工测量，因测量当时不同会有1-2cm误差，相关数据仅作参考，以收到实物为准。</div>
      <hr>
      <header class="header">尺码说明</header>
      <div v-for="(list,index) of rule" :key="'infoB-'+index" class="rule">
          <span v-for="(item,index) of list" :key="'infoC-'+index">{{item+'/'}}</span>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    goodsParams:{
        type:Array
    },
    rule:{
        type:Array
    }
  }
}
</script>

<style scoped>
.header{
    text-align: center;
    font-size: 20px;
    margin-top: 8px;
    color: hotpink
}

.goodsParams{
    margin-top: 15px
}
.params{
    font-size: 12px;
    margin-top: 10px
}
.header1{
    font-size: 10px;
    color: red
}
.rule{
    margin-top: 10px
}
.rule>span{
    margin-right: 10px
}
</style>