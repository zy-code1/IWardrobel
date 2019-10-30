<template>
  <div class="login">
          <div class="userImg">
              <img src="~assets/img/profile/avatar.svg" width="70px" height="70px">
          </div>
          <div class="userLogin">
              <div class="toLogin">登录/注册</div>
              <div class="phone"><img src="~assets/img/profile/phone.svg" width="20px" height="20px">
                  <span v-if="true">暂无绑定手机</span>
                  <span v-else>{{}}</span> 
              </div>
          </div>
          <div class="to">></div>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.login{
  background: hotpink;
  height: 90px;
  display:flex;
  color: wheat;
  font-weight: 700
}
.userImg{
    margin-left: 10px;
    padding-top: 10px;
}
.userLogin{
    text-align: center;
}
.toLogin{
    font-size: 23px;
    margin-top: 16px;
}
.phone{
    margin-top: 6px;
    font-weight: 500
}
.phone>img{
    margin-bottom: -4px
}
.to{
    font-size: 35px;
    padding-top: 7%;
    margin-left: 83px;
}
</style>