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
    width: 210px;
    height: 210px;
    display: inline-block;
  }

  .detail {
    width: 250px;
    padding-left: 20px;
    display: inline-block;
    vertical-align: top;
  }

  .detail h4 {
    color: #444;
    font-size: 20px;
    margin-top: -8px;
  }

  .detail p {
    color: #999;
    margin: 30px 0;
    font-size: 14px;
    font-weight: 100;
  }

  .detail span {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #ccc;
    padding: 0 14px;
    margin: 3px 6px 3px 0;
    border: 2px solid #fef5f5;
  }
</style>
