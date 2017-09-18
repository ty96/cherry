<template>
  <div class="box">
    <AHeader></AHeader>

    <h1>关于我们 - 简介</h1>
    <vue-editor
      class="editor"
      ref="myTextEditor"
      v-model="content"
      @imageAdded="handleImageAdded"
      :useCustomImageHandler="true"
    >
    </vue-editor>
    <p class="button" @click="submit"><CButton color="#333" text="提交改动"></CButton></p>

    <h1>人才招聘</h1>
    <div class="hr" v-for="(item, index) in data" :style="{'background': index % 2 ? '#fef5f5' : 'white'}">
      <input placeholder="添加人才名称" class="type" :value="item.name" @change="change('name', index)" :ref="'name' + index">
      <div>
        <div class="require">
          <input placeholder="添加要求大项" :value="item.detail[0] ? item.detail[0].title : ''" @change="change('title', index, 0)" :ref="'titleA' + index">
          <textarea placeholder="添加要求描述" :value="item.detail[0] ? item.detail[0].desc: ''" @change="change('desc', index, 0)" :ref="'descA' + index"></textarea>
        </div>
        <div class="require">
          <input placeholder="添加要求大项" :value="item.detail[1] ? item.detail[1].title : ''" @change="change('title', index, 1)" :ref="'titleB' + index">
          <textarea placeholder="添加要求描述" :value="item.detail[1] ? item.detail[1].desc : ''" @change="change('desc', index, 1)" :ref="'descB' + index"></textarea>
        </div>
        <div class="require">
          <input placeholder="添加要求大项" :value="item.detail[2] ? item.detail[2].title : ''" @change="change('title', index, 2)" :ref="'titleC' + index">
          <textarea placeholder="添加要求描述" :value="item.detail[2] ? item.detail[2].desc : ''" @change="change('desc', index, 2)" :ref="'descC' + index"></textarea>
        </div>
        <div class="require">
          <input placeholder="添加要求大项" :value="item.detail[3] ? item.detail[3].title : ''" @change="change('title', index, 3)" :ref="'titleD' + index">
          <textarea placeholder="添加要求描述" :value="item.detail[3] ? item.detail[3].desc : ''" @change="change('desc', index, 3)" :ref="'descD' + index"></textarea>
        </div>
      </div>
      <p class="button"><a @click="remove(index)"><CButton :small="true" color="pink" text="移除"></CButton></a></p>
    </div>
    <div class="hr" v-if="showAdd">
      <input placeholder="添加人才名称" class="type" v-model="name">
      <div>
        <div class="require">
          <input placeholder="添加要求大项" v-model="titleA">
          <textarea placeholder="添加要求描述" v-model="descA"></textarea>
        </div>
        <div class="require">
          <input placeholder="添加要求大项" v-model="titleB">
          <textarea placeholder="添加要求描述" v-model="descB"></textarea>
        </div>
        <div class="require">
          <input placeholder="添加要求大项" v-model="titleC">
          <textarea placeholder="添加要求描述" v-model="descC"></textarea>
        </div>
        <div class="require">
          <input placeholder="添加要求大项" v-model="titleD">
          <textarea placeholder="添加要求描述" v-model="descD"></textarea>
        </div>
      </div>
    </div>

    <p class="button">
      <a @click="add"><CButton color="pink" :text="showAdd ? '移除' : '添加'"></CButton></a>
      <a @click="confirm"><CButton color="#444" text="保存"></CButton></a>
    </p>
  </div>
</template>

