<template>
  <div class="sale">
    <h1>优品热卖</h1>
    <div class="box" :style="{'margin-left': margin - 60 + 'px'}">
      <swiper :options="swiperOption">
        <swiper-slide class="swiper" v-for="(item, index) in sale" :key="index">
          <img :src="item">
        </swiper-slide>
      </swiper>
    </div>
    <div class="arr prev" :style="{'left': margin - 60 + 'px'}" slot="button-prev">&lt;</div>
    <div class="arr next" :style="{'right': margin - 60 + 'px'}"  slot="button-next">&gt;</div>
    <a href="#/products"><p class="more"><CButton text="更多优品"></CButton></p></a>
  </div>
</template>

<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'

  import CButton from '../CButton'
  import { root } from '../../utils'
  import 'whatwg-fetch'

  export default {
    name: 'sale',

    components: {
      CButton,
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
              this.sale = data.body.hotsale
            }
          })
      }
    },

    data () {
      return {
        margin: window.innerWidth <= 1366 ? parseInt((window.innerWidth - 1140) / 8) + 190 : parseInt((window.innerWidth - 1260) / 8) + 210,
        swiperOption: {
          autoplay: 2500,
          setWrapperSize: true,
          grabCursor: true,
          prevButton: '.prev',
          nextButton: '.next',
          spaceBetween: 60,
          width: window.innerWidth / 3 * 2,
          loop: true,
          loopAdditionalSlides: 5,
          slidesPerView: 2,
          speed: 1000
        },
        sale: []
      }
    }
  }
</script>

<style scoped>
  .sale {
    overflow: hidden;
    position: relative;
    height: 600px;
    background: #fef5f5;
  }

  .swiper {
    text-align: center;
    display: inline-block;
  }

  .sale h1 {
    color: #444;
    font-size: 32px;
    margin: 60px auto 76px;
    text-align: center;
  }

  .swiper img {
    width: 420px;
    height: 240px;
    margin-right: -60px;
  }

  .arr {
    font-family: sans-serif;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    top: 45%;
    position: absolute;
    font-size: 16px;
    font-weight: 900;
    color: #636363;
    border-radius: 50%;
    border: 2px solid #636363;
    overflow: hidden;
    background: white;
    cursor: pointer;
    margin: 10px;
    user-select: none;
  }

  .arr:hover {
    width: 60px;
    height: 60px;
    line-height: 60px;
    transition: all 0.2s ease 0s;
  }

  .more {
    margin: 70px;
    text-align: center;
  }

  @media (max-width: 1366px) {
    .swiper img {
      width: 380px;
      height: 210px;
    }

    .arr {
      top: 43%;
    }
  }
</style>
