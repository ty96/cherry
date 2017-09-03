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
      <input v-model="name">
      <span>电话</span>
      <input v-model="tel">
      <a @click=""><CButton text="预订" :small="true"></CButton></a>
    </div>
  </div>
</template>

<script>
  import CButton from '../CButton'
  import { root } from '../../utils'
  export default {
    name: 'order',

    components: {
      CButton
    },

    data () {
      return {
        name: '',
        tel: ''
      }
    },

    methods: {
      submit () {
        let formData = new FormData()
        formData.append('body', this.content)
        fetch(`${root}backend/about/save/`, {
          method: 'POST',
          credentials: 'include',
          body: formData
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            console.log(data)
            // TODO refresh()
          })
      }
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
    z-index: 2;
    width: 100%;
    padding: 20px 150px;
    background: rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
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
    line-height: 1;
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
    color: #636363;
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
