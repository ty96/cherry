<template>
  <div class="sale">
    <h1>优品热卖</h1>
    <div class="box">
      <swiper :options="swiperOption" :not-next-tick="notNextTick">
        <swiper-slide class="swiper" v-for="(slide, index) in swiperSlides" :key="index">
          <img src="./banner.jpg">
        </swiper-slide>
      </swiper>
    </div>
    <div class="arr prev" :style="{'left': margin + 'px'}" slot="button-prev">&lt;</div>
    <div class="arr next" :style="{'right': margin + 'px'}"  slot="button-next">&gt;</div>
    <a href="#/products"><p class="more"><CButton text="更多优品"></CButton></p></a>
  </div>
</template>

<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'

  import CButton from '../CButton'

  export default {
    name: 'sale',

    components: {
      CButton,
      swiper,
      swiperSlide
    },

    data () {
      return {
        margin: ((window.innerWidth - 180) / 6).toFixed(0) - 38,
        swiperOption: {
          autoplay: 2500,
          setWrapperSize: true,
          grabCursor: true,
          prevButton: '.prev',
          nextButton: '.next',
          spaceBetween: 60,
          width: ((window.innerWidth - 180) / 3).toFixed(0) * 2 + 60,
          loop: true,
          loopAdditionalSlides: 5,
          slidesPerView: 2,
          speed: 1000
        },
        swiperSlides: [1, 2, 3, 4, 5]
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
    display: inline-block;
  }

  .sale h1 {
    color: #444;
    font-size: 32px;
    margin: 60px auto 76px;
    text-align: center;
  }

  .box {
    margin-left: -210px;
  }

  .swiper img {
    width: 420px;
    height: 240px;
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
</style>
