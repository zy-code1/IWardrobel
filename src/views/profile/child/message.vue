<template>
  <div class="message">
    <div>
      <img src="~assets/img/profile/message.svg" width="25px" height="25px" />
      <span>我的消息</span>
    </div>
    <div>
      <img src="~assets/img/profile/pointer.svg" width="25px" height="25px" />
      <span>积分商城</span>
    </div>
    <div>
      <img src="~assets/img/profile/vip.svg" width="25px" height="25px"/>
      <span>会员卡</span>
    </div>
    <div>
      <img src="~assets/img/profile/cart.svg" width="25px" height="25px"/>
      <span>我的购物车</span>
    </div>
    <div>
      <img src="~assets/img/profile/shopping.svg" width="25px" height="25px"/>
      <span>更多</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.message>div{
    margin-top: 15px;
    font-size: 17px;
    font-weight: 600
}
img{
  margin-bottom: -6px;
  margin-left: 10px
}
span{
    margin-left: 15px
}
</style>