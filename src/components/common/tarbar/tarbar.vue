<template>
    <div class="tab-bar">
       <slot></slot>  
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.tab-bar{
  background-color: rgba(250, 253, 253, 0.945);
  box-shadow: 0 -2px 1px rgba(0,0,0,.1);
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>