<template>
  <div class="cartItem">
      <div class="listItem" v-for="(item,index) of cartGood" :key="index">
          <div class="btn"><radio :isactive="item.checked" @click.native="btnClick(item)"></radio></div>
          <div class="topImage"><img :src="item.topimage[0]"></div>
          <div>
              <div class="title"><strong>{{item.title}}</strong></div>
              <div class="pc"><span class="price">{{item.price}}</span><span class="count">x{{item.count}}</span></div>
          </div>
      </div>
  </div>
</template>

<script>
import radio from './radio.vue'
export default {
    data() {
        return {
        }
    },
    props:{
        cartGood:{
            type:Object
        }
    },
    components:{
        radio
    },
    methods: {
        btnClick(item){
            item.checked=!item.checked
        }
    },
}
</script>

<style scoped>
.listItem{
    display: flex;
    margin-top: 5px
}
.topImage>img{
    width: 80px;
    height: 100px
}
.btn{
    padding-top: 36px
}
.title{
    margin:10px 0 0 13x;
    width:200px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
}
.pc{
    margin: 40px 0 0 14px
}
.count{
    margin: 0 0 0 54px;
}
</style>