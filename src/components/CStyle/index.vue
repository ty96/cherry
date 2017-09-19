<template>
  <div class="style">
    <h2>配件细节</h2>
    <template v-for="i in Math.ceil(data.length / 5)">
      <div class="tri">
        <div v-if="data[(i - 1) * 5]">
          <img :src="data[(i - 1) * 5].image">
          <h4>{{data[(i - 1) * 5].title}}</h4>
          <p>{{data[(i - 1) * 5].desc}}</p>
        </div>
        <div v-if="data[(i - 1) * 5 + 1]">
          <img :src="data[(i - 1) * 5 + 1].image">
          <h4>{{data[(i - 1) * 5 + 1].title}}</h4>
          <p>{{data[(i - 1) * 5 + 1].desc}}</p>
        </div>
        <div v-if="data[(i - 1) * 5 + 2]">
          <img :src="data[(i - 1) * 5 + 2].image">
          <h4>{{data[(i - 1) * 5 + 2].title}}</h4>
          <p>{{data[(i - 1) * 5 + 2].desc}}</p>
        </div>
      </div>
      <div class="double">
        <div v-if="data[(i - 1) * 5 + 3]">
          <img :src="data[(i - 1) * 5 + 3].image">
          <h4>{{data[(i - 1) * 5 + 3].title}}</h4>
          <p>{{data[(i - 1) * 5 + 3].desc}}</p>
        </div>
        <div v-if="data[(i - 1) * 5 + 4]">
          <img :src="data[(i - 1) * 5 + 4].image">
          <h4>{{data[(i - 1) * 5 + 4].title}}</h4>
          <p>{{data[(i - 1) * 5 + 4].desc}}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'style',

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

  .tri p {
    max-width: 360px;
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

    .tri p {
      max-width: 300px;
    }

    .double p {
      max-width: 458px;
    }
  }
</style>
