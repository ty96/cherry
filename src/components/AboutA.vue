<template>
  <div class="box">
    <AHeader></AHeader>

    <h1>关于我们 - 简介</h1>
    <quill-editor
      class="editor"
      ref="myTextEditor"
      v-model="content"
      :config="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    >
    </quill-editor>
    <p class="button" @click="submit"><CButton color="#333" text="提交改动"></CButton></p>

    <h1>人才招聘</h1>
    <div class="hr" v-for="(item, index) in data" v-if="item.name">
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
  import { quillEditor } from 'vue-quill-editor'
  import 'whatwg-fetch'
  import { root } from '../utils'

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
      quillEditor,
      CButton
    },
    data () {
      return {
        content: '<h2>I am Example</h2>',
        editorOption: {},
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
            console.log(data)
            // TODO refresh()
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
        this.data[i] = {}
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
      onEditorBlur (editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus (editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady (editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange ({ editor, html, text }) {
        // console.log('editor change!', editor, html, text)
        this.content = html
      }
    },
    // if you need to get the current editor object, you can find the editor object like this, the $ref object is a ref attribute corresponding to the dom redefined
    // 如果你需要得到当前的editor对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的editor对象，实际上这里的$refs对应的是当前组件内所有关联了ref属性的组件元素对象
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
    height: 500px;
    margin: 0 150px 100px;
  }

  .hr {
    margin: -10px 150px 80px;
  }

  .hr > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .type {
    display: block;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    color: #666;
    height: 40px;
    width: 200px;
    font-size: 28px;
    line-height: 40px;
    padding: 0 10px;
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
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    color: #666;
    padding: 0 10px;
    width: 140px;
  }

  .require textarea {
    display: block;
    width: 480px;
    height: 120px;
    font-size: 16px;
    outline: none;
    color: #666;
    border-color: #ccc;
    padding: 10px;
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
      margin: -10px 120px 80px;
    }

    h1 {
      padding: 30px 120px;
    }
  }
</style>
