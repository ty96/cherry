<template>
  <div class="banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in banner" class="swiper" :key="index">
        <img :src="item">
      </swiper-slide>
    </swiper>
    <div class="pagination"></div>
    <div class="prev arr" slot="button-prev"><img src="../../assets/left.svg"></div>
    <div class="next arr" slot="button-next"><img src="../../assets/right.svg"></div>
  </div>
</template>

<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import { root } from '../../utils'
  import 'whatwg-fetch'

  export default {
    name: 'banner',

    components: {
      swiper,
      swiperSlide
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
              document.getElementsByTagName('body')[0].style.opacity = 1
            }
          })
      }
    },

    data () {
      return {
        banner: [],
        swiperOption: {
          autoplay: 2500,
          setWrapperSize: true,
          grabCursor: true,
          pagination: '.pagination',
          paginationType: 'fraction',
          prevButton: '.prev',
          nextButton: '.next',
          paginationClickable: true,
          loop: true,
          speed: 1000
        }
      }
    }
  }
</script>

<style>
  .banner {
    overflow-x: hidden;
    position: relative;
  }

  .swiper {
    display: inline-block;
  }

  .swiper img {
    width: 100%;
  }

  .pagination {
    position: absolute;
    left: 50%;
    bottom: 15px;
    margin-left: -8px;
    color: white;
    stroke: 1px;
    font-family: sans-serif;
    user-select: none;
  }

  .arr {
    width: 50px;
    height: 50px;
    top: 40%;
    position: absolute;
    overflow: hidden;
    cursor: pointer;
    margin: 10px;
  }

  .arr img {
    width: 50px;
    height: 50px;
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }
</style>
