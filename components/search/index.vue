<template>
  <div>
    <div class="wrap">
      <input type="text"
             class="search-box"
             v-model="value"
             :placeholder=placeholder
             @keyup.13='searchVal' />
      <img class="search-icon"
           src="img/search_img.png">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String
  },
  data () {
    return {
      value: '',
      count: 0
    }
  },
  methods: {
    searchVal () {
      this.$emit('searchVal', this.value)
    }
  }
}
</script>
<style scoped  lang="scss">
.wrap {
  position: relative;
}
.search-icon {
  width: 0.14rem;
  height: 0.14rem;
  position: absolute;
  left: 0.2rem;
  top: 0.075rem;
}
.search-box {
  border: 0;
  outline: 0;
  width: 3.1rem;
  height: 0.3rem;
  background: rgba(240, 240, 240, 1);
  border-radius: 0.15rem;
  text-indent: 0.41rem;
}
input::-webkit-input-placeholder {
  font-size: 0.11rem;
}
</style>