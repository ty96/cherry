<template>
  <div>
    <CHeader></CHeader>
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
      CFooter
    }
  }
</script>

<style>

</style>
