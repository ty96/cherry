<template>
  <div>
    <CHeader></CHeader>
    <CTitle
      title="人才招聘"
      desc="招聘优秀人才，让碧樱家居不断成长"
    ></CTitle>
    <Recruit v-for="(item, index) in data" :data="item" :pink="index % 2" :id="item.id" :key="index" v-if="item.name"></Recruit>
    <CFooter></CFooter>
  </div>
</template>

<script>
  import CHeader from './CHeader'
  import CTitle from './CTitle'
  import Creed from './Creed'
  import Sale from './Sale'
  import Shop from './Shop'
  import Wechat from './Wechat'
  import Service from './Service'
  import CFooter from './CFooter'
  import Recruit from './Recruit'
  import 'whatwg-fetch'
  import { root } from '../utils'

  export default {
    name: 'join',
    components: {
      CHeader,
      CTitle,
      Creed,
      Sale,
      Shop,
      Wechat,
      Service,
      CFooter,
      Recruit
    },
    data () {
      return {
        data: []
      }
    },
    mounted () {
      this.request()
    },
    methods: {
      request () {
        fetch(`${root}client/recruitment/`, {
          method: 'GET',
          credentials: 'include'
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            this.data = data.body
          })
      }
    }
  }
</script>

<style>

</style>
