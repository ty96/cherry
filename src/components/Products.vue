<template>
  <div>
    <CHeader></CHeader>
    <CTitle
      title="家具产品"
      desc="源自樱桃木的魅力，展现真实木质纹理效果"
    ></CTitle>
    <div
      class="items"
      :class="{'pink': !(i % 2)}"
      v-for="i in 4"
      :style="{
        'padding-top': i - 1 ? 0 : '30px',
        'padding-bottom': i - 4 ? 0 : '30px'
      }"
    >
      <a v-for="(item, index) in data.slice(i * 4 - 4, i * 4)" :href="'#/goods/' + item.id" :key="index"><Item :data="item"></Item></a>
      <template v-if="data.slice(i * 4 - 4, i * 4).length % 4">
        <Item class="blank" v-if="data.slice(i * 4 - 4, i * 4).length % 4 <= 3"></Item>
        <Item class="blank" v-if="data.slice(i * 4 - 4, i * 4).length % 4 <= 2"></Item>
        <Item class="blank" v-if="data.slice(i * 4 - 4, i * 4).length % 4 <= 1"></Item>
      </template>
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
  import Item from './Item'

  export default {
    name: 'products',
    components: {
      CHeader,
      CTitle,
      Creed,
      Sale,
      Shop,
      Wechat,
      Service,
      CFooter,
      Item
    },
    data () {
      return {
        order: false,
        data: [
          {
            fid: 123,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          },
          {
            fid: 423,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          },
          {
            fid: 423,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          },
          {
            fid: 423,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          },
          {
            fid: 423,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          },
          {
            fid: 423,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          },
          {
            fid: 423,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          },
          {
            fid: 423,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          },
          {
            fid: 423,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          },
          {
            fid: 423,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          },
          {
            fid: 423,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          },
          {
            fid: 423,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          },
          {
            fid: 423,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          },
          {
            fid: 423,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          },
          {
            fid: 423,
            image: 'http://toxni.com/content/images/2017/07/--.png',
            price: '￥666.02',
            name: '黑凤梨 原素系列柜式实木茶几',
            intro: '山形木纹，经典优雅'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .items {
    padding: 0 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  .blank {
    height: 1px;
    margin: 0 !important;
    visibility: hidden;
  }

  .pink {
    background: #fef5f5;
  }

  @media (max-width: 1366px) {
    .items {
      padding: 0 120px;
    }
  }
</style>
