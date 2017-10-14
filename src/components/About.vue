<template>
  <div>
    <CHeader></CHeader>
    <CTitle
      title="关于"
      desc="碧樱家具，真诚为您提供每一个细节服务"
    ></CTitle>
    <Creed :unique="true"></Creed>
    <Shop :unique="true"></Shop>
    <div class="desc ql-editor" v-html="data"></div>
    <Wechat :join="true"></Wechat>
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
  import 'whatwg-fetch'
  import { root } from '../utils'

  export default {
    name: 'hello',

    components: {
      CHeader,
      CTitle,
      Creed,
      Sale,
      Shop,
      Wechat,
      Service,
      CFooter
    },
    data () {
      return {
        data: ''
      }
    },
    mounted () {
      this.request()
    },
    methods: {
      request () {
        fetch(`${root}client/about/`, {
          method: 'GET',
          credentials: 'include'
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (!data.error) {
              this.data = data.body.body
            }
          })
      }
    }
  }
</script>

<style scoped>
  .desc {
    padding: 40px 150px;
  }

  @media (max-width: 1366px) {
    .desc {
      padding: 40px 120px;
    }
  }
</style>
