<template>
  <div>
    <CHeader></CHeader>
    <CTitle
      :height="360"
      :unique="true"
      :title="data.title"
      :esc="data.desc1"
    ></CTitle>
    <p class="desc">{{data.desc2}}</p>
    <div class="house">
      <img :src="data.house && data.house.image">
      <div>
        <h2>客户户型</h2>
        <p>{{data.house && data.house.desc}}</p>
      </div>
    </div>
    <h1>细节定制 & 实例</h1>
    <Shot
      v-for="(item, index) in (data.instances || [])"
      :key="index"
      :images="item.images"
      :small="true"
      :title="item.title"
      :price="item.price"
      :info="item.price_desc"
      :desc="item.desc"
    ></Shot>
    <h1>樱桃建议</h1>
    <p class="advise">{{data.advise}}</p>
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
      Shot
    },
    mounted () {
      this.request()
    },
    methods: {
      request () {
        fetch(`${root}client/caseDetail/?cid=${this.$route.params.id}`, {
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
        data: {}
      }
    }
  }
</script>

<style scoped>
  .desc {
    font-size: 16px;
    width: 640px;
    text-align: center;
    margin: 80px auto;
    color: #636363;
  }

  h1 {
    font-size: 28px;
    padding: 30px 150px;
  }

  .house {
    margin: 60px 150px;
  }

  .house img {
    flex: 0;
    width: 360px;
    height: 360px;
    display: inline-block;
    vertical-align: top;
    margin-right: 120px;
  }

  .house > div {
    display: inline-block;
    vertical-align: top;
  }

  .house h2 {
    color: #444;
    font-size: 28px;
  }

  .house p {
    text-indent: 2em;
  }

  .advise {
    color: #999;
    font-size: 16px;
    text-indent: 2em;
    margin: 10px 150px 60px;
  }

  @media (max-width: 1366px) {
    h1 {
      padding: 30px 120px;
    }

    .house {
      margin: 60px 120px;
    }
  }
</style>
