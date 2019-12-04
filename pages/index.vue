<template>
  <div>
    <nuxt-child />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/footer';
export default {
  components: {
    Footer,
  },
  created() {
    // this.$router.push('/page/home')
  },
}
</script>
<style scoped  lang="scss">
</style>