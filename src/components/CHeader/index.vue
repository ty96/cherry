<template>
  <div class="header">
    <div>
      <a href="#/">首页</a>
      <a href="#/products">家具产品</a>
      <a href="#/cases">案例</a>
    </div>
    <a class="logo" href="#/"><img src="../../assets/logo.png"></a>
    <div>
      <a href="#/craft">工艺</a>
      <a href="#/about">关于</a>
      <a class="admin" @click="showOrder"><img src="./assets/images/admin.svg"></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',

    methods: {
      showOrder () {
        this.order = !this.order
        this.$emit('showOrder', this.order)
      }
    },

    data () {
      return {
        order: false
      }
    },

    created () {
      window.scrollTo(0, 0)
    }
  }
</script>

<style scoped>
  .header {
    height: 100px;
    padding: 0 70px;
    font-size: 18px;
    color: #636363;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header a {
    width: 80px;
    margin: 0 20px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
  }

  .logo {
    height: 75px;
  }

  .admin img {
    width: 24px;
    height: 24px;
  }
</style>
