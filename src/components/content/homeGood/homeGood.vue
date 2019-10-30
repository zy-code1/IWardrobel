
<template>
    <div class="homeGood" >
        <div class="homeGoodItem" 
             v-for="(item,index) of goods" 
             :key="index"
             @click="toDatail(item)"
             >
             <img :src="item.show.img" @load="recount">
             <div class="goodText">
                 <p>{{item.title}}</p>
                 <span class="p1">￥{{item.price}}</span>
                 <span class="p2">{{item.cfav}}</span>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Array
        }
    },
    methods: {
        recount(){
            this.$bus.$emit('refresh')
        },
        toDatail(item){
            this.$router.push('/detail/'+item.iid)
    },
}
}
</script>

<style scoped>
.homeGood{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
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