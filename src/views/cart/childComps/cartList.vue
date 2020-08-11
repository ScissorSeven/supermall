<template>
<div>
  <div class="cartList" v-for="(item,index) in cartList" :key="index">
    <div class="select">
      <input type="checkbox" :checked="item.checked" @click="checked(item.cid)">
    </div>
    <div class="cartitem">
      <div class="left"><img :src="item.img" alt=""></div>
      <div class="right">
        <p>{{item.name}}</p>
        <div class="bottom">
          <p>￥{{item.price}}</p>
          <div>
            <button @click="subtract(item.cid)" :disabled="item.commit==0">-</button>
            <span>{{item.commit}}</span>
            <button @click="plus(item.cid)" :disabled="item.commit==50">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name:"cartList",
  props:{
    cartList:{
      type:Array,
      default() {
        return []
      }
    }
  },
  methods:{
    checked(cid){
      //点击单选框更改状态
      this.$store.commit('checked', cid);
      //计算总价格
      this.$store.commit('total');
      //点击更改全选按钮状态
      this.$store.commit('selectAll');
    },
    subtract(cid){
      //数量减
      this.$store.commit('subtract',cid);
      //再次计算总价格
      this.$store.commit('total');
      //判断是否删除商品
      this.$store.commit('delete',cid);
    },
    plus(cid){
      //数量加
      this.$store.commit('plus',cid);
      //再次计算总价格
      this.$store.commit('total');
    }
  }
}
</script>

<style scoped>
  .cartList{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0px;
    border-bottom: 1px solid #ccc;
  }
  .select{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .select input{
    width: 18px;
    height: 18px;
  }
  .cartitem{
    display: flex;
    flex: 11;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .left{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 4;
    height: 100%;
  }
  .left img{
    height: 100%;
  }
  .right{
    display: flex;
    flex: 8;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .right p{
    margin: 5px 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 16px;
    width: 100%;
  }
  .bottom{
    display: flex;
    width: 100%;
    justify-content:space-between;
    align-items: center;
  }
  .bottom p{
    color: red;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    width: 50%;
    padding: 5px 0px;
  }
  .bottom div{
    width: 40%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button{
    width: 25px;
    height: 25px;
    margin: 0px 5px;
  }
</style>