<template>
  <div>
    <footer class="footer">
      <ul>
        <li v-for="item in select"
            :key="item.text"
            @click="addClassName(item)"
            :class="{active:item.router === $nuxt.$route.path}">
          <div v-if="item.active">
            <img :src="item.img"
                 class="firsh">
            <img :src="item.active"
                 class="last">
            <p :style="{cursor:'default'}">{{item.text}}</p>
          </div>
          <div v-else>
            <div class="footer-add"
                 :style="{cursor:'default'}">{{item.text}}</div>
          </div>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>

export default {
  data () {
    return {
      select: [
        { text: '首页', active: '/img/tab/home_select.png', img: '/img/tab/home.png', router: '/page/home' },
        { text: '商城', active: '/img/tab/buy_select.png', img: '/img/tab/buy.png', router: '/page/market' },
        { text: '+', router: '/release' },
        { text: '消息', active: '/img/tab/diary_select.png', img: '/img/tab/diary.png', router: '/page/news' },
        { text: '我的', active: '/img/tab/mine_select.png', img: '/img/tab/mine.png', router: '/page/my' }
      ],
    }
  },
  methods: {
    addClassName: function (i) {
      this.$router.push(i.router)
    },
  }
}

</script>
<style scoped  lang="scss">
.footer {
  width: 100%;
  height: 0.49rem;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ccc;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.035rem;
    li {
      div {
        display: flex;
        flex-direction: column;
        text-align: center;
      }
    }
    .footer-add {
      width: 0.34rem;
      height: 0.34rem;
      background: linear-gradient(
        360deg,
        rgba(79, 113, 253, 1) 0%,
        rgba(118, 85, 247, 1) 100%
      );
      border-radius: 50%;
      text-align: center;
      line-height: 0.34rem;
      font-size: 0.3rem;
      color: #fff;
    }
    p {
      font-size: 0.12rem;
    }
    img {
      width: 0.2rem;
      height: 0.21rem;
      margin: 0 auto;
      border-radius: 0.03rem 0.01rem 0.03rem 0.03rem;
    }
  }
}

.last {
  display: none;
}
.active {
  color: #5d59ff;
}
.active .firsh {
  display: none;
}
.active .last {
  display: block;
  float: left;
}
</style>