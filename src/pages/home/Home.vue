
<template>
    <div>
      <home-header :city = "city"></home-header>
      <home-swiper :list = "swiperList"></home-swiper>
      <home-icons :iconList = "iconList"></home-icons>
      <home-recommend :dataList = 'recommendList'></home-recommend>
      <home-weekend :weekendList = 'weekendList'></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data() {
        return {
            city:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods:{
        getHomeInfo (){
            axios.get('/static/mock/index.json').then(this.getHomeInfoSucc)
        
        },
        getHomeInfoSucc(res){
            if(res.data.ret && res.data){
                const data = res.data.data
                this.city = data.city
                this.swiperList = data.swiperList
                this.iconList =data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
           
        }
    },
    mounted() {
        this.getHomeInfo()
    }

}
</script>

<style>
 </style>