<template>
  <div>
    <div class="recommend-header">最新推荐</div>
    <ul>
      <li>
        <div class="list-item border-bottom" v-for="item in dataList" :key="item.id">
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-btn">查看详情</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    dataList:Array
  }
};
</script>


<style lang="stylus" scoped>
@import '~style/mixins.styl';

.recommend-header {
  margin-top: 0.2rem;
  background-color: #eee;
  line-height: 0.8rem;
  text-indent: 0.2rem;
}

.list-item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.2rem;
  }

  .item-info {
    padding: 0.2rem;
    flex: 1;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .item-btn {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background-color: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>