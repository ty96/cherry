<template>
  <div class="material">
    <h1>配件细节</h1>
    <h3>部件选材</h3>
    <div class="box">
      <div class="card" v-for="item in data">
        <img :src="item.image">
        <div>
          <h4>{{item.title}}</h4>
          <p>{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'material',

    props: {
      data: {
        type: Array,
        default: function () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .material {
    padding: 40px 150px;
  }

  .material h1 {
    color: #444;
    font-size: 32px;
    text-align: center;
  }

  .material h3 {
    color: #666;
    font-size: 28px;
  }

  .box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-bottom: -66px;
  }

  .card {
    width: 500px;
    margin-top: 30px;
    margin-bottom: 66px;
  }

  .card img {
    width: 180px;
    height: 180px;
    display: inline-block;
    margin-right: 30px;
    vertical-align: top;
  }

  .card > div {
    display: inline-block;
    vertical-align: top;
  }

  .card h4 {
    color: #999;
    font-size: 20px;
  }

  .card p {
    color: #999;
    font-size: 16px;
    width: 280px;
    text-indent: 2em;
  }

  @media (max-width: 1366px) {
    .material {
      padding: 40px 120px;
    }
  }
</style>
