<template>
  <div class="box">
    <AHeader></AHeader>
    <h1>
      访客记录
    </h1>
    <table>
      <tr>
        <th>预约时间</th>
        <th>预约电话</th>
        <th>访客姓名</th>
        <th>已回访</th>
      </tr>
      <tr v-for="(item, index) in list">
        <td>{{item.order_time}}</td>
        <td>{{item.phonenum}}</td>
        <td>{{item.name}}</td>
        <td><input type="checkbox" :checked="item.reply" :disabled="item.reply" @click="checkClick(item)"></td>
      </tr>
    </table>

    <pager
      :total-page="total"
      :init-page="now"
      @go-page="goPage"
    >
    </pager>

    <p class="button" @click="confirm"><CButton color="#333" text="提交改动"></CButton></p>
  </div>
</template>

<script>
  import AHeader from './AHeader'
  import CButton from './CButton'
  import { quillEditor } from 'vue-quill-editor'
  import 'whatwg-fetch'
  import { root } from '../utils'
  import pager from 'vue-simple-pager'

  export default {
    name: 'admin',

    components: {
      AHeader,
      quillEditor,
      CButton,
      pager
    },

    data () {
      return {
        list: [],
        total: 1,
        now: 1,
        checkList: []
      }
    },
    mounted () {
      this.getList(1)
    },

    methods: {
      confirm () {
        if (confirm('确定标记所选？提交后不可撤销。')) {
          let formData = new FormData()
          let obj = {
            phonenum: []
          }
          obj.phonenum = this.checkList
          formData.append('info', JSON.stringify(obj))
          fetch(`${root}backend/contact/mark/`, {
            method: 'POST',
            credentials: 'include',
            body: formData
          })
            .then((res) => {
              return res.json()
            })
            .then((data) => {
              if (!data.error) {
                alert('标记成功')
                window.location.reload()
              }
            })
        }
      },
      getList (num) {
        fetch(`${root}backend/contact/get/?page=${num}`, {
          method: 'GET',
          credentials: 'include'
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (!data.error) {
              this.list = data.body.contacts
              this.total = data.body.total_page
              this.now = num
            }
            // TODO refresh()
          })
      },
      goPage (e) {
        this.getList(e.page)
      },
      checkClick (item) {
        if (!item.reply) {
          this.checkList.push(item.phonenum)
        }
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
