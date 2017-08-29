<template>
  <div class="service">
    <h1>服务流程</h1>
    <div class="order">
      <div>
        <img src="./assets/images/paper.svg">
        <p>通过网页或电话预约服务，记录基本联系信息。</p>
      </div>
      <div>
        <img src="./assets/images/ruler.svg">
        <p>樱桃团队上门进行专业测量，为您的需求量“房”定制。</p>
      </div>
      <div>
        <img src="./assets/images/copy.svg">
        <p>提供多种优质解决方案，您可到店内与我们共同确定合适之选。</p>
      </div>
      <div>
        <img src="./assets/images/tools.svg">
        <p>家装材料准备，樱桃团队将进场施工，完毕后将享受最优售后服务。</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'service'
  }
</script>

<style scoped>
  .service {
    width: 100%;
  }

  .service h1 {
    color: #444444;
    font-size: 32px;
    text-align: center;
    margin: 72px 0 60px;
  }

  .order {
    display: flex;
    padding: 0 150px;
    justify-content: space-between;
    align-items: baseline;
  }

  .order > div {
    max-width: 240px;
    text-align: center;
  }

  .order > div > p {
    color: #636363;
    font-size: 14px;
    text-align: left;
    margin: 30px auto 100px;
  }
</style>
