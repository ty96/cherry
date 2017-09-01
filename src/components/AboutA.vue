<template>
  <div class="box">
    <AHeader></AHeader>

    <h1>关于我们 - 简介</h1>
    <quill-editor
      class="eidtor"
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
    <div class="hr">
      <input placeholder="添加人才名称" class="type">
      <div>
        <div class="require">
          <input placeholder="添加要求大项">
          <textarea placeholder="添加要求描述"></textarea>
        </div>
        <div class="require">
          <input placeholder="添加要求大项">
          <textarea placeholder="添加要求描述"></textarea>
        </div>
        <div class="require">
          <input placeholder="添加要求大项">
          <textarea placeholder="添加要求描述"></textarea>
        </div>
        <div class="require">
          <input placeholder="添加要求大项">
          <textarea placeholder="添加要求描述"></textarea>
        </div>
      </div>
    </div>

    <p class="button"><CButton color="pink" text="添加新人才"></CButton></p>
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
    name: 'admin',

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
        editorOption: {
          // something config
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
      // you can use current editor object to do something(editor methods)
      console.log('this is my editor', this.editor)
      // this.editor to do something...
    }
  }
</script>

<style scoped>
  .eidtor {
    height: 500px;
    margin: 0 150px 100px;
  }

  .hr {
    margin: -10px 150px 20px;
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
    color: #ccc;
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
    color: #ccc;
    padding: 0 10px;
    width: 140px;
  }

  .require textarea {
    display: block;
    width: 480px;
    height: 120px;
    font-size: 16px;
    outline: none;
    color: #ccc;
    border-color: #ccc;
    padding: 10px;
  }

  .button {
    margin: 30px 0;
    text-align: center;
  }

  @media(max-width: 1366px) {
    .eidtor {
      margin: 0 120px 100px;
    }

    .hr {
      margin: -10px 120px 20px;
    }

    h1 {
      padding: 30px 120px;
    }
  }
</style>
