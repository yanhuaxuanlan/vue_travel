<template>
  <div>
    <div class="weekend-header">周末去哪</div>
    <ul>
      <li v-for="item in recommendList" :key="item.id">
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
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg",
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

.weekend-header {
  margin-top: 0.2rem;
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