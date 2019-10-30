<template>
  <div id="app">
  <main-tar-bar/>
  <keep-alive exclude="Detail"><router-view/></keep-alive>
  </div>
</template>

<script>
import mainTarBar from 'components/content/mainTarbar/mainTarbar.vue'
export default {
  components:{
    mainTarBar
  }
}
</script>

<style>
 @import 'assets/css/base.css'
</style>
