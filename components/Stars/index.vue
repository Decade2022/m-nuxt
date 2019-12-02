<template>
  <div>
    <template>
      <div class="star">
        <span v-for="(item,index) in itemClasslass"
              class="star-item"
              :key="index"
              :class="item"></span>
      </div>
    </template>
  </div>
</template>

<script>
const lengths = 5;
const starOn = 'on';
const starHalf = 'half';
const starOff = 'off';

export default ({
  data () {
    return {

    }
  },
  props: {
    score: {//分数
      type: Number,
      default: function () {
        return 5
      }
    }
  },
  created () {
  },
  computed: {
    itemClasslass () {//星星的数组
      let result = [];
      let score = Math.floor(this.score * 2) / 2; //例如：把分数处理成在4.5以上及4.5就变成向上取整5，在4.5以下就变成4.5


      //是否需要半星
      let starhalf = score % 1 != 0 ? true : false;

      //几颗全星
      let fullstar = Math.floor(score);
      for (var i = 0; i < fullstar; i++) {//放全星
        result.push(starOn);
      }
      if (starhalf) {//放半星
        result.push(starHalf)
      }
      if (result.length < lengths) {//如果没有满到五个星就用灰色的星星补齐9
        var offstar = lengths - result.length;
        for (var i = 0; i < offstar; i++) {
          result.push(starOff);
        }
      };
      return result;
    }
  }
})
</script>
<style scoped  lang="stylus">
.star
  .star-item
    display inline-block
    background-repeat no-repeat
    width 20px
    height 20px
    margin-right 22px
    background-size 20px 20px
    &:last-child
      margin-right 0
    &.on
      bg-image('on')
      /* 这个是在公用的stylus中的方法：
      　　bg-image($url)
      　　　　background-image url("../../assets/images/" + $url + "@2x.png")
      */
    &.half
      bg-image('half')
    &.off
      bg-image('off')
</style>