<template>
<div class="detail">
  <denav-bar ref="navbar" @titleClick="titleClick"></denav-bar>
  <better-scroll class="bs" @scroll="scroll" ref='bscroll'>
    <detail-swiper :topImage="topImage" class="detailSwiper"></detail-swiper>
    <goods-mes :title="title" :oldPrice="oldPrice"
             :price="price" :discountDesc="discountDesc"
             :columns="columns">
    </goods-mes>
    <shop-info :name="name"
             :shopLogo="shopLogo" :cGoods="cGoods"
             :cSells="cSells" :score="score"
             :shopUrl="shopUrl">
    </shop-info>
    <hr>
    <br>
    <img v-for="(item,index) of detailImage" :key="index" :src="item" width="100%" @load="imgLoad">
    <goods-params :goodsParams="goodsParams" :rule="rule" ref="goodsparams"></goods-params>
    <br>
    <hr ref="pinglun">
    <ping-lun :pingLun="pingLun"></ping-lun>
    <copy-home-good :recommend="recommend" ref="copyhomegood"
                    @recommendRefresh="recommendRefresh">
    </copy-home-good>
  </better-scroll>
  <toast class="toast"  v-show="isShow"></toast>
  <insert-cart :cartGood="cartGood" @toastShow="toastShow(res)"></insert-cart>
</div>
</template>

<script>
import betterScroll from 'components/common/betterscroll/betterscroll.vue'
import toast from 'components/content/toast/toast.vue'

import denavBar from './childcomponents/navbar.vue'
import detailSwiper from './childcomponents/detailswiper.vue'
import goodsMes from './childcomponents/goodsMes.vue'
import shopInfo from './childcomponents/shopInfo.vue'
import goodsParams from './childcomponents/goodsParams.vue'
import pingLun from './childcomponents/pingLun.vue'
import copyHomeGood from './childcomponents/copyHomeGood.vue'
import insertCart from './childcomponents/insertCart.vue'

import {getDetailData,getRecommend} from 'network/detail.js'
import {cartGood} from 'common/cartGood.js'

export default {
    name:"Detail",
    data() {
        return {
            scrollToWhere:[],
            currentIndex:null,
            iid:null,
            topImage:[],
            title:null,
            oldPrice:null,
            price:null,
            lowPrice:null,
            discountDesc:null,
            columns:[],
            name:null,
            shopLogo:null,
            cGoods:null,
            cSells:null,
            score:[],
            shopUrl:null,
            detailImage:[],
            goodsParams:[],
            rule:[],
            pingLun:{},
            recommend:[],
            cartGood:{},
            checked:'true',
            message:null,
            isShow:flase
        }
    },
    components:{
        denavBar,
        detailSwiper,
        goodsMes,
        shopInfo,
        betterScroll,
        goodsParams,
        pingLun,
        copyHomeGood,
        insertCart,
        toast
    },
    //请求数据
  created() {
      this.iid=this.$route.params.iid
      getDetailData(this.iid).then(res=>{
          this.topImage=res.data.result.itemInfo.topImages
          this.title=res.data.result.itemInfo.title
          this.oldPrice=res.data.result.itemInfo.oldPrice
          this.price=res.data.result.itemInfo.price
          this.lowPrice=res.data.result.itemInfo.lowNowPrice
          this.discountDesc=res.data.result.itemInfo.discountDesc
          this.columns=res.data.result.columns
          this.name=res.data.result.shopInfo.name
          this.shopLogo=res.data.result.shopInfo.shopLogo
          this.cGoods=res.data.result.shopInfo.cGoods
          this.cSells=res.data.result.shopInfo.cSells
          this.score=res.data.result.shopInfo.score
          this.shopUrl=res.data.result.shopInfo.shopUrl
          this.detailImage=res.data.result.detailInfo.detailImage[0].list
          this.goodsParams=res.data.result.itemParams.info.set
          this.rule=res.data.result.itemParams.rule.tables[0]
          this.pingLun=res.data.result.rate.list[0]
          this.cartGood=new cartGood(this.iid,this.title,this.lowPrice,this.topImage,this.checked)
      }),
      getRecommend().then(res=>{
          this.recommend=res.data.data.list
      })
  },
  methods: {
      //监听图片加载，@load从而刷新scroll的可滚动高度
      imgLoad(){
          this.$refs.bscroll.scroll.refresh()   
          this.scrollToWhere=[]
          this.scrollToWhere.push(0)
          this.scrollToWhere.push(this.$refs.goodsparams.$el.offsetTop)
          this.scrollToWhere.push(this.$refs.pinglun.offsetTop)
          this.scrollToWhere.push(this.$refs.copyhomegood.$el.offsetTop)
          this.scrollToWhere.push(1000000)

      },
      recommendRefresh(){
          this.$refs.bscroll.scroll.refresh()  
      },
      //点击跳到相应的位置
      titleClick(index){
          this.$refs.bscroll.scroll.scrollTo(0,-this.scrollToWhere[index],100)
      },
      //滑动改便相应的参数推荐评论 方法往数组末尾中加入一个很大的值
      scroll(position){
          var y=-position.y
          for(let i=0;i<this.scrollToWhere.length;i++){
              if(y>=this.scrollToWhere[i] && y<this.scrollToWhere[i+1]){
                  this.$refs.navbar.currentIndex=i
              }
          }
      },
      //显示toast 冒个气
    //   toastShow(res){
    //       this.message=res;
    //       this.isShow=true;
    //       setTimeout(()=>{
    //           this.isShow=flase;
    //           this.message=''
    //       },1000)
    //   }
  },
}
</script>

<style scoped>

.detailSwiper{
    height: 300px;
}
.bs{
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 10;
    background: white
}
.toast{
    background: red;
    position: fixed;
    top: 44%;
    left: 50px;
    width: 205px;
    height: 51px;
    z-index: 30;
}
</style>