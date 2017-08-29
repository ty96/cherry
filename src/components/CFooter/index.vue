<template>
  <div class="footer">
    <div class="about">
      <div class="tel">
        <h3>联系方式</h3>
        <div>
          <p class="num">400-3763-218</p>
          <p>客服服务时间： 8:00 - 23:00</p>
          <div class="media">
            <span>关注：</span>
            <a><img class="qq" src="./assets/images/qq.png"></a>
            <a><img src="./assets/images/wechat.png"></a>
            <a><img src="./assets/images/weibo.png"></a>
          </div>
        </div>
      </div>
      <div class="why">
        <h3>为何选择樱桃</h3>
        <div>
          <p>	樱桃利用互联网优势，与传统实木家具行业相结合，节省中间多层经销商环节，以降低家具渠道成本，从而消费者能够以更加合理的价格享受到实木家具带来的绿色环保、工艺美观的生活品质。</p>
        </div>
      </div>
      <div class="qr">
        <h3>微信公众号</h3>
        <div>
          <img src="../../assets/qr.png">
          <p>微信扫码关注 · 樱桃家具官方</p>
        </div>
      </div>
    </div>
    <div class="menu">
      <a href="#/">首页</a>
      <a @mouseover="showOrder" @mouseout="hideOrder">
        家具产品
        <Order :show="order" :form="false" class="order"></Order>
      </a>
      <a href="#/cases">案例</a>
      <a href="#/craft">工艺</a>
      <a href="#/join">人才招聘</a>
      <a href="#/about">关于</a>
    </div>
    <p class="copyright">Copyright © 2017 www.cherrieshome.com 保留所有权利 川ICP备1700523号 樱桃实木家具有限公司</p>
  </div>
</template>

<script>
  import Order from '../Order'

  export default {
    name: 'footer',
    components: {
      Order
    },
    methods: {
      showOrder () {
        this.order = true
      },
      hideOrder () {
        this.order = false
      }
    },

    data () {
      return {
        order: false
      }
    }
  }
</script>

<style scoped>
  .about {
    display: flex;
    padding: 64px 150px 80px;
    justify-content: space-between;
    align-items: baseline;
    background: #f7f7f7;
  }

  .about > div {
    flex: 1;
    height: 212px;
    max-width: 300px;
  }

  .about > div > h3 {
    font-weight: 800;
    font-size: 24px;
    color: #444444;
  }

  .tel > div {
    width: 100%;
    margin-top: 36px;
    text-align: center;
    color: #636363;
  }

  .tel .num {
    font-size: 30px;
  }

  .media {
    margin-top: 70px;
  }

  .media img {
    margin: 0 20px;
    height: 30px;
    vertical-align: middle;
  }

  .media .qq {
    margin-right: 26px;
  }

  .media span {
    line-height: 30px;
  }

  .why > div {
    width: 100%;
    margin-top: 36px;
    color: #636363;
    text-indent: 2em;
    line-height: 2em;
    font-weight: 300;
  }

  .qr > div {
    width: 100%;
    margin-top: 36px;
    text-align: center;
    color: #636363;
  }

  .qr img {
    width: 100px;
    height: 100px;
    margin-bottom: 25px;
  }

  .menu {
    text-align: center;
    background: #fcfcfc;
    padding-bottom: 4px;
    position: relative;
  }

  .menu a {
    color: #636363;
    padding: 0 36px;
    height: 64px;
    line-height: 64px;
    position: relative;
  }

  .menu a:after {
    content: '';
    position: absolute;
    right: 0;
    height: 14px;
    width: 1px;
    background: #ccc;
    margin: 25px 0;
  }

  .menu a:last-child:after {
    display: none;
  }

  .order {
    bottom: 64px;
    left: 0;
    z-index: 9;
    position: absolute;
  }

  .copyright {
    font-size: 14px;
    color: #636363;
    text-align: center;
    margin: 20px auto 25px;
  }


  @media (max-width: 1366px) {
    .about {
      padding: 64px 120px 80px;
    }
  }
</style>
