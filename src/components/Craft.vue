<template>
  <div>
    <CHeader></CHeader>
    <CTitle
      title="工艺"
      desc="来自樱桃家具的工艺保证，还原最优质实木体验"
    ></CTitle>
    <Wood></Wood>
    <Material :data="data"></Material>
    <CStyle></CStyle>
    <Shot :images="images" :title="title" :desc="desc"></Shot>
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
  import CStyle from './CStyle'
  import Wood from './Wood'
  import Shot from './Shot'
  import Material from './Material'

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
      CStyle,
      Wood,
      Shot,
      Material
    },

    data () {
      return {
        order: false,
        data: [
          {
            image: 'http://toxni.com/content/images/2017/07/--.png',
            title: '长润净味宝',
            desc: '“净味、环保、品质”。气味挥发速度快，漆膜干燥 24 小时后基本无气味，家具从此不再为气味问题所困扰，油漆完全采用进口树脂和固化剂，达到国家最新标准，具备超强的封闭性能，防止底材气味散发。保护您的肺，让呼吸自然。'
          },
          {
            image: 'http://toxni.com/content/images/2017/07/--.png',
            title: '长润净味宝',
            desc: '“净味、环保、品质”。气味挥发速度快，漆膜干燥 24 小时后基本无气味，家具从此不再为气味问题所困扰，油漆完全采用进口树脂和固化剂，达到国家最新标准，具备超强的封闭性能，防止底材气味散发。保护您的肺，让呼吸自然。'
          },
          {
            image: 'http://toxni.com/content/images/2017/07/--.png',
            title: '长润净味宝',
            desc: '“净味、环保、品质”。气味挥发速度快，漆膜干燥 24 小时后基本无气味，家具从此不再为气味问题所困扰，油漆完全采用进口树脂和固化剂，达到国家最新标准，具备超强的封闭性能，防止底材气味散发。保护您的肺，让呼吸自然。'
          },
          {
            image: 'http://toxni.com/content/images/2017/07/--.png',
            title: '长润净味宝',
            desc: '“净味、环保、品质”。气味挥发速度快，漆膜干燥 24 小时后基本无气味，家具从此不再为气味问题所困扰，油漆完全采用进口树脂和固化剂，达到国家最新标准，具备超强的封闭性能，防止底材气味散发。保护您的肺，让呼吸自然。'
          }
        ],
        images: [
          'http://toxni.com/content/images/2017/07/--.png',
          'http://toxni.com/content/images/2017/07/--.png',
          'http://toxni.com/content/images/2017/07/--.png',
          'http://toxni.com/content/images/2017/07/--.png',
          'http://toxni.com/content/images/2017/07/--.png',
          'http://toxni.com/content/images/2017/07/--.png'
        ],
        title: '工艺实拍',
        desc: 'M小姐别出心裁的将厨房“一分为二”，用窄边玻璃门作隔断，区分了中厨区与西厨区。双“一字型”的橱柜是为了配合户型而设计，充分利用了厨房内的空间。两边都有窗，让整个厨房的采光十分好。在中厨区有这样的金属挂杆和挂件，可以收纳一些常用的工具，也可以起到装饰的效果。将垃圾桶隐藏在橱柜里的设计，美观加成！垃圾桶的上面的拉篮还可以放一些当日就烧的菜与葱姜蒜这类。'
      }
    }
  }
</script>

<style scoped>

</style>
