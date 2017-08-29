<template>
  <div>
    <CHeader @showOrder="showOrder"></CHeader>
    <Order :show="order" :form="true"></Order>
    <CTitle
      title="人才招聘"
      desc="招聘优秀人才，让樱桃家居不断成长"
    ></CTitle>
    <Recruit v-for="(item, index) in data" :data="item" :pink="index % 2" :id="item.id" :key="index"></Recruit>
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
  import Recruit from './Recruit'
  import Order from './Order'

  export default {
    name: 'join',

    components: {
      CHeader,
      CTitle,
      Creed,
      Sale,
      Shop,
      Wechat,
      Service,
      CFooter,
      Recruit,
      Order
    },

    methods: {
      showOrder (bool) {
        this.order = bool
      }
    },

    data () {
      return {
        order: false,
        data: [
          {
            name: '家具顾问',
            detail: [
              {
                title: '职责内容',
                desc: '1. 客户接待：捕捉客户置家需求，达成高端家居用品销售工作；<br>2. 设计服务：深入了解客户生活方式，为顾客提供专业的个性化软装设计，并通过设计使家具及家居用品呈现顾客满意的效果；<br>3. 客情维护：与客户形成长期稳定、良好的互动关系，成为客户值得信赖的家居顾问，持续提升客户满意度，维护品牌美誉度。'
              },
              {
                title: '职责内容',
                desc: '1. 客户接待：捕捉客户置家需求，达成高端家居用品销售工作；<br>2. 设计服务：深入了解客户生活方式，为顾客提供专业的个性化软装设计，并通过设计使家具及家居用品呈现顾客满意的效果；<br>3. 客情维护：与客户形成长期稳定、良好的互动关系，成为客户值得信赖的家居顾问，持续提升客户满意度，维护品牌美誉度。'
              }
            ]
          },
          {
            name: '家具顾问',
            detail: [
              {
                title: '职责内容',
                desc: '1. 客户接待：捕捉客户置家需求，达成高端家居用品销售工作；<br>2. 设计服务：深入了解客户生活方式，为顾客提供专业的个性化软装设计，并通过设计使家具及家居用品呈现顾客满意的效果；<br>3. 客情维护：与客户形成长期稳定、良好的互动关系，成为客户值得信赖的家居顾问，持续提升客户满意度，维护品牌美誉度。'
              },
              {
                title: '职责内容',
                desc: '1. 客户接待：捕捉客户置家需求，达成高端家居用品销售工作；<br>2. 设计服务：深入了解客户生活方式，为顾客提供专业的个性化软装设计，并通过设计使家具及家居用品呈现顾客满意的效果；<br>3. 客情维护：与客户形成长期稳定、良好的互动关系，成为客户值得信赖的家居顾问，持续提升客户满意度，维护品牌美誉度。'
              }
            ]
          },
          {
            name: '家具顾问',
            detail: [
              {
                title: '职责内容',
                desc: '1. 客户接待：捕捉客户置家需求，达成高端家居用品销售工作；<br>2. 设计服务：深入了解客户生活方式，为顾客提供专业的个性化软装设计，并通过设计使家具及家居用品呈现顾客满意的效果；<br>3. 客情维护：与客户形成长期稳定、良好的互动关系，成为客户值得信赖的家居顾问，持续提升客户满意度，维护品牌美誉度。'
              },
              {
                title: '职责内容',
                desc: '1. 客户接待：捕捉客户置家需求，达成高端家居用品销售工作；<br>2. 设计服务：深入了解客户生活方式，为顾客提供专业的个性化软装设计，并通过设计使家具及家居用品呈现顾客满意的效果；<br>3. 客情维护：与客户形成长期稳定、良好的互动关系，成为客户值得信赖的家居顾问，持续提升客户满意度，维护品牌美誉度。'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style>

</style>
