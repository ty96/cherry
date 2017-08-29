<template>
  <div class="wechat">
    <template v-if="!join">
      <h1>樱桃家具 · 微信公众号</h1>
      <p>指尖掌握最新动态，查询并了解更多资讯，尽在移动端微信公众号，敬请扫描微信二维码关注。</p>
      <img src="../../assets/qr.png">
    </template>
    <template v-else="!join">
      <h1 class="join">人才招聘</h1>
      <p>招聘优秀人才，让樱桃家居不断成长</p>
      <a href="#/join"><CButton text="详情" color="white" class="more"></CButton></a>
    </template>
  </div>
</template>

<script>
  import CButton from '../CButton'

  export default {
    name: 'wechat',

    components: {
      CButton
    },

    props: {
      join: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .wechat {
    width: 100%;
    height: 360px;
    text-align: center;
    background: url(./assets/images/bg.jpg);
    background-size: cover;
  }

  .wechat h1 {
    color: white;
    font-size: 32px;
    padding: 62px 0 20px;
  }

  .wechat p {
    width: 420px;
    margin: auto;
    color: white;
    font-size: 14px;
  }

  .wechat img {
    width: 80px;
    height: 80px;
    padding-top: 48px;
  }

  .wechat .join {
    padding-top: 84px;
  }

  .more {
    margin-top: 48px;
  }

</style>
