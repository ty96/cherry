<template>
  <div class="admin">
    <AHeader></AHeader>
    <h1>首页 Banner</h1>
    <div class="box">
      <div v-for="(item, index) in banner" :key="index">
        <img :src="item">
        <button @click="del(item, 'banner')">Remove</button>
        <a :download="item.split('?')[0]" :href="item.split('?')[0]"><button>Download</button></a>
      </div>
      <div class="select">
        <span class="upload" v-if="uploadBanner" @click="upload('banner')">上传</span>
        <picture-input
          ref="bannerInput"
          @change="onChange('bannerInput')"
          @remove="onRemove"
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
      <div class="blank"></div>
      <div class="blank"></div>
      <div class="blank"></div>
      <div class="blank"></div>
      <div class="blank"></div>
      <div class="blank"></div>
    </div>

    <h1>优品热卖</h1>
    <div class="box">
      <div v-for="(item, index) in sale" :key="index">
        <img :src="item">
        <button @click="del(item, 'hotsale')">Remove</button>
        <a :download="item.split('?')[0]" :href="item.split('?')[0]"><button>Download</button></a>
      </div>
      <div class="select">
        <span class="upload" v-if="uploadSale" @click="upload('hotsale')">上传</span>
        <picture-input
          ref="saleInput"
          @change="onChange('saleInput')"
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
  import CFooter from './CFooter'
  import PictureInput from 'vue-picture-input'
  import 'whatwg-fetch'
  import { root } from '../utils'

  export default {
    name: 'home-admin',
    data () {
      return {
        uploadBanner: false,
        uploadSale: false,
        banner: [],
        sale: []
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
    mounted () {
      this.request()
    },
    methods: {
      request () {
        fetch(`${root}client/homeIndex/`, {
          method: 'GET',
          credentials: 'include'
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (!data.error) {
              this.banner = data.body.banner
              this.sale = data.body.hotsale
            }
          })
      },
      onChange (type) {
        if (this.$refs[type].image) {
          if (type === 'bannerInput') {
            this.uploadBanner = true
          } else if (type === 'saleInput') {
            this.uploadSale = true
          }
        } else {
          alert('您的浏览器不支持 FileReader API')
        }
      },
      onRemove () {
        this.uploadBanner = false
        this.uploadSale = false
      },
      upload (type) {
        let formData = new FormData()
        if (type === 'banner') {
          const image = this.$refs.bannerInput.file
          formData.append('image', image)
        } else if (type === 'hotsale') {
          const image = this.$refs.saleInput.file
          formData.append('image', image)
        }
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
              alert('上传成功！')
              window.location.reload()
            }
          })
      },
      del (item, type) {
        if (confirm('确定删除吗？')) {
          let formData = new FormData()
          const filename = item.split('/').pop().split('?')[0]
          formData.append('filename', filename)
          fetch(`${root}backend/${type}/delete/`, {
            method: 'POST',
            credentials: 'include',
            body: formData
          })
            .then((res) => {
              return res.json()
            })
            .then((data) => {
              if (!data.error) {
                alert('删除成功')
                window.location.reload()
              }
            })
        }
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
    padding: 20px 150px;
    justify-content: space-between;
  }

  .box img {
    width: 180px;
    height: 90px;
  }

  .box div {
    width: 180px;
    height: 90px;
    text-align: center;
    margin: 40px 10px;
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

  .box .blank {
    height: 0;
    margin: 0 10px;
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
