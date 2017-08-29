<template>
  <div
    class="order"
    :style="{'display': !show ? 'none' : 'block'}"
  >
    <div class="type" v-if="!form">
      <a>
        <img src="./assets/images/order-a.svg">
        <span>橱柜</span>
      </a>
      <a>
        <img src="./assets/images/order-b.svg">
        <span>衣柜</span>
      </a>
      <a>
        <img src="./assets/images/order-c.svg">
        <span>原木门</span>
      </a>
      <a>
        <img src="./assets/images/order-d.svg">
        <span>楼梯</span>
      </a>
      <a>
        <img src="./assets/images/order-e.svg">
        <span>家饰</span>
      </a>
    </div>
    <div class="form" v-else="form">
      <span>姓名</span>
      <input>
      <span>电话</span>
      <input>
      <CButton text="预订" :small="true"></CButton>
    </div>
  </div>
</template>

<script>
  import CButton from '../CButton'
  export default {
    name: 'order',

    components: {
      CButton
    },

    props: {
      form: {
        type: Boolean,
        default: false
      },

      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .order {
    z-index: -1;
    padding: 20px 150px;
    border-top: 1px solid #f6f6f6;
    transition: marginTop 1s ease 0s;
  }

  .type {
    display: flex;
    justify-content: space-between;
  }

  .type a {
    width: 160px;
    display: inline-block;
  }

  .type img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }

  .type span {
    color: #636363;
    font-size: 16px;
    margin-left: 50px;
    vertical-align: middle;
  }

  .form {
    text-align: right;
  }

  .form span {
    margin: auto 20px;
  }

  .form input {
    height: 28px;
    width: 160px;
    font-size: 16px;
    color: #636363;
    text-align: center;
  }
</style>
