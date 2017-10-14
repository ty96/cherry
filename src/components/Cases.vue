<template>
  <div>
    <CHeader></CHeader>
    <CTitle
      title="案例"
      desc="碧樱家具成功案例，让你感受不同的视觉盛宴"
    ></CTitle>
    <div class="cards">
      <a v-for="(item, index) in data" :href="'#/detail/' + item.cid" :key="index">
        <Card :data="item"></Card>
      </a>
      <Card v-if="data.length % 2" style="visibility: hidden"></Card>
    </div>
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
  import Card from './Card'
  import 'whatwg-fetch'
  import { root } from '../utils'

  export default {
    name: 'cases',

    components: {
      CHeader,
      CTitle,
      Creed,
      Sale,
      Shop,
      Wechat,
      Service,
      CFooter,
      Card
    },

    mounted () {
      this.request()
    },
    methods: {
      request () {
        fetch(`${root}client/caseIndex/`, {
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
        data: []
      }
    }
  }
</script>

<style scoped>
  .cards {
    padding: 30px 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 1366px) {
    .cards {
      padding: 30px 120px;
    }
  }
</style>
