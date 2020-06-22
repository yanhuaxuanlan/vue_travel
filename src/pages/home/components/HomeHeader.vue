<template>
    <div class="header">
      <div class="header-left">
          <div class="iconfont nav-left">&#xe606;</div>
      </div>
      <div class="header-input"> 
          <span class="iconfont">&#xe60d;</span>
          输入城市/景点/主题</div>
      <div class="header-right">城市<span class="iconfont">&#xe60e;</span></div>
    </div>
</template>

<script>
export default {
    name:'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl';
    .header
        display flex
        line-height .88rem
        background $bgColor
        color #fff
        .header-left
            float: left
            width .64rem
            .nav-left
                text-align center
                font-size .4rem
        .header-input
            flex 1
            margin-top .12rem
            padding-left .2rem
            height .64rem
            line-height .64rem
            background #fff
            border-radius .1rem
            margin-left .2rem
            color #ccc
            text-align left 
        .header-right
            float: right
            width 1.24rem
            text-align center

</style>