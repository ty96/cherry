<template>
  <div class="admin">
    <AHeader></AHeader>
    <h1>首页 Banner</h1>
    <div class="box">
      <div>
        <img src="../assets/banner.jpg">
        <button>Remove</button>
        <button>Download</button>
      </div>
      <div>
        <img src="../assets/banner.jpg">
        <button>Remove</button>
        <button>Download</button>
      </div>
      <div>
        <img src="../assets/banner.jpg">
        <button>Remove</button>
        <button>Download</button>
      </div>
      <div>
        <img src="../assets/banner.jpg">
        <button>Remove</button>
        <button>Download</button>
      </div>
      <div class="select">
        <span class="upload" v-if="uploadBanner" @click="upload">上传</span>
        <picture-input
          ref="bannerInput"
          @change="onChange"
          width="180"
          height="90"
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
    </div>

    <h1>优品热卖</h1>
    <div class="box">
      <div>
        <img src="../assets/banner.jpg">
        <button>Remove</button>
        <button>Download</button>
      </div>
      <div>
        <img src="../assets/banner.jpg">
        <button>Remove</button>
        <button>Download</button>
      </div>
      <div>
        <img src="../assets/banner.jpg">
        <button>Remove</button>
        <button>Download</button>
      </div>
      <div>
        <img src="../assets/banner.jpg">
        <button>Remove</button>
        <button>Download</button>
      </div>
      <div class="select">
        <span class="upload" v-if="uploadSale">上传</span>
        <picture-input
          ref="saleInput"
          @change="onChange"
          width="180"
          height="90"
          margin="0"
          class="banner"
          style="margin: 0"
          accept="image/*"
          size="10"
          buttonClass="btn"
          :plain="true"
          :removable="true"
          :customStrings="{
            change: 'Change',
            remove: 'Remove'
          }"
        >
        </picture-input>
      </div>
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
  import CFooter from './CFooter'
  import PictureInput from 'vue-picture-input'
  import 'whatwg-fetch'
  import { root } from '../utils'

  export default {
    name: 'home-admin',
    data () {
      return {
        uploadBanner: false,
        uploadSale: false
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
      CFooter,
      PictureInput
    },
    methods: {
      onChange () {
        if (this.$refs.bannerInput.image) {
          this.uploadBanner = true
        } else {
          alert('您的浏览器不支持 FileReader API')
        }
      },
      upload () {
        let formData = new FormData()
        const image = this.$refs.bannerInput.file
        formData.append('image', image)
        fetch(`${root}backend/banner/upload/`, {
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
    padding: 80px 150px 20px;
    color: #444;
  }

  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 150px;
  }

  .box img {
    width: 180px;
    height: 90px;
  }

  .box div {
    width: 180px;
    height: 90px;
    text-align: center;
  }

  .box button {
    color: #444;
    width: 80px;
    margin: 7px 2px;
  }

  .banner {
    position: relative;
  }

  .banner:after {
    content: "+";
    color: #ccc;
    line-height: 88px;
    font-size: 40px;
    font-weight: lighter;
    text-align: center;
    position: absolute;
    width: 180px;
    height: 90px;
    border: 1px #ccc dashed;
    box-sizing: border-box;
    left: 0;
    top: 0;
  }

  .select {
    position: relative;
  }

  .upload {
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

  @media(max-width: 1366px) {
    .box {
      padding: 30px 120px;
    }

    h1 {
      padding: 80px 120px 20px;
    }
  }

</style>
