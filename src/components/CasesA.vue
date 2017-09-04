<template>
  <div>
    <AHeader></AHeader>
    <h1>配件细节</h1>
    <div class="cards">
      <div class="card" v-for="(item, index) in total">
        <div class="select">
          <div
            @click="showDetail(index)"
            class="banner"
            style="margin: 0"
          >
            <img :src="image[index]">
          </div>
        </div>
        <div>
          <input placeholder="标题@label label label" v-model="input[index]">
          <button @click="showDetail(index)">Edit</button>
          <button @click="delItem(index)">Del</button>

          <textarea v-model="desc1[index]">
            这里填充简介，上面填充标题和 label。标题与 label 用 @ 分割，label 与 label 之间用空格分割，形如『标题@label babel』即可。
          </textarea>
        </div>
      </div>
    </div>
    <p class="button" @click="">
      <a @click="appendItem"><CButton color="pink" text="新增项目"></CButton></a>
    </p>

    <!--detail-->

    <div class="detail" v-if="detail">
      <span class="close" @click="hideDetail">x</span>
      <h1>{{input[now] && input[now].split('@')[0]}} 案例详情 </h1>
      <div>
        <p>标题: </p><input placeholder="标题@label label label" v-model="input[now]">

        <p>标题简述: </p>
        <textarea v-model="desc1[now]">
          这里填充简介，上面填充标题和 label。标题与 label 用 @ 分割，label 与 label 之间用空格分割，形如『标题@label babel』即可。
        </textarea>
      </div>

      <p>题图: </p>
      <div class="select">
        <span class="upload" v-if="uploadBtn.indexOf('main' + now) + 1" @click="upload('main' + now)">上传</span>
        <span class="success" v-if="uploadSuc.indexOf('main' + now) + 1">成功</span>
        <picture-input
          :ref="'main' + now"
          @change="onChange('main' + now)"
          width="180"
          height="180"
          margin="0"
          class="banner"
          style="margin: 0"
          accept="image/*"
          size="10"
          buttonClass="btn"
          removeButtonClass="btn"
          :prefill="image[now]"
          :plain="true"
          :removable="true"
          :customStrings="{
            change: 'Change',
            remove: 'Remove'
          }"
        >
        </picture-input>
      </div>

      <p>总体描述: </p><input placeholder="总体描述" v-model="desc2">
      <p>户型图片: </p>
      <div class="select">
        <span class="upload" v-if="uploadBtn.indexOf('house') + 1" @click="upload('house')">上传</span>
        <span class="success" v-if="uploadSuc.indexOf('house') + 1">成功</span>
        <picture-input
          ref="house"
          @change="onChange('house')"
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
      <p>户型描述: </p>
      <input placeholder="户型描述" v-model="houseDesc">

      <div class="instances">
        <div class="instance" v-for="(item, index) in insNum">
          <p>户型实例<button class="del" @click="delInstance">删除该项</button></p>
          <p>实例标题: </p>
          <input placeholder="实例标题" v-model="insTitle[index]">
          <p>实例描述: </p>
          <input placeholder="实例描述" v-model="instance[index]">
          <p>实例价格: </p>
          <input placeholder="实例价格" v-model="price[index]">
          <p>价格备注: </p>
          <input placeholder="价格备注" v-model="priceInfo[index]">
          <div class="images">
            <div class="select">
              <span class="upload" v-if="uploadBtn.indexOf('insA' + index) + 1" @click="upload('insA' + index)">上传</span>
              <span class="success" v-if="uploadSuc.indexOf('insA' + index) + 1">成功</span>
              <picture-input
                :ref="'insA' + index"
                @change="onChange('insA' + index)"
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
            <div class="select">
              <span class="upload" v-if="uploadBtn.indexOf('insB' + index) + 1" @click="upload('insB' + index)">上传</span>
              <span class="success" v-if="uploadSuc.indexOf('insB' + index) + 1">成功</span>
              <picture-input
                :ref="'insB' + index"
                @change="onChange('insB' + index)"
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
            <div class="select">
              <span class="upload" v-if="uploadBtn.indexOf('insC' + index) + 1" @click="upload('insC' + index)">上传</span>
              <span class="success" v-if="uploadSuc.indexOf('insC' + index) + 1">成功</span>
              <picture-input
                :ref="'insC' + index"
                @change="onChange('insC' + index)"
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
            <div class="select">
              <span class="upload" v-if="uploadBtn.indexOf('insD' + index) + 1" @click="upload('insD' + index)">上传</span>
              <span class="success" v-if="uploadSuc.indexOf('insD' + index) + 1">成功</span>
              <picture-input
                :ref="'insD' + index"
                @change="onChange('insD' + index)"
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
          </div>
        </div>
      </div>

      <p class="button" @click="addInstance"><CButton color="pink" text="增加一项"></CButton></p>
      <p>樱桃建议: </p><input placeholder="户型描述" v-model="suggestion">
      <p class="submit" @click="save"><CButton color="#333" text="保存 & 提交"></CButton></p>
    </div>
    <div class="mask" v-if="detail" @click="hideDetail"></div>
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
    name: 'cases-admin',
    data () {
      return {
        now: 0,
        total: 3,
        insNum: 2,
        uploadBtn: '',
        uploadSuc: '',
        detail: false,
        input: [],
        title: [],
        labels: [],
        desc1: [],
        image: [],
        desc2: '',
        houseDesc: '',
        houseImage: '',
        suggestion: '',
        price: [],
        priceInfo: [],
        instance: [],
        insTitle: [],
        images: [],
        cid: -1,
        data: []
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
        fetch(`${root}client/caseIndex/`, {
          method: 'GET',
          credentials: 'include'
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (!data.error) {
              this.data = data.body
              for (let i = 0; i < this.data.length; i++) {
                this.total = this.data.length
                this.image[i] = this.data[i].image_cover
                this.desc1[i] = this.data[i].desc
                this.input[i] = this.data[i].title + '@' + this.data[i].labels.join(' ')
              }
            }
          })
      },
      del (e) {
        const image = e.target.parentNode.parentNode.childNodes[0].src.split('/').pop()
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
            console.log(data)
            // TODO refresh()
          })
      },
      onChange (e) {
        if (this.$refs[e].image || this.$refs[e][0].image) {
          this.uploadBtn = this.uploadBtn + e
        } else {
          alert('您的浏览器不支持 FileReader API')
        }
      },
      upload (e) {
        let formData = new FormData()
        const image = this.$refs[e].file || this.$refs[e][0].file
        formData.append('image', image)
        fetch(`${root}backend/shot/upload/`, {
          method: 'POST',
          credentials: 'include',
          body: formData
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (!data.error) {
              let arr = []
              let num = e.match(/[0-9]/) || 0
              if (e.indexOf('main') !== -1) {
                this.image[num] = data.body.url
                console.log(this.image)
              } else if (e.indexOf('house') !== -1) {
                this.houseImage = data.body.url
              } else if (e.indexOf('insA') !== -1) {
                arr[0] = data.body.url
              } else if (e.indexOf('insB') !== -1) {
                arr[1] = data.body.url
              } else if (e.indexOf('insC') !== -1) {
                arr[2] = data.body.url
              } else if (e.indexOf('insD') !== -1) {
                arr[3] = data.body.url
              }
              this.images[num] = arr
              this.uploadBtn.replace(e, '')
              this.uploadSuc = this.uploadSuc + e
              console.log(this.images)
            }
            // TODO refresh()
          })
      },
      hideDetail () {
        this.detail = false
      },
      showDetail (i) {
        this.now = i
        this.cid = this.data[i].cid
        fetch(`${root}client/caseDetail/?cid=${this.cid}`, {
          method: 'GET',
          credentials: 'include'
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            if (!data.error) {
              this.desc2 = data.body.desc2
              this.houseDesc = data.body.style.desc
              this.houseImage = data.body.style.image
              this.suggestion = data.body.advise
              this.detail = true
            }
          })
      },
      appendItem () {
        this.now = this.total + 1
        this.cid = -1
        this.detail = true
      },
      delItem (e) {
        if (confirm('确定删除该项吗？')) {
          let formData = new FormData()
          const cid = this.data[e].cid
          formData.append('cid', cid)
          fetch(`${root}backend/case/delete/`, {
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
              // TODO refresh()
            })
        }
      },
      save () {
        let info = {}
        let style = {}
        let instances = []

        info.title = this.input[this.now] && this.input[this.now].split('@')[0] || ''
        info.labels = this.input[this.now] && this.input[this.now].split('@')[1].split(' ') || []
        info.desc1 = this.desc1[this.now] || ''
        info.desc2 = this.desc2
        info.image_cover = this.image[this.now] || ''
        if (this.cid > -1) {
          info.cid = this.cid
        }
        console.log(info)

        style.image = this.houseImage
        style.desc = this.houseDesc

        info.style = style
        info.instances = instances

        for (let i = 0; i < this.insNum; i++) {
          let ins = {}
          ins.title = this.insTitle[i]
          ins.desc = this.instance[i]
          ins.price = this.price[i]
          ins.price_desc = this.priceInfo[i]
          ins.images = this.images[i] || ['', '', '', '']
          info.instances.push(ins)
        }
        info.advise = this.suggestion

        let formData = new FormData()
        formData.append('info', JSON.stringify(info))

        if (!info.image_cover) {
          fetch(this.cid > -1 ? `${root}backend/case/modified/` : `${root}backend/case/new/`, {
            method: 'POST',
            credentials: 'include',
            body: formData
          })
            .then((res) => {
              return res.json()
            })
            .then((data) => {
              console.log(data)
              this.hideDetail()
              window.location.reload()
            })
        } else {
          alert('请先点击图片右上角上传图片 题图为必选项 未成功上传的图片不会保存')
        }
      },
      addInstance () {
        this.insNum++
      },
      delInstance (e) {
        let parent = e.target.parentNode.parentNode
        parent.style.display = confirm('确定删除该项吗？') ? 'none' : 'block'
        this.insNum--
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
    width: 200px;
    display: inline-block;
    height: 28px;
    line-height: 28px;
    font-size: 20px;
    margin: 10px 10px 20px 10px;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
    outline: none;
  }

  .card button {
    width: 30px;
    display: inline-block;
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
    line-height: 20px;
  }

  .banner {
    position: relative;
  }

  .banner img {
    height: 180px;
    width: 180px;
    z-index: 11111;
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
    height: 220px;
    position: relative;
    vertical-align: top;
  }

  .upload,
  .success{
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

  .success {
    color: white;
    background: green;
    cursor: not-allowed;
  }

  .detail {
    width: 1040px;
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -520px;
    margin-bottom: 30px;
    background: white;
    border: 1px solid #efefef;
    border-radius: 15px;
    z-index: 99999;
    padding: 0 40px 40px;
    box-sizing: border-box;
    overflow: hidden scroll;
  }

  .detail h1 {
    text-align: center;
  }

  .detail p {
    margin: 15px 0;
  }

  .detail input {
    width: 960px;
    height: 50px;
    padding: 0 20px;
    font-size: 14px;
    box-sizing: border-box;
    outline: none;
    border-radius: 10px;
    border: 1px solid #efefef;
  }

  .detail textarea {
    width: 960px;
    height: 120px;
    padding: 10px 20px;
    font-size: 14px;
    box-sizing: border-box;
    outline: none;
    border-radius: 10px;
    border: 1px solid #efefef;
  }

  .detail .submit {
    margin: 50px 30px -20px;
    text-align: center;
  }

  .detail .select {
    width: 180px;
    display: inline-block;
    margin: 20px auto;
  }

  .images {
    width: 960px;
    height: 240px;
  }

  .images .select {
    width: 180px;
    display: inline-block;
    margin: 20px 75px 20px 0;
  }

  .images .select:last-child {
    margin-right: 0;
  }

  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99998;
  }

  .close {
    position: absolute;
    font-family: sans-serif;
    font-size: 32px;
    color: #eee;
    right: 30px;
    top: 20px;
    user-select: none;
    cursor: pointer;
  }

  .instance {
    margin-top: 100px;
  }

  .del {
    float: right;
    width: 100px;
    margin-top: 5px;
  }

  @media(max-width: 1366px) {
    h1 {
      padding: 30px 120px;
    }

    .cards {
      padding: 20px 120px;
    }
  }
</style>
