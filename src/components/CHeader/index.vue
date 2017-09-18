<template>
  <div>
    <div class="header">
      <div>
        <a href="#/">首页</a>
        <a href="#/products/橱柜" @mouseover="showOrder" @mouseout="hideOrder">
          家具产品
          <Order :show="order" :form="false" class="menu"></Order>
        </a>
        <a href="#/cases">案例</a>
      </div>
      <a class="logo" href="#/"><img src="../../assets/logo_simplify.svg"></a>
      <div>
        <a href="#/craft">工艺</a>
        <a href="#/about">关于</a>
        <a class="admin" id="admin" @click="toggleSelect"><img src="./assets/images/admin.svg"></a>
      </div>
    </div>
    <Order :show="form" :form="true" class="menu"></Order>
  </div>
</template>

<script>
  import Order from '../Order'

  export default {
    name: 'header',
    components: {
      Order
    },

    methods: {
      showOrder () {
        this.form = false
        this.order = true
      },
      hideOrder () {
        this.order = false
      },
      toggleSelect () {
        this.order = false
        this.form = !this.form
      }
    },

    data () {
      return {
        order: false,
        form: false
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
    position: relative;
  }

  .header a {
    width: 88px;
    height: 100px;
    line-height: 100px;
    padding: 0 16px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
  }

  .logo {
    height: 75px;
  }

  .logo img {
    margin-top: 18px;
    width: 75px;
  }

  .admin img {
    width: 24px;
    height: 24px;
    margin-bottom: -5px;
  }

  .menu {
    top: 100px;
    left: 0;
    z-index: 9;
    position: absolute;
  }
</style>
