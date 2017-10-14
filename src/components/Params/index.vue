<template>
  <div class="params">
    <div class="container" :class="{'inner': isAdmin}" @change="save">
      <h1 v-if="!isAdmin">产品参数</h1>
      <div class="box">
        <div class="item">
          <img src="./assets/images/param-a.svg">
          <h5>油漆工艺</h5>
          <p v-if="!isAdmin" v-html="data['油漆工艺']"></p>
          <input v-if="isAdmin" v-model="params.油漆工艺" @change="save">
        </div>
        <div class="item">
          <img src="./assets/images/param-b.svg">
          <h5>颜色</h5>
          <p v-if="!isAdmin" v-html="data['颜色']"></p>
          <input v-if="isAdmin" v-model="params.颜色" @change="save">
        </div>
        <div class="item">
          <img src="./assets/images/param-c.svg">
          <h5>发货时间</h5>
          <p v-if="!isAdmin" v-html="data['发货时间']"></p>
          <input v-if="isAdmin" v-model="params.发货时间" @change="save">
        </div>
        <div class="item">
          <img src="./assets/images/param-d.svg">
          <h5>物流配送</h5>
          <p v-if="!isAdmin" v-html="data['物流配送']"></p>
          <input v-if="isAdmin" v-model="params.物流配送" @change="save">
        </div>
        <div class="item">
          <img src="./assets/images/param-e.svg">
          <h5>质量保证</h5>
          <p v-if="!isAdmin" v-html="data['质量保证']"></p>
          <input v-if="isAdmin" v-model="params.质量保证" @change="save">
        </div>
        <div class="item">
          <img src="./assets/images/param-f.svg">
          <h5>环保评测</h5>
          <p v-if="!isAdmin" v-html="data['环保评测']"></p>
          <input v-if="isAdmin" v-model="params.环保评测" @change="save">
        </div>
        <div class="item">
          <img src="./assets/images/param-g.svg">
          <h5>尺寸</h5>
          <p v-if="!isAdmin" v-html="data['尺寸']"></p>
          <input v-if="isAdmin" v-model="params.尺寸" @change="save">
        </div>
        <div class="item">
          <img src="./assets/images/param-h.svg">
          <h5>材质</h5>
          <p v-if="!isAdmin" v-html="data['材质']"></p>
          <input v-if="isAdmin" v-model="params.材质" @change="save">
        </div>
        <div class="item">
          <img src="./assets/images/param-i.svg">
          <h5>拼接工艺</h5>
          <p v-if="!isAdmin" v-html="data['拼接工艺']"></p>
          <input v-if="isAdmin" v-model="params.拼接工艺" @change="save">
        </div>
        <div class="item">
          <img src="./assets/images/param-j.svg">
          <h5>安装需求</h5>
          <p v-if="!isAdmin" v-html="data['安装需求']"></p>
          <input v-if="isAdmin" v-model="params.安装需求" @change="save">
        </div>
        <div class="item">
          <img src="./assets/images/param-k.svg">
          <h5>款式</h5>
          <p v-if="!isAdmin" v-html="data['款式']"></p>
          <input v-if="isAdmin" v-model="params.款式" @change="save">
        </div>
        <div class="item">
          <img src="./assets/images/param-l.svg">
          <h5>生产周期</h5>
          <p v-if="!isAdmin" v-html="data['生产周期']"></p>
          <input v-if="isAdmin" v-model="params.生产周期" @change="save">
        </div>
      </div>
    </div>
    <div class="tips" v-if="!isAdmin">
      <div>
        <img src="./assets/images/direct.svg">
        <div>
          <h4>产地直供</h4>
          <p>世界名优供应商</p>
        </div>
      </div>
      <div>
        <img src="./assets/images/exchange.svg">
        <div>
          <h4>流程透明</h4>
          <p>产业链全打通</p>
        </div>
      </div>
      <div>
        <img src="./assets/images/factory.svg">
        <div>
          <h4>自有工厂</h4>
          <p>砍掉中间环节</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CButton from '../CButton'
  export default {
    name: 'params',

    components: {
      CButton
    },

    methods: {
      save () {
        this.$emit('paramsSave', this.params)
      }
    },
    mounted () {
      this.params.油漆工艺 = this.data.油漆工艺 || ''
      this.params.颜色 = this.data.颜色 || ''
      this.params.发货时间 = this.data.发货时间 || ''
      this.params.物流配送 = this.data.物流配送 || ''
      this.params.质量保证 = this.data.质量保证 || ''
      this.params.环保评测 = this.data.环保评测 || ''
      this.params.尺寸 = this.data.尺寸 || ''
      this.params.材质 = this.data.材质 || ''
      this.params.拼接工艺 = this.data.拼接工艺 || ''
      this.params.安装需求 = this.data.安装需求 || ''
      this.params.款式 = this.data.款式 || ''
      this.params.生产周期 = this.data.生产周期 || ''
    },

    data () {
      return {
        params: {
          油漆工艺: '',
          颜色: '',
          发货时间: '',
          物流配送: '',
          质量保证: '',
          环保评测: '',
          尺寸: '',
          材质: '',
          拼接工艺: '',
          安装需求: '',
          款式: '',
          生产周期: ''
        }
      }
    },

    props: {
      data: {
        type: Object,
        default: function () {
          return {}
        }
      },
      isAdmin: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 40px 150px;
  }

  .inner {
    padding: 20px 0;
  }

  .container h1 {
    color: #444;
    font-size: 32px;
    text-align: center;
    margin-bottom: 12px;
  }

  .box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .item {
    width: 240px;
    text-align: center;
  }

  .item img {
    width: 56px;
    height: 56px;
    margin-top: 38px;
  }

  .item h5 {
    color: #636363;
    font-size: 16px;
    margin: 28px auto 20px;
  }

  .item p {
    color: #999;
    font-size: 16px;
    margin-bottom: 27px;
  }

  .item input {
    width: 180px;
    height: 30px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    padding: 0 15px;
    text-align: center;
  }

  .tips {
    background: #fef5f5;
    padding: 40px 150px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .tips > div {
    width: 300px;
  }

  .tips > div > div {
    display: inline-block;
    vertical-align: middle;
  }

  .tips img {
    width: 50px;
    height: 50px;
    margin: auto 50px;
    display: inline-block;
    vertical-align: middle;
  }

  .tips h4 {
    color: #636363;
    font-size: 20px;
    margin-bottom: 22px;
  }

  .tips p {
    color: #999;
    font-size: 16px;
  }

  .button {
    margin: 30px;
    text-align: center;
  }

  @media (max-width: 1366px) {
    .container {
      padding: 40px 120px;
    }

    .tips {
      padding: 40px 120px;
    }
  }
</style>
