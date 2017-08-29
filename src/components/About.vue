<template>
  <div>
    <CHeader></CHeader>
    <CTitle
      title="关于"
      desc="樱桃家具，真诚为您提供每一个细节服务"
    ></CTitle>
    <Creed :unique="true"></Creed>
    <Shop :unique="true"></Shop>
    <div class="desc" v-html="data"></div>
    <Wechat :join="true"></Wechat>
    <CFooter></CFooter>
  </div>
</template>

<script>
  import CHeader from './CHeader'
  import CTitle from './CTitle'
  import Creed from './Creed'
  import Sale from './Sale'
  import Shop from './Shop'
  import Wechat from './Wechat'
  import Service from './Service'
  import CFooter from './CFooter'

  export default {
    name: 'hello',

    components: {
      CHeader,
      CTitle,
      Creed,
      Sale,
      Shop,
      Wechat,
      Service,
      CFooter
    },

    data () {
      return {
        data: '<h1 style="color: pink">富文本编辑器内容 此为示例</h1>1. 客户接待：捕捉客户置家需求，达成高端家居用品销售工作；<br>2. 设计服务：深入了解客户生活方式，为顾客提供专业的个性化软装设计，并通过设计使家具及家居用品呈现顾客满意的效果；<br>3. 客情维护：与客户形成长期稳定、良好的互动关系，成为客户值得信赖的家居顾问，持续提升客户满意度，维护品牌美誉度。'
      }
    }
  }
</script>

<style scoped>
  .desc {
    padding: 40px 150px;
  }

  @media (max-width: 1366px) {
    .desc {
      padding: 40px 120px;
    }
  }
</style>
