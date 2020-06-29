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
  data() {
    return {
      dataList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        }
      ]
    };
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