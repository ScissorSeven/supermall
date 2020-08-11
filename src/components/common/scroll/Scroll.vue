<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      
    },
    data() {
      return {
        scroll: null,
        message: '哈哈哈'
      }
    },

    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: true
      })
    },
    methods: {
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
