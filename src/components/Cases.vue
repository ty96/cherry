<template>
  <div>
    <CHeader @showOrder="showOrder"></CHeader>
    <Order :show="order" :form="true"></Order>
    <CTitle
      title="案例"
      desc="樱桃家具成功案例，让你感受不同的视觉盛宴"
    ></CTitle>
    <div class="cards">
      <a v-for="(item, index) in data" :href="'#/detail/' + item.id" :ket="index">
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
  import Order from './Order'

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
      Card,
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
        data: [
          {
            labels: [
              '简美',
              '大户型',
              '衣帽间',
              '浴室柜',
              '吧台'
            ],
            desc: '以白色为之,再搭配少部分小面积亮眼的颜色,兼顾了整体观感和谐,又不会显得寡淡',
            title: '实木的优雅简美风',
            image_cover: 'http://toxni.com/content/images/2017/07/--.png',
            cid: 2
          },
          {
            labels: [
              '简美',
              '大户型',
              '衣帽间',
              '浴室柜',
              '吧台'
            ],
            desc: '以白色为之,再搭配少部分小面积亮眼的颜色,兼顾了整体观感和谐,又不会显得寡淡',
            title: '实木的优雅简美风',
            image_cover: 'http://toxni.com/content/images/2017/07/--.png',
            cid: 2
          },
          {
            labels: [
              '简美',
              '大户型',
              '衣帽间',
              '浴室柜',
              '吧台'
            ],
            desc: '以白色为之,再搭配少部分小面积亮眼的颜色,兼顾了整体观感和谐,又不会显得寡淡',
            title: '实木的优雅简美风',
            image_cover: 'http://toxni.com/content/images/2017/07/--.png',
            cid: 2
          },
          {
            labels: [
              '简美',
              '大户型',
              '衣帽间',
              '浴室柜',
              '吧台'
            ],
            desc: '以白色为之,再搭配少部分小面积亮眼的颜色,兼顾了整体观感和谐,又不会显得寡淡',
            title: '实木的优雅简美风',
            image_cover: 'http://toxni.com/content/images/2017/07/--.png',
            cid: 2
          },
          {
            labels: [
              '简美',
              '大户型',
              '衣帽间',
              '浴室柜',
              '吧台'
            ],
            desc: '以白色为之,再搭配少部分小面积亮眼的颜色,兼顾了整体观感和谐,又不会显得寡淡',
            title: '实木的优雅简美风',
            image_cover: 'http://toxni.com/content/images/2017/07/--.png',
            cid: 2
          },
          {
            labels: [
              '简美',
              '大户型',
              '衣帽间',
              '浴室柜',
              '吧台'
            ],
            desc: '以白色为之,再搭配少部分小面积亮眼的颜色,兼顾了整体观感和谐,又不会显得寡淡',
            title: '实木的优雅简美风',
            image_cover: 'http://toxni.com/content/images/2017/07/--.png',
            cid: 2
          },
          {
            labels: [
              '简美',
              '大户型',
              '衣帽间',
              '浴室柜',
              '吧台'
            ],
            desc: '以白色为之,再搭配少部分小面积亮眼的颜色,兼顾了整体观感和谐,又不会显得寡淡',
            title: '实木的优雅简美风',
            image_cover: 'http://toxni.com/content/images/2017/07/--.png',
            cid: 2
          }
        ]
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
</style>
