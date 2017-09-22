<template>
  <div class="card">
    <img :src="data.image_cover">
    <div class="detail">
      <h4>{{data.title}}</h4>
      <p>{{data.desc}}</p>
      <div>
        <span v-for="item in data.labels">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',

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
  .card {
    margin: 30px auto;
    display: inline-block;
  }

  .card img {
    width: 240px;
    height: 240px;
    display: inline-block;
  }

  .detail {
    width: 260px;
    padding-left: 20px;
    display: inline-block;
    vertical-align: top;
  }

  .detail h4 {
    color: #444;
    font-size: 20px;
    margin-top: 10px;
  }

  .detail p {
    color: #999;
    margin: 30px 0;
    font-size: 16px;
    font-weight: 100;
  }

  .detail span {
    display: inline-block;
    vertical-align: top;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: #ccc;
    padding: 0 16px;
    margin: 3px 6px 3px 0;
    border: 2px solid #fef5f5;
  }

  @media (max-width: 1366px) {
    .card img {
      width: 210px;
      height: 210px;
    }

    .detail h4 {
      margin-top: -8px;
    }
  }
</style>
