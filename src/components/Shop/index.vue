<template>
  <div class="shop" :class="{'pink': unique}">
    <div class="address">
      <h1>家具体验馆</h1>
      <template v-if="!unique">
        <p>四川省成都市武侯区七里大道红星欧力洛雅3楼C8075（营业时间：10:00-18:30）</p>
        <a href="#/about"><CButton text="详情" class="more"></CButton></a>
      </template>
      <template v-else="!unique">
        <p class="info">地址：四川省成都市武侯区七里大道红星欧力洛雅3楼C8075</p>
        <p>营业时间：</p>
        <p class="info">全周无休 10:00-18:30</p>
        <p>预约电话：</p>
        <p class="info">028-63160613</p>
      </template>
    </div>
    <img src="./assets/images/shop-a.jpg">
    <img src="./assets/images/shop-b.jpg">
    <img src="./assets/images/shop-c.jpg">
  </div>
</template>

<script>
  import CButton from '../CButton'
  export default {
    name: 'shop',

    components: {
      CButton
    },

    props: {
      unique: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .shop {
    padding: 82px 150px;
    display: flex;
    justify-content: space-between;
  }

  .shop img {
    width: 210px;
    height: 370px;
  }

  .address {
    max-width: 300px;
  }

  .address h1 {
    color: #444;
    margin: 20px auto 30px;
    font-size: 32px;
  }

  .address p {
    color: #636363;
    font-size: 16px;
    margin-bottom: 5px;
    line-height: 2em;
  }

  .address .info {
    margin-bottom: 20px;
  }

  .more {
    margin-top: 140px;
  }

  .pink {
    background: #fef5f5;
  }

  @media (max-width: 1366px) {
    .shop {
      padding: 82px 120px;
    }
  }
</style>
