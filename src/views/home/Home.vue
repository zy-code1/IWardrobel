<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :title="['流行','新款','精选']" 
                   @changeItem="changeItem" 
                   ref="tabControl1"
                   :class="{isFixed:istabFixed}"/>
    <better-scroll class="better-scroll"
                   ref="bsll"
                   @scroll="scroll"
                   @pullingUp="pullingUp"
                   :pullUpLoad="true">
      <main-swiper :banner="banner" class="home-swiper" @swiperLoad="swiperLoad"></main-swiper>
      <recommend :recommend="recommend"></recommend>
      <only-img />
      <tab-control :title="['流行','新款','精选']" 
                   @changeItem="changeItem" 
                   ref="tabControl2"/>
      <home-good :goods="goods[currentType].list" />
    </better-scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import navBar from "components/common/navbar/navbar.vue";
import tabControl from "components/content/tabControl/tabControl.vue";
import homeGood from "components/content/homeGood/homeGood.vue";
import betterScroll from "components/common/betterscroll/betterscroll.vue";
import backTop from "components/content/backtop/backtop.vue";

import mainSwiper from "./children/mainSwiper";
import recommend from "./children/recommend";
import onlyImg from "./children/onlyimg";

import {getHomeData, getHomeGood } from "network/home.js";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow:false,
      istabFixed:false,
      offsetTop:null
    };
  },
  components: {
    navBar,
    tabControl,
    homeGood,
    betterScroll,
    backTop,
    mainSwiper,
    recommend,
    onlyImg
  },
  //create dom未加载
  created() {
    this.getHomeData();
  },
  mounted() {
    this.getHomeGood("pop");
    this.getHomeGood("new");
    this.getHomeGood("sell");
     //@load=“方法”监听每张图片加载，然后每次刷新scroll对象重新计算可滚动高度，
     //通过创建$bus这个vue实例，事件总线从很远的组件传事件来home.vue,在这里拿到scroll组件对象，刷新scroll实例
    this.$bus.$on('refresh',()=>{
      this.$refs.bsll.scroll.refresh()
    })
  },
  methods: {
    //请求轮播图和其下面的数据的方法
    getHomeData() {
      getHomeData().then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    //请求大量商品数据的方法
    getHomeGood(type) {
      const page = this.goods[type].page + 1;
      getHomeGood(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        //让scroll调用一次finshPullUp，才能进行下一次上拉加载数据
        this.$refs.bsll.scroll.finishPullUp()
      });
    }, 
    //点击通过switch切换精选 流行 等
    changeItem(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex=index
      this.$refs.tabControl2.currentIndex=index
    },
    //.native使组件能够触发点击事件，返回顶部,
    //设置ref属性可以获得元素对象或者组件对象（可以获得组件中的属性和方法）
    backClick(){
     this.$refs.bsll.scroll.scrollTo(0,0,500)
    },
    //从子组件emit过来的，当滚动y小于-1000，隐藏backtop
    scroll(position){
      this.isShow=position.y<-1000
      this.istabFixed=-this.$refs.bsll.scroll.y>this.offsetTop
    },
    //从子组件emit过来的，加载更多的数据,currentType是switch中根据点击的pop new sell
    pullingUp(){
      this.getHomeGood(this.currentType)
    },
    swiperLoad(){
      this.offsetTop=this.$refs.tabControl2.$el.offsetTop
    }
   
  }
};
</script>

<style scoped>
.home{
  position: relative;
}
.home-nav{
   background: var(--color-tint);
   box-shadow: 0 1px 1px #ff577f;
   color: white;
}
.home-swiper {
  margin-top: 44px;
}

.better-scroll{
  overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
.isFixed{
  position: relative;
  z-index: 9;
  background: white
}
</style>
