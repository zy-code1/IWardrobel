<template>
  <div class="shopInfo">
      <div class="shop">
          <img :src="shopLogo">
          <span>{{name}}</span>
      </div>
      <div class="detail">
          <div class="left">
              <div><span class="s4">{{cSells}}</span><br><br><span>总销量</span></div>
              <div><span class="s5">{{cGoods}}</span><br><br><span>全部宝贝</span></div>
          </div>
          <div class="right">
              <div>
                  <span>{{score[0].name+':'}}</span>
                  <span :class="{active:score[0].isBetter}">{{score[0].score}}</span>
                  <span class="high" v-if="score[0].isBetter">高</span>
                  <span class="low" v-else>低</span>
              </div>
              <div>
                  <span>{{score[1].name+':'}}</span>
                  <span :class="{active:score[1].isBetter}">{{score[1].score}}</span>
                  <span class="high"  v-if="score[1].isBetter">高</span>
                  <span class="low" v-else>低</span>
              </div>
              <div>
                  <span>{{score[2].name+':'}}</span>
                  <span :class="{active:score[2].isBetter}">{{score[2].score}}</span>
                  <span class="high"  v-if="score[2].isBetter">高</span>
                  <span class="low" v-else>低</span>
              </div>
          </div>
      </div>
      <div class="enter"><a :href="shopUrl">进店逛逛</a></div>
  </div>
</template>

<script>
export default {
props:{
    name:{
      type:String,
    },
    shopLogo:{
      type:String
    },
    cGoods:{
      type:Number      
    },
    cSells:{
      type:Number
    },
    score:{
      type:Array
    },
    shopUrl:{
      type:String
    }
},
}
</script>

<style scoped>
.shopInfo{
    margin-top: 15px
}
.shop>img{
    border-radius: 170px;
    width: 50px;
    height: 50px;
    margin-left: 10px
}
.shop>span{
    font-size: 15px;
    position: relative;
    top: -23px;
    left: 9px
}
.detail{
    height: 100px;
    display: flex;
    justify-content:space-around;
    margin-top: 20px
}
.left,.right{
    flex: 1;
}
.left{
    display: flex
}
.left>div{
    flex: 1;
    font-size: 13px;
    margin-top: 10px;
    margin-left: 14px
}

.right{
  font-size: 14px;
  height: 80px;
  
}
.right>div{
    margin-bottom: 10px;
    margin-left: 10px
}
.active{
    color: hotpink
}
.high{
    background: hotpink;
    color: white
}
.low{
    background: green;
    color:honeydew
}
.enter{
    text-align: center;
    width: 100px;
    margin-left: 105px;
    border-radius: 5px;
    background: rgba(126, 117, 117, 0.5)
}

</style>