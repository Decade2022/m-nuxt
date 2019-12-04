<template>
  <div>
    <div class="star_container">
      <div v-for="(item,index) in array"
           :key="index">
        <div v-if="value- 1 >= index"
             class="star_item">
          <img :style="{width:'0.14rem',height:'0.14rem',marginBottom:'0.05rem'}"
               src="img/start_white.png" />
        </div>
        <div v-else-if="value - index >0"
             :style="{width:'0.14rem',height:'0.14rem',marginRight:'0.03rem',borderRadius:'0.01rem',overflow:'hidden'}">
          <div :style="{width:'0.14rem',height:'0.14rem',flexDirection:'row',position:'absolute'}">
            <div :style="{width:if_background,height:'0.14rem',backgroundColor:'#FF2E4D',position:'absolute',zIndex:'999', borderBottomLeftRadius:'0.02rem',borderTopLeftRadius:'0.02rem'}">
              <img :style="{width:'0.14rem',height:'0.14rem',marginBottom:'0.05rem'}"
                   src="img/start_white.png" />
            </div>
            <div :style="{width:'0.14rem',height:'0.14rem',backgroundColor:'#B3B3BB',position:'absolute',borderRadius: '0.02rem'}"></div>
          </div>
        </div>
        <div v-else
             :style="{width:'0.14rem',height:'0.14rem',backgroundColor:'#B3B3BB',marginRight:'0.06rem',borderRadius:'0.02rem'}">
          <img :style="{width:'0.14rem',height:'0.14rem',marginBottom:'0.05rem'}"
               src="img/start_white.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    value: {
      default: 5
    }
  },
  data () {
    return {
      array: [0, 1, 2, 3, 4],
      if_background: null
    }
  },
  created () {
    this.if_background = (0.014 * (this.$props.value.toString().split('.')[1] != undefined ? this.value.toString().split('.')[1] : '')) + 'rem'
  },
}
</script>
<style scoped>
.star_container {
  display: flex;
  align-items: center;
}
.star_item {
  display: flex;
  background-color: #ff2e4d;
  margin-right: 0.06rem;
  border-radius: 0.02rem;
  width: 0.14rem;
  height: 0.14rem;
}
.star_item image {
  margin: auto;
}
</style>