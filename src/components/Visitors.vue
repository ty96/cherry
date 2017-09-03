<template>
  <div class="box">
    <AHeader></AHeader>

    <h1>
      访客记录
      <select class="drop">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </h1>

    <table>
      <tr>
        <th>预约时间</th>
        <th>预约电话</th>
        <th>访客姓名</th>
        <th>已回访</th>

      </tr>
      <tr>
        <td>10:00</td>
        <td>13111112222</td>
        <td>徐锐</td>
        <td><input type="checkbox"></td>
      </tr>
      <tr>
        <td>10:00</td>
        <td>13111112222</td>
        <td>徐锐</td>
        <td><input type="checkbox"></td>
      </tr>
      <tr>
        <td>10:00</td>
        <td>13111112222</td>
        <td>徐锐</td>
        <td><input type="checkbox"></td>
      </tr>
    </table>


    <p class="button" @click="confirm"><CButton color="#333" text="提交改动"></CButton></p>
  </div>
</template>

<script>
  import AHeader from './AHeader'
  import CButton from './CButton'
  import { quillEditor } from 'vue-quill-editor'
  import 'whatwg-fetch'
  import { root } from '../utils'

  export default {
    name: 'admin',

    components: {
      AHeader,
      quillEditor,
      CButton
    },

    data () {
      return {
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
    }
  }
</script>

<style scoped>
  h1 {
    font-size: 20px;
    padding: 40px 150px;
    color: #444;
  }

  .button {
    margin: 30px 0;
    text-align: center;
  }

  .drop {
    display: inline-block;
    line-height: 20px;
    margin: 0 20px;
    vertical-align: middle;
  }

  table {
    width: 1040px;
    margin: 60px auto;
    border-spacing: 0;
    border: 1px solid #f0f0f0;
  }

  tr {
    height: 40px;
  }

  th {
    background: #efefef;
  }

  th, td {
    width: 260px;
    height: 48px;
    text-align: center;
    line-height: 48px;
  }

  @media(max-width: 1366px) {
    h1 {
      padding: 48px 120px;
    }
  }
</style>
