<template>
  <div class="search">
    <input type="search" placeholder="搜索" class="search-input">
  </div>
</template>

<script>
export default {
  name:"Search"
}
</script>

<style>
  .search{
    width: 100%;
    height: 44px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-input{
    display: flex;
    width: 98%;
    height: 34px;
    border: 1px solid #ccc;
    border-radius: 10px; 
    padding: 0px 10px;
  }
  input::-webkit-input-placeholder{
    text-align: center;
    font-size: 14px;
  }
  input::-moz-placeholder{
    text-align: center;
    font-size: 14px;
  }
  input:-moz-placeholder{
    text-align: center;
    font-size: 14px;
  }
  input:-ms-input-placeholder{
    text-align: center;
    font-size: 14px;
  }
</style>