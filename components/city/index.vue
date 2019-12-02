<template>
  <div class="wrap">
    <div class="left">
      <div class="city"
           v-for="item in city"
           :key='item.name'
           :class="{active : active === item.name}"
           @click="clickCity(item)">
        {{item.name}}
      </div>
    </div>
    <div v-if='city'
         class="right">
      <div v-for="item in child"
           @click="biz_area(item)"
           class="right_list"
           :class="{active2 : active2 === item.id}"
           :key="item.name">
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    city: Array,
  },
  data () {
    return {
      child: null,
      active: null,
      active2: null
    }
  },
  methods: {
    clickCity (i) {
      this.active = i.name;
      if (i.child) {
        if (i.name === '热门城市') {
          i.child.forEach(item => {
            if (item.id !== i.name) {
              item.id = item.name
            } else {
              return
            }
          })
          this.child = i.child
        } else {
          i.child[0].id = i.name
          i.child.forEach(item => {
            if (item.id !== i.name) {
              item.id = item.name
            } else {
              return
            }
          })
          this.child = i.child
        }
      } else {
        this.child = null
        this.$emit('childByValue', i.name)
      }
    },
    biz_area (i) {
      this.active2 = i.id;
      if (i.child) {
        this.city = i.child
      } else {
        this.$emit('childByValue', i.id ? i.id : i.name)
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.wrap {
  width: 100%;
  // height: 13.34rem;
  display: flex;
}
.left {
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
.city {
  width: 1.2rem;
  height: 0.4rem;
  font-size: 0.08rem;
  line-height: 0.4rem;
  text-align: center;
  color: #777;
  background: #eee;
  border-bottom: 0.005rem solid #f1ebeb;
}
.active {
  background: #fff;
  border-left: 0.02rem solid #69d7cc;
  color: #69d7cc;
}
.active2 {
  color: #69d7cc;
}
.right {
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
.right_list {
  height: 0.4rem;
  line-height: 0.4rem;
  border-bottom: 0.005rem solid #f1ebeb;
  font-size: 0.08rem;
  div {
    margin-left: 0.15rem;
  }
}
</style>
