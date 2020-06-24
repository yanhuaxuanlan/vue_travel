<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
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
    data() {
        return {
            list:[
                {id:'1',imgUrl:'http://img.mukewang.com/5ef15e4e00010b0018720764.jpg'},
                {id:'2',imgUrl:'http://img.mukewang.com/5e74787600018d4218720764.jpg'},
                {id:'3',imgUrl:'http://img.mukewang.com/5eeb15170001b36418720764.jpg'}
            ],
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
}
</script>

<style lang="stylus" scoped>
  .wrapper>>> .swiper-pagination-bullet-active
      background-color #fff
  .wrapper
    width 100%
    height 0
    padding-bottom 41.25%
    .swiper-img
      width 100%
    

</style>