<template>
  <div class="shop" :class="{'pink': unique}">
    <div class="address">
      <h1>家具体验馆</h1>
      <template v-if="!unique">
        <p>四川省成都市成华区建设北路2段4号樱桃家具体验馆（营业时间：8:30 至 11:00）</p>
        <a href="#/about"><CButton text="详情" class="more"></CButton></a>
      </template>
      <template v-else="!unique">
        <p class="info">地址：四川省成都市成华区建设北路2段4号樱桃家具体验馆</p>
        <p>营业时间：</p>
        <p class="info">上午8:30 至 晚上11:00（周一 至 周六）</p>
        <p>咨询电话：</p>
        <p class="info">400-3145-218（客服） 17713558847（某先生）</p>
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
    font-size: 14px;
    margin-bottom: 5px;
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
