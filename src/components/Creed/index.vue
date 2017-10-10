<template>
  <div class="creed">
    <h1 v-if="unique">关于樱桃</h1>
    <div class="box">
      <div>
        <img v-if="!unique" src="./assets/images/leaf.svg">
        <p>结合绿色环保与人性化功能设计，品质材料与精益配件，碧樱家时刻追求卓越标准，让您拥有属于自己的私人定制格调，和超越时间和空间的高品质家居体验。</p>
      </div>
      <div>
        <img v-if="!unique" src="./assets/images/house.svg">
        <p>利用O2O经营模式来平衡实木定制的价格，节省中间多层经销商环节，降低渠道成本，从而让消费者能以更合理的价格享受实木定制家居带来的绿色环保和高品质的个性化体验。</p>
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
    font-size: 16px;
    line-height: 2em;
    margin: 30px auto 100px;
  }

  .cherry img {
    width: 120px;
    margin: 20px auto 0 auto;
    display: block;
    opacity: 0.4;
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
