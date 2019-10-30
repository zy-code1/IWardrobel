<template>
    <div class="tabControl">
        <div class="tabControlItem" 
             v-for="(item,index) of title" :key="index"
             :class="{active:index===currentIndex}"
             @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            currentIndex:0
        }
    },
   props:{
       title:{
           type:Array
       }
   },
   methods: {
       itemClick(index){
           this.currentIndex=index
           this.$emit('changeItem',index)
       }
   },
}
</script>

<style scoped>
.tabControl{
    display: flex;
    text-align: center
}
.tabControlItem{
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 15px
}
span{
    padding: 5px
}
.active{
    color: var(--color-high-text)
}
.active span{
    border-bottom: 2px solid  #ff5777
}
</style>