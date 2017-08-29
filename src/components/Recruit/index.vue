<template>
  <div
    class="join"
    :style="{'background': pink ? '#fef5f5' : 'white'}"
  >
    <h1>{{data.name}}</h1>
    <div class="detail">
      <div class="text">
        <template v-for="item in data.detail">
          <h2>{{item.title}}</h2>
          <p v-html="item.desc"></p>
        </template>
      </div>
      <img v-if="random < 33" src="./assets/images/join-a.svg">
      <img v-else-if="random > 66" src="./assets/images/join-b.svg">
      <img v-else="random < 33" src="./assets/images/join-c.svg">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recruit',

    props: {
      data: {
        type: Object,
        default: {}
      },
      pink: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        random: Math.random() * 100
      }
    }
  }
</script>

<style scoped>
  .join {
    padding: 12px 150px 20px;
  }

  .join h1 {
    color: #423838;
    font-size: 32px;
    margin: 46px 0;
  }

  .detail {
    display: flex;
    align-items: center;
  }

  .detail .text {
    flex: 1;
  }

  .detail img {
    flex: 0;
    margin-left: 180px;
    margin-top: -120px;
  }


  .detail h2 {
    color: #666;
    font-size: 28px;
  }

  .detail p {
    color: #666;
    font-size: 16px;
    margin: 20px 0 28px;
  }

  @media (max-width: 1366px) {
    .join {
      padding: 12px 120px 20px;
    }
  }
</style>
