<template>
  <div>
    <CHeader @showOrder="showOrder"></CHeader>
    <Order :show="order" :form="true"></Order>
    <CTitle
      :height="360"
      :unique="true"
      title="实木的优雅简美风"
      desc="以白色为之，再搭配少部分小面积亮眼的颜色，兼顾了整体观感和谐，又不会显得寡淡"
    ></CTitle>
    <Shot :images="images" :small="true" :title="title" :price="price" :info="info" :desc="desc"></Shot>
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
  import Shot from './Shot'
  import Order from './Order'

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
      CFooter,
      Shot,
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
        images: [
          'http://toxni.com/content/images/2017/07/--.png',
          'http://toxni.com/content/images/2017/07/--.png',
          'http://toxni.com/content/images/2017/07/--.png',
          'http://toxni.com/content/images/2017/07/--.png'
        ],
        title: '实木厨房家具 美纳你的烹饪习惯',
        desc: 'M小姐别出心裁的将厨房“一分为二”，用窄边玻璃门作隔断，区分了中厨区与西厨区。双“一字型”的橱柜是为了配合户型而设计，充分利用了厨房内的空间。两边都有窗，让整个厨房的采光十分好。在中厨区有这样的金属挂杆和挂件，可以收纳一些常用的工具，也可以起到装饰的效果。将垃圾桶隐藏在橱柜里的设计，美观加成！垃圾桶的上面的拉篮还可以放一些当日就烧的菜与葱姜蒜这类。',
        price: '¥ 30,000',
        info: '包含厨房区域所有家具'
      }
    }
  }
</script>

<style>

</style>
