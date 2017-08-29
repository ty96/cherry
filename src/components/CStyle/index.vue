<template>
  <div class="style">
    <h2>部件样式</h2>
    <div class="tri">
      <div>
        <img src="./assets/images/style-a.jpg">
        <h4>顶冒线</h4>
        <p>工艺细腻精湛，明朗大气</p>
      </div>
      <div>
        <img src="./assets/images/style-b.jpg">
        <h4>抽屉</h4>
        <p>科学置物，整洁有序</p>
      </div>
      <div>
        <img src="./assets/images/style-c.jpg">
        <h4>挂衣通</h4>
        <p>坚固稳实，承压性强，使用寿命长</p>
      </div>
    </div>
    <div class="double">
      <div>
        <img src="./assets/images/style-d.jpg">
        <h4>拉手</h4>
        <p>根据家具的款式、功能和场所。百款欧式仿古风格、田园风格、陶瓷系列实用拉手任意搭</p>
      </div>
      <div>
        <img src="./assets/images/style-e.jpg">
        <h4>罗马柱</h4>
        <p>精致的立体雕花、层次感丰富、纹理流畅美观，章显高档品质</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'style'
  }
</script>

<style>
  .style {
    padding: 40px 150px;
    background: #fef5f5;
  }

  .style h2 {
    color: #636363;
    font-size: 28px;
  }

  .tri,
  .double {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }

  .tri img {
    width: 360px;
    height: 240px;
    margin-top: 40px;
  }

  .double img {
    width: 550px;
    height: 240px;
    margin-top: 40px;
  }

  .tri h4,
  .double h4 {
    color: #636363;
    font-size: 20px;
    margin: 20px auto 12px;
  }

  .tri p,
  .double p {
    color: #636363;
    font-size: 16px;
    max-width: 540px;
    line-height: 1.8em;
  }

  @media (max-width: 1366px) {
    .style {
      padding: 40px 120px;
      background: #fef5f5;
    }

    .tri img {
      width: 300px;
      height: 200px;
    }

    .double img {
      width: 458px;
      height: 200px;
    }

    .tri p,
    .double p {
      max-width: 458px;
    }
  }
</style>
