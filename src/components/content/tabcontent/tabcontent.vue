<template>
  <div class="tabcontent">
    <!-- <tabcontentitem v-for="(item,index) in tabcontent" :key="index" :tabcontentitem="item"/> -->
    <tabcontentitem  :tabcontentitem="tabcontent"/>
  </div>
</template>

<script>
import tabcontentitem from "./tabcontentitem.vue";
export default {
  name:"tabcontent",
  components:{
    tabcontentitem
  },
  props:{
    tabcontent:{
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
  .tabcontent{
    width: 100%;
  }
</style>