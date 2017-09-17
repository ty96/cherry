<template>
  <div class="show">
    <div>
      <h1>{{data.name}}</h1>
      <p>{{data.intro}}</p>
      <p>可选木材材质：</p>
      <Wood :select="data.material" class="type"></Wood>
      <p>可选尺寸：<span>{{data.size}}</span></p>
      <a @click="buy"><CButton text="购买咨询"></CButton></a>
      <span class="price">￥{{data.price}}</span>
    </div>
    <img :src="data.images && data.images[0]">
  </div>
</template>

<script>
  import Wood from '../Wood'
  import CButton from '../CButton'

  export default {
    name: 'show',

    components: {
      Wood,
      CButton
    },
    methods: {
      buy () {
        window.scrollTo(0, 0)
        document.getElementById('admin').click()
      }
    },
    props: {
      data: {
        type: Object,
        default: function () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .show {
    color: #636363;
    padding: 40px 150px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background: #f7f7f7;
  }

  .type {
    margin-left: -150px;
    margin-top: -40px;
  }

  .show > div {
    max-width: 480px;
  }

  .show h1 {
    margin: 30px auto 20px;
  }

  .show p {
    color: #636363;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .show img {
    width: 600px;
    height: 420px;
  }

  .price {
    color: #ffaeae;
    font-size: 36px;
    float: right;
    margin-right: 72px;
  }

  @media (max-width: 1366px) {
    .show {
      padding: 40px 120px;
    }
  }
</style>
