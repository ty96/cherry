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
            <a target="_blank" href="https://www.douban.com/people/beinghouse"><img class="douban" src="./assets/images/douban.png"></a>
            <a target="_blank" href="http://weibo.com/u/6324661983"><img src="./assets/images/weibo.png"></a>
          </div>
        </div>
      </div>
      <div class="why">
        <h3>为何选择碧樱</h3>
        <div>
          <p>碧樱利用O2O经营模式来平衡实木定制的价格，节省中间多层经销商环节，降低渠道成本，从而让消费者能以更合理的价格享受实木定制家居带来的绿色环保和高品质的个性化体验。</p>
        </div>
      </div>
      <div class="qr">
        <h3>微信公众号</h3>
        <div>
          <img src="../../assets/qr.jpg">
          <p>微信扫码关注 · 碧樱家具官方</p>
        </div>
      </div>
    </div>
    <div class="menu">
      <a href="#/">首页</a>
      <a href="#/cases">案例</a>
      <a href="#/craft">工艺</a>
      <a href="#/join">人才招聘</a>
      <a href="#/about">关于</a>
    </div>
    <p class="copyright">Copyright © 2017 www.beinghouse.com 保留所有权利 川ICP备1700523号 成都乐铠印记科技有限公司</p>
  </div>
</template>

<script>
  export default {
    name: 'footer'
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

  .media .douban {
    margin-right: 20px;
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
    height: 16px;
    width: 1px;
    background: #ccc;
    margin: 25px 0;
  }

  .menu a:last-child:after {
    display: none;
  }

  .copyright {
    font-size: 16px;
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
