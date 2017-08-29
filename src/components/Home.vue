<template>
  <div>
    <CHeader @showOrder="showOrder"></CHeader>
    <Order :show="order" :form="true"></Order>
    <Banner></Banner>
    <Creed></Creed>
    <Sale></Sale>
    <Shop></Shop>
    <Wechat></Wechat>
    <Service></Service>
    <CFooter></CFooter>
  </div>
</template>

<script>
  import CHeader from './CHeader'
  import Banner from './Banner'
  import Creed from './Creed'
  import Sale from './Sale'
  import Shop from './Shop'
  import Wechat from './Wechat'
  import Service from './Service'
  import CFooter from './CFooter'
  import Order from './Order'

  export default {
    name: 'hello',

    components: {
      CHeader,
      Banner,
      Creed,
      Sale,
      Shop,
      Wechat,
      Service,
      CFooter,
      Order
    },

    methods: {
      showOrder (bool) {
        this.order = bool
      }
    },

    data () {
      return {
        order: false,
        select: false
      }
    }
  }
</script>

<style>

</style>
