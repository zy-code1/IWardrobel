<template>
    <div class="homeGood" >
        <div class="homeGoodItem" 
             v-for="(item,index) of recommend" 
             :key="index"
             @click="toDatail(item)"
             >
             <img :src="item.image" @load="recount">
             <div class="goodText">
                 <p>{{item.title}}</p>
                 <span class="p1">￥{{item.discountPrice}}</span>
                 <span class="p2">{{item.cfav}}</span>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        recommend:{
            type:Array
        }
    },
    methods: {
        recount(){
            //this.$bus.$emit('refresh') 事件总线￥$bus向外触发refresh
            this.$emit('recommendRefresh')
        },
        /*toDatail(item){
            this.$router.push('/detail/'+item.iid)
    },*/
}
}
</script>

<style scoped>
.homeGood{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    position: relative;
    z-index: 10;
    margin-top: 50px
}
.homeGoodItem{
    width: 48%
}
.homeGoodItem img{
    border-radius: 5px;
    width: 100%
}
.goodText{
    text-align: center;
    font-size: 12px;
}
.goodText p{
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
}
.goodText span{
    font-size: 16px
}
.p1{
    color: hotpink
}

.p2::before{
    content: '☆';
    width: 14px;
    height: 14px;
}
</style>