<template>
  <div>
    <header class="header">
      <img src="/img/icon_down_arrow.png"
           class="retreat"
           @click="retreat">
      <div class="middle">
        <slot />
      </div>
      <div></div>
    </header>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {
    retreat () {
      this.$router.back()
    }
  }
}
</script>
<style scoped  lang="scss">
.header {
  width: 100%;
  height: 0.49rem;
  border-bottom: 1px solid #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.middle {
  margin-left: -0.12rem;
}
.retreat {
  width: 0.16rem;
  height: 0.16rem;
  transform: rotate(90deg);
  margin-left: 0.12rem;
}
</style>