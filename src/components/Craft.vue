<template>
  <div>
    <CHeader></CHeader>
    <CTitle
      title="工艺"
      desc="来自樱桃家具的工艺保证，还原最优质实木体验"
    ></CTitle>
    <Wood></Wood>
    <Material :data="data.accessoryDetail"></Material>
    <CStyle></CStyle>
    <Shot :images="data.craftShot" title="工艺实拍" :desc="desc"></Shot>
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
  import CStyle from './CStyle'
  import Wood from './Wood'
  import Shot from './Shot'
  import Material from './Material'
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
      CFooter,
      CStyle,
      Wood,
      Shot,
      Material
    },
    mounted () {
      this.request()
    },
    methods: {
      request () {
        fetch(`${root}client/accessoryDetail/`, {
          method: 'GET',
          credentials: 'include'
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (!data.error) {
              this.data = data.body
            }
          })
      }
    },

    data () {
      return {
        order: false,
        data: {}
      }
    }
  }
</script>

<style scoped>

</style>
