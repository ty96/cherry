<template>
  <div class="wood">
    <h1 v-if="!select">精选材质</h1>
    <div class="box">
      <div v-if="!select || select === 1">
        <img src="./assets/images/1.png">
        <p>橡胶木</p>
      </div>
      <div v-if="!select || select === 2">
        <img src="./assets/images/2.png">
        <p>白橡木</p>
      </div>
      <div v-if="!select || select === 3">
        <img src="./assets/images/3.png">
        <p>樱桃木</p>
      </div>
      <div v-if="!select || select === 4">
        <img src="./assets/images/4.png">
        <p>橡胶木</p>
      </div>
      <div v-if="!select || select === 5">
        <img src="./assets/images/5.png">
        <p>白橡木</p>
      </div>
      <div v-if="!select || select === 6">
        <img src="./assets/images/6.png">
        <p>樱桃木</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wood',

    props: {
      select: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>
  .wood {
    padding: 40px 150px;
  }

  .wood h1 {
    color: #444;
    font-size: 32px;
    margin-bottom: 40px;
    text-align: center;
  }

  .box {
    width: 640px;
    display: flex;
    justify-content: space-between;
    margin: auto;
  }

  .box > div {
    width: 72px;
    text-align: center;
  }

  .box img {
    width: 60px;
    height: 60px;
  }

  .box p {
    color: #999;
    font-size: 14px;
    margin-top: 12px;
  }
</style>
