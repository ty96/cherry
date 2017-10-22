<template>
  <div>
    <AHeader></AHeader>

    <h1>精选材质</h1>
    <div class="box wood">
      <div v-for="(item, index) in wood.info" :key="index">
        <span>{{item.name}}</span>
        <img :src="item.image">
        <a @click="removeWood(item)"><CButton :small="true" color="hotpink" text="移除"></CButton></a>
        <a :href="item" :download="item"><CButton :small="true" color="#666" text="下载"></CButton></a>
      </div>
      <div class="select">
        <input v-model="newWood.name">
        <span class="upload" v-if="uploadMaterial" @click="upload('material', 'wood')">上传</span>
        <span class="success" v-if="uploadSuc.indexOf('wood') + 1">成功</span>
        <picture-input
          ref="wood"
          @change="onChange('material')"
          @remove="onRemove('material')"
          width="180"
          height="356"
          margin="0"
          class="banner"
          style="margin: 0"
          accept="image/*"
          size="10"
          buttonClass="btn changeBtn"
          removeButtonClass="btn"
          :plain="true"
          :removable="true"
          :customStrings="{
            change: '更换',
            remove: '移除'
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
    <p class="button woodButton">
      <a @click="saveWood"><CButton color="#333" text="保存新增"></CButton></a>
    </p>

    <h1>配件细节</h1>
    <div class="cards">
      <div class="card" v-for="(item,index) in data.accessoryDetail" :key="index">
        <div class="select" @click="showUpload">
          <span class="upload" v-if="(uploadBtn.indexOf('detail' + index + '@') + 1) && operate" @click="upload('craftdetail', 'detail' + index, index)">上传</span>
          <span class="success" v-if="uploadSuc.indexOf('detail' + index + '@') + 1">成功</span>
          <picture-input
            :ref="'detail' + index"
            @change="onChange('detail' + index)"
            @remove="onRemove('detail' + index)"
            width="180"
            height="180"
            margin="0"
            class="banner"
            style="margin: 0"
            accept="image/*"
            size="10"
            buttonClass="btn changeBtn"
            removeButtonClass="btn"
            :prefill="data.accessoryDetail[index].image"
            :plain="true"
            :removable="true"
            :customStrings="{
            change: '更换',
            remove: '移除'
          }"
          >
          </picture-input>
        </div>
        <div>
          <input v-model="data.accessoryDetail[index].title">
          <textarea v-model="data.accessoryDetail[index].desc"></textarea>
        </div>
        <p class="delBtn"><a @click="delItem(index)"><CButton text="删除该项" :small="true" color="#666"></CButton></a></p>
      </div>
      <div class="card">
        <div class="select">
          <span class="upload" v-if="uploadBtn.indexOf('new@') + 1" @click="upload('craftdetail', 'new')">上传</span>
          <span class="success" v-if="uploadSuc.indexOf('new@') + 1">成功</span>
          <picture-input
            :ref="'new'"
            @change="onChange('new')"
            @remove="onRemove('new')"
            width="180"
            height="180"
            margin="0"
            class="banner"
            style="margin: 0"
            accept="image/*"
            size="10"
            buttonClass="btn changeBtn"
            removeButtonClass="btn"
            :plain="true"
            :removable="true"
            :customStrings="{
              change: '更换',
              remove: '移除'
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
        <a @click="del"><CButton :small="true" color="hotpink" text="移除"></CButton></a>
        <a :href="item" :download="item"><CButton :small="true" color="#666" text="下载"></CButton></a>
      </div>
      <div class="select">
        <span class="upload" v-if="uploadBanner" @click="upload('shot', 'bannerInput')">上传</span>
        <picture-input
          ref="bannerInput"
          @change="onChange('bannerInput')"
          @remove="onRemove('bannerInput')"
          width="180"
          height="180"
          margin="0"
          class="banner"
          style="margin: 0"
          accept="image/*"
          size="10"
          buttonClass="btn changeBtn"
          removeButtonClass="btn"
          :plain="true"
          :removable="true"
          :customStrings="{
            change: '更换',
            remove: '移除'
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
        uploadMaterial: false,
        data: {},
        wood: {},
        uploadSuc: '',
        uploadBtn: '',
        newItem: {
          title: '',
          desc: '',
          url: ''
        },
        newWood: {},
        operate: false,
        switch: true
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

        fetch(`${root}backend/material/get/`, {
          method: 'GET',
          credentials: 'include'
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (!data.error) {
              this.wood = data.body
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
        if (e === 'new') {
          this.uploadBtn = this.uploadBtn + e + '@'
        } else if (/detail[0-9]+/.test(e)) {
          this.uploadBtn = this.uploadBtn + e + '@'
        } else if (e === 'material') {
          this.uploadMaterial = true
        } else if (e === 'bannerInput') {
          this.uploadBanner = true
        }
      },
      onRemove (e) {
        if (e === 'material') {
          this.uploadMaterial = false
        } else if (e === 'bannerInput') {
          this.uploadBanner = false
        } else {
          this.uploadBtn = this.uploadBtn.replace(e, '')
        }
        this.uploadSuc = ''
      },
      upload (type, e, index) {
        let formData = new FormData()
        let image = this.$refs[e] && this.$refs[e].file
        if (!image) {
          image = this.$refs[e] && this.$refs[e][0].file
        }
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
              } else if (type === 'craftdetail') {
                if (e === 'new') {
                  this.newItem.url = data.body.url
                } else {
                  this.data.accessoryDetail[index].image = data.body.url
                }
              } else if (type === 'material') {
                this.newWood.url = data.body.url
              }
              this.uploadSuc = this.uploadSuc + e + '@'
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
      },
      saveWood () {
        let formData = new FormData()
        if (!this.newWood.name || !this.newWood.url) {
          alert('请保证材质图片和材质名称不为空')
        } else {
          formData.append('name', this.newWood.name)
          formData.append('url', this.newWood.url)
          fetch(`${root}backend/material/new/`, {
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
      },
      removeWood (item) {
        if (window.confirm('确认删除吗？')) {
          let formData = new FormData()
          formData.append('mid', item.mid)
          formData.append('url', this.newWood.url)
          fetch(`${root}backend/material/delete/`, {
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
      showUpload () {
        if (this.switch) {
          if (this.uploadBtn.indexOf('new') + 1) {
            this.uploadBtn = 'new'
          } else {
            this.uploadBtn = ''
          }
          this.operate = true
        }
        this.switch = false
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

  .woodButton {
    margin-top: -10px;
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
    width: 280px;
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

  .wood {
    background: white;
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

  .wood div {
    height: 400px;
  }

  .wood img {
    width: 180px;
    height: 356px;
  }

  .box button {
    color: #444;
    width: 80px;
    margin: 7px 2px;
  }

  .box input {
    width: 120px;
    height: 36px;
    padding: 0 20px;
    font-size: 16px;
    box-sizing: border-box;
    outline: none;
    border-radius: 10px;
    border: 1px solid #efefef;
    margin: 0 auto 20px;
    text-align: center;
  }

  .box > div > span {
    color: #666;
    width: 120px;
    height: 36px;
    padding: 0 20px;
    font-size: 16px;
    box-sizing: border-box;
    display: inline-block;
    margin: 0 auto 20px;
    text-align: center;
  }

  .box .blank {
    height: 1px;
    margin: 0 20px;
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

  .wood .banner:after {
    height: 356px;
    line-height: 354px;
  }

  .select {
    position: relative;
  }

  .upload,
  .success,
  .box > div > .upload,
  .box > div > .success {
    content: "上传";
    color: white;
    line-height: 30px;
    font-size: 16px;
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
    padding: 0;
  }

  .wood > div > .upload,
  .wood > div > .success {
    top: 56px;
  }


  .pink {
    background: #fef5f5;
  }

  .success,
  .box > div > .success,
  .wood > div > .success {
    color: white;
    background: green;
    cursor: not-allowed;
  }

  .delBtn {
    text-align: center;
    margin: 80px 0 20px 0;
  }

  .delBtn span {
    margin: 0;
  }

  .box .button {
    margin: 10px;
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
