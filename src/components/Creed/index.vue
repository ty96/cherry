<template>
  <div class="creed">
    <h1 v-if="unique">关于樱桃</h1>
    <div class="box">
      <div>
        <img v-if="!unique" src="./assets/images/leaf.svg">
        <p>利用互联网优势，与传统实木家具行业相结合，节省中间多层经销商环节，以降低家具渠道成本，从而消费者能够以更加合理的价格享受到实木家具带来的绿色环保、工艺美观的生活品质。</p>
      </div>
      <div>
        <img v-if="!unique" src="./assets/images/house.svg">
        <p>我们秉承产品细节从人性化功能设计到精益配件及环保材料，时刻践行追求卓越标准，不断力求完美，只为让更多年轻人购买到心仪的实木家具。</p>
      </div>
      <div class="cherry">
        <img src="../../assets/logo_full.svg">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'creed',

    props: {
      unique: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .creed h1 {
    color: #444;
    margin: 60px 150px -60px;
    font-size: 32px;
  }

  .box {
    display: flex;
    padding: 100px 150px 12px;
    justify-content: space-between;
  }

  .box > div {
    width: 360px;
    max-width: 360px;
    display: block;
  }

  .box .cherry {
    width: 240px;
  }

  .box > div > p {
    color: #636363;
    font-size: 14px;
    line-height: 2em;
    margin: 30px auto 100px;
  }

  .cherry img {
    width: 120px;
    margin: 40px auto 0 auto;
    display: block;
  }

  @media (max-width: 1366px) {
    .creed h1 {
      margin: 60px 120px -60px;
    }

    .box {
      padding: 100px 120px 12px;
    }
  }
</style>
