<template>
  <div
    class="service"
    :style="{'background': fix && !admin ? '#fef5f5' : 'white'}"
  >
    <template v-if="!fix">
      <h1>服务流程</h1>
      <div class="order">
        <div>
          <img src="./assets/images/paper.svg">
          <p>通过网页或电话免费预约服务，碧樱客服记录基本联系信息。</p>
        </div>
        <div>
          <img src="./assets/images/ruler.svg">
          <p>碧樱设计师团队免费上门测量，与您面对面沟通深度了解需求，全程一对一服务。</p>
        </div>
        <div>
          <img src="./assets/images/copy.svg">
          <p>碧樱设计师提供多种优质解决方案，并与您一起核实尺寸、选定风格与摆放的位置，确认最终定制方案。</p>
        </div>
        <div>
          <img src="./assets/images/tools.svg">
          <p>碧樱安装团队免费上门安装，高品质售后服务，五年保修，终身维护。</p>
        </div>
      </div>
    </template>
    <template v-else="!fix">
      <h1 v-if="!admin">维护保养</h1>
      <div class="order" :class="{'inner': admin}">
        <div>
          <img src="./assets/images/paper.svg">
          <p v-if="!admin">{{data.part1}}</p>
          <input v-if="admin" v-model="maintain.part1" @change="save">
        </div>
        <div>
          <img src="./assets/images/leaf.svg">
          <p v-if="!admin">{{data.part2}}</p>
          <input v-if="admin" v-model="maintain.part2" @change="save">
        </div>
        <div>
          <img src="./assets/images/ruler.svg">
          <p v-if="!admin">{{data.part3}}</p>
          <input v-if="admin" v-model="maintain.part3" @change="save">
        </div>
        <div>
          <img src="./assets/images/tri.svg">
          <p v-if="!admin">{{data.part4}}</p>
          <input v-if="admin" v-model="maintain.part4" @change="save">
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'service',
    data () {
      return {
        maintain: {
          part1: '',
          part2: '',
          part3: '',
          part4: ''
        }
      }
    },
    methods: {
      save () {
        this.$emit('maintainSave', this.maintain)
      }
    },
    mounted () {
      this.maintain.part1 = this.data.part1 || ''
      this.maintain.part2 = this.data.part2 || ''
      this.maintain.part3 = this.data.part3 || ''
      this.maintain.part4 = this.data.part4 || ''
    },
    props: {
      fix: {
        type: Boolean,
        default: false
      },
      admin: {
        type: Boolean,
        default: false
      },
      data: {
        type: Object,
        default: function () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .service {
    width: 100%;
  }

  .service h1 {
    color: #444444;
    font-size: 32px;
    text-align: center;
    padding: 72px 0 60px;
  }

  .order {
    display: flex;
    padding: 0 150px;
    justify-content: space-between;
    align-items: baseline;
  }

  .inner {
    padding: 0;
  }

  .order > div {
    max-width: 240px;
    text-align: center;
  }

  .order input {
    width: 180px;
    height: 30px;
    margin: 20px 0;
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    padding: 0 15px;
    text-align: center;
  }

  .order > div > p {
    color: #636363;
    font-size: 16px;
    text-align: left;
    margin: 30px auto 100px;
    line-height: 2em;
  }

  @media (max-width: 1366px) {
    .order {
      padding: 0 120px;
    }

    .inner {
      padding: 0;
    }
  }
</style>
