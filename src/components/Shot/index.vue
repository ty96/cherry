<template>
  <div class="shot">
    <h1 :style="{'font-size': small ? '20px' : '32px'}">
      {{title}}
    </h1>
    <div class="images">
      <img v-for="item in images" :src="item">
    </div>
    <p>{{desc}}</p>
    <div v-if="price" class="price">
      <h4>参考价 <span>{{price}}</span></h4>
      <div class="divider"></div>
      <p>{{info}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shot',

    props: {
      images: {
        type: Array,
        default: []
      },
      title: {
        type: String,
        default: '标题'
      },
      small: {
        type: Boolean,
        default: false
      },
      desc: {
        type: String,
        default: '描述'
      },
      price: {
        type: String,
        default: ''
      },
      info: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .shot {
    padding: 40px 150px;
  }

  .shot h1 {
    color: #444;
    text-align: center;
  }

  .shot p {
    color: #999;
    font-size: 16px;
    text-indent: 2em;
    margin-bottom: 20px;
  }

  .images {
    display: flex;
    justify-content: space-between;
  }

  .images img {
    width: 240px;
    height: 240px;
    margin: 45px auto 55px;
  }

  .divider {
    height: 1px;
    width: 189px;
    background: #f0f0f0;
    display: inline-block;
    margin: 10px auto 5px;
  }

  .price {
    text-align: right;
  }

  .price h4 {
    color: #636363;
    font-size: 14px;
  }

  .price h4 span {
    color: #ff6f6f;
    font-size: 16px;
  }

  .price p {
    color: #b2b2b2;
  }
</style>
