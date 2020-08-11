<template>
  <div class="cartbottom">
    <div class="item">
      <div class="left">
          <input type="checkbox" :checked="isSelectAll" @click="isSelect()">
          <p>全选</p>
      </div>
      <div class="right">
        <div>合计：<p>￥{{totalprice}}</p></div>
        <p>包含运费</p>
      </div>
    </div>
    <div class="buttom">结算({{totalcommit}})</div>
  </div>
</template>

<script>
export default {
  name:"cartbottom",
  props:{
    cartList:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {
      // totalcommit:0
    }
  },
  computed:{
    //选中状态
    isSelectAll(){
      return this.$store.state.isSelectAll
    },
    //总价
    totalprice(){
      return this.$store.state.totalprice
    },
    //总数
    totalcommit(){
      return this.$store.state.totalcommit
    }
  },
  methods:{
    isSelect(){
      //切换选中状态
      this.$store.state.isSelectAll=!this.$store.state.isSelectAll;
      //通过全选按钮的选中改变商品列表选中状态
      this.$store.commit('isSelect');
      //计算总价格
      this.$store.commit('total');
    }
  }
}
</script>

<style scoped>
  .cartbottom{
    width: 100%;
    height: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    background-color: #fff;
  }
  .item{
    display: flex;
    flex: 8;
    justify-content: space-between;
    align-items: center;
  }
  .left{
    display: flex;
    flex: 4;
    justify-content:flex-start;
    align-items: center;
  }
  .left input{
    width: 20px;
    height: 20px;
  }
  .left p{
    margin: 0;
  }
  .right{
    display: flex;
    height: 49px;
    flex: 8;
    flex-direction: column;
    justify-content: center;
    align-items:flex-end;
    padding-right: 3px;
  }
  .right div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right div>p{
    color: red;
    font-size: 18px;
    font-weight: 700;
  }
  .right p{
    margin: 0;
  }
  .buttom{
    display: flex;
    flex: 4;
    height: 100%;
    background-color: red;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
  }
</style>