<script>
  import AHeader from './AHeader'
  import Banner from './Banner'
  import CButton from './CButton'
  import Creed from './Creed'
  import Sale from './Sale'
  import Shop from './Shop'
  import Wechat from './Wechat'
  import Service from './Service'
  import CFooter from './CFooter'
  import 'whatwg-fetch'
  import { root } from '../utils'
  import VueEditor from './Editor/VueEditor.vue'

  export default {
    name: 'join-admin',

    components: {
      AHeader,
      Banner,
      Creed,
      Sale,
      Shop,
      Wechat,
      Service,
      CFooter,
      CButton,
      VueEditor
    },
    data () {
      return {
        content: '',
        showAdd: false,
        name: '',
        titleA: '',
        titleB: '',
        titleC: '',
        titleD: '',
        descA: '',
        descB: '',
        descC: '',
        descD: '',
        data: [],
        recruitment: {
          list: []
        }
      }
    },
    // if you need to manually control the data synchronization, parent component needs to explicitly emit an event instead of relying on implicit binding
    // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
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
            if (!data.error) {
              alert('提交成功！')
            } else {
              alert('提交失败！')
            }
          })
      },
      request () {
        fetch(`${root}client/about/`, {
          method: 'GET',
          credentials: 'include'
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            this.content = data.body.body
          })

        fetch(`${root}client/recruitment/`, {
          method: 'GET',
          credentials: 'include'
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            this.data = data.body
          })
      },
      change (type, index, subIndex) {
        let value = ''
        if (type === 'name') {
          value = this.$refs['name' + index][0].value
          this.data[index].name = value
        } else {
          value = this.$refs[type + this.numToLetter(subIndex) + index][0].value
          if (!this.data[index].detail[subIndex]) {
            this.data[index].detail[subIndex] = {}
          }
          this.data[index].detail[subIndex][type] = value
        }
        console.log(this.data)
      },
      numToLetter (i) {
        if (i === 0) {
          return 'A'
        } else if (i === 1) {
          return 'B'
        } else if (i === 2) {
          return 'C'
        } else if (i === 3) {
          return 'D'
        }
      },
      remove (i) {
        this.data.splice(i, 1)
        this.confirm()
      },
      add () {
        this.showAdd = !this.showAdd
      },
      confirm () {
        if (this.showAdd && !this.name) {
          if (!confirm('大标题为空，新增条目将不会保存，确认吗？')) {
            return void 0
          }
        } else {
          let content = []
          let tempItem = {}

          tempItem.name = this.name

          if (this.titleA) {
            let tempObj = {}
            tempObj.title = this.titleA
            tempObj.desc = this.descA
            content.push(tempObj)
          }

          if (this.titleB) {
            let tempObj = {}
            tempObj.title = this.titleB
            tempObj.desc = this.descB
            content.push(tempObj)
          }

          if (this.titleC) {
            let tempObj = {}
            tempObj.title = this.titleC
            tempObj.desc = this.descC
            content.push(tempObj)
          }

          if (this.titleD) {
            let tempObj = {}
            tempObj.title = this.titleD
            tempObj.desc = this.descD
            content.push(tempObj)
          }

          tempItem.content = content
          this.recruitment.list = this.data
          if (this.name) {
            this.recruitment.list.push(tempItem)
          }
          this.recruitment = JSON.stringify(this.recruitment).replace(/detail/g, 'content').replace(/{},/g, '')

          let formData = new FormData()
          formData.append('recruitment', this.recruitment)
          fetch(`${root}backend/recruitment/save/`, {
            method: 'POST',
            credentials: 'include',
            body: formData
          })
            .then((res) => {
              return res.json()
            })
            .then((data) => {
              console.log(data)
              window.location.reload()
            })
        }
      },
      handleImageAdded (file, Editor, cursorLocation) {
        let formData = new FormData()
        formData.append('image', file)

        fetch(`${root}backend/richtext/upload/`, {
          method: 'POST',
          credentials: 'include',
          body: formData
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            Editor.insertEmbed(cursorLocation, 'image', data.body.url)
          })
      }
    },
    computed: {
      editor () {
        return this.$refs.myTextEditor.quillEditor
      }
    },
    mounted () {
      this.request()
    }
  }
</script>

<style scoped>
  .editor {
    height: 800px;
    margin: 0 150px 100px;
  }

  .hr {
    margin: -10px 0 80px;
    padding: 40px 150px 0;
  }

  .hr > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .type {
    display: block;
    border: 1px solid #eee;
    outline: none;
    color: #666;
    height: 40px;
    width: 160px;
    font-size: 20px;
    line-height: 40px;
    padding: 0 10px;
    border-radius: 10px;
    text-align: center;
  }

  h1 {
    font-size: 20px;
    padding: 40px 150px;
    color: #444;
  }

  .require {
    display: inline-block;
  }

  .require input {
    margin: 30px 0;
    font-size: 18px;
    display: block;
    border: 1px solid #eee;
    outline: none;
    color: #666;
    padding: 0 10px;
    width: 160px;
    height: 30px;
    border-radius: 10px;
    text-align: center;
  }

  .require textarea {
    display: block;
    width: 480px;
    height: 120px;
    font-size: 16px;
    outline: none;
    color: #666;
    border-color: #eee;
    padding: 10px;
    border-radius: 10px;
  }

  .button {
    margin: 30px 0;
    text-align: center;
  }

  .button a {
    margin: auto 40px;
  }

  @media(max-width: 1366px) {
    .editor {
      margin: 0 120px 100px;
    }

    .hr {
      padding: 40px 120px 0;
    }

    h1 {
      padding: 30px 120px;
    }
  }
</style>
