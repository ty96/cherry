<template>
  <div class="item">
    <img :src="data.image">
    <div class="detail">
      <h4>{{data.name}}</h4>
      <h5>￥{{data.price}}</h5>
      <div class="divider"></div>
      <p>{{data.intro}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'item',

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
  .item {
    margin: 30px auto;
    display: inline-block;
    text-align: center;
  }

  .item img {
    width: 240px;
    height: 240px;
  }

  .detail {
    width: 240px;
  }

  .detail h4 {
    color: #444;
    font-size: 16px;
    margin-top: 20px;
  }

  .detail h5 {
    color: #ff6f6f;
    font-size: 16px;
    margin-top: 10px;
  }

  .divider {
    display: block;
    width: 189px;
    height: 1px;
    background: #f0f0f0;
    margin: 9px auto;
  }

  .detail p {
    color: #999;
    font-size: 16px;
    font-weight: 100;
  }
</style>
