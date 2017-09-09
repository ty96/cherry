<template>
  <div class="goods">
    <CHeader></CHeader>
    <Show :base="base" :data="base"></Show>
    <Params :data="params"></Params>
    <div class="intro" v-html="intro"></div>
    <Service :fix="true" :data="maintain"></Service>
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
  import Shot from './Shot'
  import Params from './Params'
  import Show from './Show'
  import 'whatwg-fetch'
  import { root } from '../utils'

  export default {
    name: 'goods',

    components: {
      CHeader,
      CTitle,
      Creed,
      Sale,
      Shop,
      Wechat,
      Service,
      CFooter,
      Shot,
      Params,
      Show
    },

    data () {
      return {
        fid: this.$route.params.id,
        intro: '',
        params: {},
        maintain: {},
        base: {}
      }
    },

    mounted () {
      this.showDetail()
    },

    methods: {
      showDetail () {
        fetch(`${root}client/furnitureDetail/?fid=${this.fid}`, {
          method: 'GET',
          credentials: 'include'
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (!data.error) {
              this.base = data.body.base
              this.params = data.body.params
              this.intro = data.body.detail
              this.maintain = data.body.maintain
            }
          })
      }
    }
  }
</script>

<style scoped>
  .intro {
    padding: 40px 150px;
  }

  @media (max-width: 1366px) {
    .intro {
      padding: 40px 120px;
    }
  }
</style>
