<template>
  <div class="goods">
    <CHeader></CHeader>
    <div :style="{'opacity': base.price ? 1 : 0}" class="loading">
      <Show :base="base" :data="base"></Show>
      <Params :data="params"></Params>
      <div class="intro ql-editor" v-html="intro"></div>
      <Service :fix="true" :data="maintain"></Service>

      <h1>精选推荐</h1>
      <div class="items">
        <Item v-for="(item, index) in rec" :key="index" :data="item" v-if="index < 4"></Item>
      </div>
      <CFooter></CFooter>
    </div>
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
  import Item from './Item'
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
      Show,
      Item
    },

    data () {
      return {
        fid: this.$route.params.id,
        intro: '',
        params: {},
        maintain: {},
        base: {},
        rec: []
      }
    },

    mounted () {
      this.showDetail()
      this.showRec()
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
      },
      showRec () {
        fetch(`${root}client/furnitureRecommend/`, {
          method: 'GET',
          credentials: 'include'
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (!data.error) {
              this.rec = data.body
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

  .loading {
    transition: opacity 1s ease 0s;
  }

  h1 {
    color: #444444;
    font-size: 32px;
    text-align: center;
    padding: 72px 0 60px;
  }

  .items {
    padding: 0 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 1366px) {
    .intro {
      padding: 40px 120px;
    }
  }
</style>
