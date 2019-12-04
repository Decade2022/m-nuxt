<template>
  <div>
    <div class="header-wrap"
         :style='{background:backgroundColor}'>
      <div class="header-input">
        <img src="/img/search_img.png"
             class="search-icon">
        <div class="header-input-text"> 大家都在搜"眼部综合"</div>
      </div>
      <div class="swiper-wrap">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="banner in bannerData"
                 :key='banner.banner_id'>
              <a :href="banner.detail.target">
                <img :src="banner.detail.image"
                     class="banner"
                     :backgroundColor="banner.detail.background">
              </a>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { banner } from '~/api/home.js';
export default {
  data () {
    var that = this
    return {
      bannerData: [],
      backgroundColor: '',
      swiperOption: {
        loop: true,
        centeredSlides: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        },
        on: {
          //轮播图滚动
          slideChange () {
            that.backgroundColor = this.imagesToLoad[this.activeIndex].getAttribute("backgroundColor")
          },
          //轮播图点击
          // tap () {
          //   console.log('onTap', this);
          // }
        }
      }
    }
  },
  created () {
    this.bannerData.forEach(item => {
      var index = item.detail.target.indexOf('=')
      var text = item.detail.target.slice(index + 1)
      item.detail.target = text
    })
  },
  async asyncData ({ params }) {
    let [bannerData] = await Promise.all([
      banner("home_swiper_new").then((res) => {
        return res.data.data
      })
    ])
    return {
      bannerData: bannerData
    }
  }
}
</script>
<style scoped  lang="scss">
.header-wrap {
  width: 100%;
  height: 1.8rem;
  background: rgb(72, 132, 243);
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  border-top: 1px solid rgba(0, 0, 0, 0);
  box-sizing: border-box;
  position: relative;
}
.header-input {
  width: 3.39rem;
  height: 0.3rem;
  border-radius: 0.15rem;
  margin: 0 auto;
  background: #fff;
  margin-top: 0.1rem;
  position: relative;
  .search-icon {
    width: 0.14rem;
    height: 0.14rem;
    position: absolute;
    left: 0.2rem;
    top: 0.075rem;
  }
}
.header-input-text {
  width: 1.21rem;
  height: 0.16rem;
  font-size: 0.11rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666;
  line-height: 0.3rem;
  margin-left: 0.42rem;
}
.swiper-wrap {
  width: 3.45rem;
  height: 1.3rem;
  border-radius: 0.08rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rem 0.05rem 0.13rem -0.04rem rgba(0, 0, 0, 0.12);
  position: absolute;
  top: 0.69rem;
  left: 0.15rem;
}
.swiper-wrapper,
.swiper-slide,
.banner {
  width: 3.45rem;
  height: 1.3rem;
  border-radius: 0.08rem;
}
</style>