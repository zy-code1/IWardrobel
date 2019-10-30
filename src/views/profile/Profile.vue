<template>
  <div class="profile">
    <nav-bar class="navbar"><div slot="center">我的档案</div></nav-bar>
    <login></login>
    <money></money>
    <message></message>
    
  </div>
</template>

<script>
  import navBar from 'components/common/navbar/navbar.vue'

  import login from './child/login.vue'
  import message from './child/message.vue'
  import money from './child/money.vue'

  export default {
    name: "Profile",
    components:{
      navBar,
      login,
      message,
      money
    }
  }
</script>

<style scoped>
.navbar{
  background: hotpink;
  color: azure;
}
</style>
