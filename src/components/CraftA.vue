<template>
  <div>
    <AHeader></AHeader>
    <h1>配件细节</h1>
    <div class="cards">
      <div class="card" v-for="(item,index) in data.accessoryDetail" :key="index">
        <div class="select">
          <span class="upload" v-if="uploadBtn.indexOf('detail' + index) + 1" @click="upload('craftdetail', 'detail' + index, index)">上传</span>
          <span class="success" v-if="uploadSuc.indexOf('detail' + index) + 1">成功</span>
          <picture-input
            :ref="'detail' + index"
            @change="onChange('detail' + index)"
            width="180"
            height="180"
            margin="0"
            class="banner"
            style="margin: 0"
            accept="image/*"
            size="10"
            buttonClass="btn"
            removeButtonClass="btn"
            :prefill="data.accessoryDetail[index].image"
            :plain="true"
            :removable="true"
            :customStrings="{
            change: 'Change',
            remove: 'Remove'
          }"
          >
          </picture-input>
        </div>
        <div>
          <input v-model="data.accessoryDetail[index].title"><button @click="delItem(index)">删除</button>
          <textarea v-model="data.accessoryDetail[index].desc"></textarea>
        </div>
      </div>
      <div class="card">
        <div class="select">
          <span class="upload" v-if="uploadBtn.indexOf('new') + 1" @click="upload('craftdetail', 'new')">上传</span>
          <span class="success" v-if="uploadSuc.indexOf('new') + 1">成功</span>
          <picture-input
            :ref="'new'"
            @change="onChange('new')"
            width="180"
            height="180"
            margin="0"
            class="banner"
            style="margin: 0"
            accept="image/*"
            size="10"
            buttonClass="btn"
            removeButtonClass="btn"
            :plain="true"
            :removable="true"
            :customStrings="{
              change: 'Change',
              remove: 'Remove'
            }"
          >
          </picture-input>
        </div>
        <div>
          <input v-model="newItem.title" class="newInput">
          <textarea v-model="newItem.desc"></textarea>
        </div>
      </div>
    </div>
    <p class="button">
      <a @click="submit"><CButton color="#333" text="提交改动"></CButton></a>
    </p>


    <h1 class="pink">工艺实拍</h1>
    <div class="box">
      <div v-for="(item, index) in data.craftShot" :key="index">
        <img :src="item">
        <a @click="del"><button>Remove</button></a>
        <a :href="item" :download="item"><button>Download</button></a>
      </div>
      <div class="select">
        <span class="upload" v-if="uploadBanner" @click="upload('shot', 'bannerInput')">上传</span>
        <picture-input
          ref="bannerInput"
          @change="onChange('bannerInput')"
          width="180"
          height="180"
          margin="0"
          class="banner"
          style="margin: 0"
          accept="image/*"
          size="10"
          buttonClass="btn"
          removeButtonClass="btn"
          :plain="true"
          :removable="true"
          :customStrings="{
            change: 'Change',
            remove: 'Remove'
          }"
        >
        </picture-input>
      </div>
      <div class="blank"></div>
      <div class="blank"></div>
      <div class="blank"></div>
      <div class="blank"></div>
      <div class="blank"></div>
      <div class="blank"></div>
    </div>
  </div>
</template>

