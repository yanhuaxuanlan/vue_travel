<template>
  <div>
    <div class="weekend-header">周末去哪</div>
    <ul>
      <li v-for="item in weekendList" :key="item.id">
        <div class="img-container">
          <img
          class="img-content"
            :src="item.imgUrl"
          />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props:{
    weekendList:Array
  }
};
</script>


<style lang="stylus" scoped>
@import '~style/mixins.styl';

.weekend-header {
  background-color: #eee;
  line-height: 0.8rem;
  text-indent: 0.2rem;
}
.img-content{
    width 100%
}

.item-info {
  padding: 0.1rem;
}

.item-title {
  font-size: 0.32rem;
}

.item-desc {
  font-size: 0.24rem;
  color: #ccc;
  margin-top: 0.1rem;
}
</style>