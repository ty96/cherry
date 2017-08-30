<template>
  <div class="banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" class="swiper" :key="index">
        <img src="./banner.jpg">
      </swiper-slide>
    </swiper>
    <div class="pagination"></div>
    <div class="prev arr" slot="button-prev">&lt;</div>
    <div class="next arr" slot="button-next">&gt;</div>
  </div>
</template>

<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'

  export default {
    name: 'banner',

    components: {
      swiper,
      swiperSlide
    },

    data () {
      return {
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
        },
        swiperSlides: [1, 2, 3, 4, 5]
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
    font-family: sans-serif;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    top: 40%;
    position: absolute;
    font-size: 16px;
    font-weight: 900;
    color: white;
    border-radius: 50%;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.05);
    cursor: pointer;
    margin: 10px;
    user-select: none;
  }

  .arr:hover {
    width: 60px;
    height: 60px;
    line-height: 60px;
    transition: all 0.2s ease 0s;
    background: rgba(0, 0, 0, 0.15);
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }
</style>