<script>
  import AHeader from './AHeader'
  import Banner from './Banner'
  import Creed from './Creed'
  import Sale from './Sale'
  import Shop from './Shop'
  import Wechat from './Wechat'
  import Service from './Service'
  import CButton from './CButton'
  import PictureInput from 'vue-picture-input'
  import 'whatwg-fetch'
  import { root } from '../utils'

  export default {
    name: 'craft-admin',
    data () {
      return {
        uploadBanner: false,
        uploadSale: false,
        data: {},
        uploadSuc: '',
        uploadBtn: '',
        newItem: {
          title: '',
          desc: '',
          url: ''
        }
      }
    },
    components: {
      AHeader,
      Banner,
      Creed,
      Sale,
      Shop,
      Wechat,
      Service,
      CButton,
      PictureInput
    },
    mounted () {
      this.request()
    },
    methods: {
      request () {
        fetch(`${root}client/accessoryDetail/`, {
          method: 'GET',
          credentials: 'include'
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (!data.error) {
              this.data = data.body
            }
          })
      },
      delItem (index) {
        let formData = new FormData()
        let details = {}
        if (confirm('确认删除吗？')) {
          this.data.accessoryDetail.splice(index, 1)
          details.list = this.data.accessoryDetail
          for (let i = 0; i < details.list.length; i++) {
            details.list[i].url = details.list[i].image
          }
          details = JSON.stringify(details)
          formData.append('details', details)
          fetch(`${root}backend/craftdetail/save/`, {
            method: 'POST',
            credentials: 'include',
            body: formData
          })
            .then((res) => {
              return res.json()
            })
            .then((data) => {
              if (!data.error) {
                alert('删除成功！')
                window.location.reload()
              }
            })
        }
      },
      del (e) {
        if (confirm('确认删除吗？')) {
          const image = e.target.parentNode.parentNode.childNodes[0].src.split('/').pop().split('?')[0]
          let formData = new FormData()
          formData.append('filename', image)
          fetch(`${root}backend/shot/delete/`, {
            method: 'POST',
            credentials: 'include',
            body: formData
          })
            .then((res) => {
              return res.json()
            })
            .then((data) => {
              if (!data.error) {
                alert('删除成功！')
                window.location.reload()
              }
            })
        }
      },
      onChange (e) {
        if (this.$refs[e].image) {
          this.uploadBanner = true
          this.uploadBtn = this.uploadBtn + e
        } else {
//          alert('您的浏览器不支持 FileReader API')
        }
      },
      upload (type, e, index) {
        let formData = new FormData()
        console.log(this.$refs[e])
        const image = this.$refs[e].file
        formData.append('image', image)
        fetch(`${root}backend/${type}/upload/`, {
          method: 'POST',
          credentials: 'include',
          body: formData
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (!data.error) {
              if (type === 'shot') {
                alert('上传成功！')
                window.location.reload()
              } else {
                if (e === 'new') {
                  this.newItem.url = data.body.url
                } else {
                  this.data.accessoryDetail[index].image = data.body.url
                }
                this.uploadSuc = this.uploadSuc + e
              }
            }
          })
      },
      submit () {
        let formData = new FormData()
        let details = {}
        details.list = this.data.accessoryDetail
        for (let i = 0; i < details.list.length; i++) {
          details.list[i].url = details.list[i].image
        }
        if (this.newItem.url) {
          details.list.push(this.newItem)
        }
        details = JSON.stringify(details)
        formData.append('details', details)
        fetch(`${root}backend/craftdetail/save/`, {
          method: 'POST',
          credentials: 'include',
          body: formData
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (!data.error) {
              alert('上传成功！')
              window.location.reload()
            }
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
    margin: 0 30px 30px;
    text-align: center;
  }

  .cards {
    padding: 20px 150px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card {
    margin-bottom: 60px;
    display: inline-block;
  }

  .card > div {
    display: inline-block;
    vertical-align: top;
  }

  .card > .select {
    width: 180px;
    height: 180px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
  }

  .card input {
    color: #636363;
    border: none;
    width: 240px;
    display: inline-block;
    height: 28px;
    line-height: 28px;
    font-size: 20px;
    margin: 10px 10px 20px 10px;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
    outline: none;
  }

  .card textarea {
    box-sizing: border-box;
    padding: 10px;
    color: #636363;
    font-size: 16px;
    margin: 0 10px;
    height: 120px;
    width: 300px;
    display: block;
    outline: none;
  }

  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 150px 180px;
    background: #fef5f5;
  }

  .box img {
    width: 180px;
    height: 180px;
  }

  .box div {
    width: 180px;
    height: 180px;
    margin: 0 20px 80px;
    text-align: center;
  }

  .box button {
    color: #444;
    width: 80px;
    margin: 7px 2px;
  }

  .box .blank {
    height: 0;
    margin: 0 10px;
  }

  .banner {
    position: relative;
  }

  .banner:after {
    content: "+";
    color: #ccc;
    line-height: 178px;
    font-size: 40px;
    font-weight: lighter;
    text-align: center;
    position: absolute;
    width: 180px;
    height: 180px;
    border: 1px #ccc dashed;
    box-sizing: border-box;
    left: 0;
    top: 0;
  }

  .select {
    position: relative;
  }

  .upload,
  .success {
    content: "上传";
    color: white;
    line-height: 30px;
    font-size: 14px;
    font-weight: lighter;
    text-align: center;
    position: absolute;
    width: 48px;
    height: 30px;
    box-sizing: border-box;
    right: 0;
    top: 0;
    z-index: 100003;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .pink {
    background: #fef5f5;
  }

  .success {
    color: white;
    background: green;
    cursor: not-allowed;
  }

  .card .newInput {
    width: 280px;
    display: block;
  }

  @media(max-width: 1366px) {
    .box {
      padding: 30px 120px;
    }

    h1 {
      padding: 30px 120px;
    }

    .cards {
      padding: 20px 120px;
    }
  }
</style>
