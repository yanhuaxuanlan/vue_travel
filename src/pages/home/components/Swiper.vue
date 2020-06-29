<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
          <!-- slides -->
    <swiper-slide v-for="item in list" :key="item.id">
      <img :src="item.imgUrl" class="swiper-img">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    props:{
      list:Array
    },
    data() {
        return {
            swiperOption: {
            autoplay: 1000,
            initialSlide: 1,
            loop: true,
            pagination: '.swiper-pagination',
          //   onSlideChangeEnd: swiper => {
          //   console.log('onSlideChangeEnd', swiper.realIndex)
          // }
        }

        }
    },
    computed:{
      showSwiper(){
        return this.list.length
      }
    }
}
</script>

<style lang="stylus" scoped>
  .wrapper>>> .swiper-pagination-bullet-active
      background-color #fff
  .wrapper
    width 100%
    height 0
    padding-bottom 31.7%
    .swiper-img
      width 100%
    

</style>