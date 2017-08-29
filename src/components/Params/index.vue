<template>
  <div class="params">
    <div class="container">
    <h1>产品参数</h1>
    <div class="box">
      <div class="item">
        <img src="./assets/images/param-a.svg">
        <h5>油漆工艺</h5>
        <p>{{data['油漆工艺']}}</p>
      </div>
      <div class="item">
        <img src="./assets/images/param-b.svg">
        <h5>颜色</h5>
        <p>{{data['颜色']}}</p>
      </div>
      <div class="item">
        <img src="./assets/images/param-c.svg">
        <h5>发货时间</h5>
        <p>{{data['发货时间']}}</p>
      </div>
      <div class="item">
        <img src="./assets/images/param-d.svg">
        <h5>物流配送</h5>
        <p>{{data['物流配送']}}</p>
      </div>
      <div class="item">
        <img src="./assets/images/param-e.svg">
        <h5>质量保证</h5>
        <p>{{data['质量保证']}}</p>
      </div>
      <div class="item">
        <img src="./assets/images/param-f.svg">
        <h5>环保评测</h5>
        <p>{{data['环保评测']}}</p>
      </div>
      <div class="item">
        <img src="./assets/images/param-g.svg">
        <h5>尺寸</h5>
        <p>{{data['尺寸']}}</p>
      </div>
      <div class="item">
        <img src="./assets/images/param-h.svg">
        <h5>材质</h5>
        <p>{{data['材质']}}</p>
      </div>
      <div class="item">
        <img src="./assets/images/param-i.svg">
        <h5>拼接工艺</h5>
        <p>{{data['拼接工艺']}}</p>
      </div>
      <div class="item">
        <img src="./assets/images/param-j.svg">
        <h5>安装需求</h5>
        <p>{{data['安装需求']}}</p>
      </div>
      <div class="item">
        <img src="./assets/images/param-k.svg">
        <h5>款式</h5>
        <p>{{data['款式']}}</p>
      </div>
      <div class="item">
        <img src="./assets/images/param-l.svg">
        <h5>生产周期</h5>
        <p>{{data['生产周期']}}</p>
      </div>
    </div>
    </div>
    <div class="tips">
      <div>
        <h4>满88元免邮费</h4>
        <p>单笔订单金额（不含运费）满88元可免邮费，不满88元，单笔订单收取10元邮费。</p>
      </div>
      <div>
        <h4>樱桃自营品牌</h4>
        <p>樱桃原创生活类电商品牌，所有商品均为网易自营，品质保证。</p>
      </div>
      <div>
        <h4>部分地区无法配送</h4>
        <p>该商品不支持配送至澳门、台湾、香港。</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'params',

    data () {
      return {
        data: {
          type: Object,
          default: {}
        }
      }
    }
  }
</script>

<style scoped>

  .container {
    padding: 40px 150px;
  }

  .container h1 {
    color: #444;
    font-size: 32px;
    text-align: center;
    margin-bottom: 12px;
  }

  .box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .item {
    width: 240px;
    text-align: center;
  }

  .item img {
    width: 56px;
    height: 56px;
    margin-top: 38px;
  }

  .item h5 {
    color: #636363;
    font-size: 16px;
    margin: 28px auto 20px;
  }

  .item p {
    color: #999;
    font-size: 16px;
    margin-bottom: 27px;
  }

  .tips {
    background: #fef5f5;
    padding: 40px 150px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .tips > div {
    width: 300px;
  }

  .tips h4 {
    color: #636363;
    font-size: 20px;
    margin-bottom: 22px;
  }

  .tips p {
    color: #999;
    font-size: 16px;
  }

</style>
