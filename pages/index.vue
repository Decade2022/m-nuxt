<template>
  <section class="container">
    <header>
      <div>
        {{name}}
        <!-- <Button text="下一步" :raius=raius Size='Size18' color='gray' @click.native='chang(12)'/> -->
        <!-- <Stars/> -->
      </div>
    </header>
    <City :city='city'
          v-on:childByValue="childByValue" />
  </section>
</template>

<script>
import City from '~/components/city/index.vue'
// import Button from '~/components/botton/index.vue'
// import Stars from '~/components/Stars/index.vue'
import axios from 'axios'
export default {
  components: {
    City,
    // Button,
    // Stars
  },
  data () {
    return {
      city: null,
      name: '选择城市',
      raius: true
    }
  },
  created () {
    axios.get('https://test-api.rongcat.com/area?limit=city').then(res => {
      res.data.data.forEach(item => {
        item.child && item.child.unshift({ name: '全部' })
      })
      res.data.data.unshift({ name: '热门城市', child: [{ name: '北京' }, { name: '成都' }, { name: '上海' }, { name: '深圳' }, { name: '广州' }] }, { name: '全部城市' })
      this.city = res.data.data
    })
  },
  methods: {
    childByValue: function (childValue) {
      // childValue就是子组件传过来的值
      this.name = childValue;
    },
    chang (i) {
      console.log(i)
    }
  }
}
</script>
<style lang="scss">
</style>
