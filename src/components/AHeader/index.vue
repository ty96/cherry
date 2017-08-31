<template>
  <div>
    <div class="header">
      <a href="#/admin">首页</a>
      <a href="#/admin/products">家具产品</a>
      <a href="#/admin/cases">案例</a>
      <a href="#/admin/craft">工艺</a>
      <a href="#/admin/about">关于</a>
      <a href="#/admin/order">访客记录</a>
      <div v-if="!name" class="form">
        <span>账号</span>
        <input v-model="username">
        <span>密码</span>
        <input v-model="password" type="password">
        <a @click="login"><CButton text="登入" :small="true" color="#aaa"></CButton></a>
      </div>
      <span v-else="!name" class="name">Admin</span>
    </div>
  </div>
</template>

<script>
  import CButton from '../CButton'
  import 'whatwg-fetch'
  import { root } from '../../utils'

  export default {
    name: 'a-header',
    components: {
      CButton
    },
    created () {
      window.scrollTo(0, 0)
    },
    data () {
      return {
        username: '',
        password: '',
        name: false
      }
    },
    methods: {
      login () {
        let formData = new FormData()
        formData.append('username', this.username)
        formData.append('password', this.password)
        if (this.username && this.password) {
          fetch(`${root}backend/login/`, {
            method: 'POST',
            credentials: 'include',
            body: formData
          })
            .then((res) => {
              console.log(res)
              return res.json()
            })
            .then((data) => {
              if (data.body.msg) {
                alert(data.body.msg)
              } else {
                this.name = true
              }
            })
        }
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 100px;
    padding: 0 70px;
    font-size: 16px;
    color: #636363;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .header a {
    width: 64px;
    height: 100px;
    line-height: 100px;
    margin: 0 20px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
  }

  .form {
    flex: 1;
    text-align: right;
    color: #636363;
    width: 500px;
  }

  .form span {
    color: #999;
    font-size: 14px;
    margin: auto 10px;
  }

  .form input {
    height: 20px;
    line-height: 20px;
    width: 100px;
    font-size: 14px;
    color: #636363;
    text-align: center;
  }

  .name {
    color: #feafaf;
    min-width: 500px;
    text-align: right;
  }
</style>
