<template>
  <div class="goodsMes">
      <div class="title">{{title}}</div>
      <div class="price">
          <span class="s1">{{price}}</span>
          <span class="s2">{{oldPrice}}</span>
          <strong>{{discountDesc}}</strong>
      </div>
      <div class="num">
          <span>{{columns[0]}}</span>
          <span>{{columns[1]}}</span>
          <span class="s3">退货补运费</span>
      </div>
      <hr>
      <div class="kuaiDi">
          <span>7天无理由退货</span>
          <span class="s4">72小时发货</span>
      </div>
      <hr>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String
        },
        oldPrice:{
            type:String,
        },
        price:{
            type:String
        },
        discountDesc:{
            type:String
        },
        columns:{
            type:Array
        }
    },
}
</script>

<style scoped>
.title{
    color: black;
    margin: 10px 0 0 0;
    font-size: 15px
}
.price{
    margin: 10px 0 0 0;
}
.s1{
    font-size: 20px;
    margin-left: 5px;
    color: hotpink
}
.s2{
    font-size: 13px;
    margin-left: 8px;
    text-decoration: line-through
}
strong{
    background: #f13e3a;
    border-radius: 10px;
    font-size: 15px;
    position: relative;
    top: -5px
}
.num{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 10px
}
.num span{
    flex: 1
}
.s3{
    text-align: right
}
.kuaiDi{
    display: flex;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.kuaiDi span{
    flex: 1;
    justify-content: space-between;
    color: black
}
.s4{
    text-align: right
}
</style>