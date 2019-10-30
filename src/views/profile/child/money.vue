<template>
  <div class="money">
      <div>
          <div>0.00元</div>
          <div>余额</div>
      </div>
      <div>
          <div>0个</div>
          <div>优惠</div>
      </div>
      <div>
          <div>0分</div>
          <div>积分</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.money{
    display: flex;
    justify-content:space-around;
    text-align: center;
    height: 70px;
    line-height: 35px;
    border-bottom: 1px solid gray; 
}
.money>div{
    flex: 1;
}
</style>