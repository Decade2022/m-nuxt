<template>
  <div>
    <button :class="[raius===true?'radius':'noraius',color,Size]"
            :style=[{width:width},{height:height}]> {{text}}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    raius: Boolean,
    raius: {
      default: true
    },
    width: String,
    height: String,
    color: String,
    color: {
      default: 'white'
    },
    Size: String,
    Size: {
      default: 'Szie18'
    }
  }
}
</script>
<style scoped  lang="scss">
.radius {
  border: 0;
  outline: 0;
  width: 3.19rem;
  height: 0.38rem;
  border-radius: 0.32rem;
}
.noraius {
  border: 0;
  outline: 0;
  width: 1.4rem;
  height: 0.6rem;
}
.red {
  background: rgba(255, 66, 94, 1);
  color: #fff;
}
.gray {
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 0.22rem;
  font-size: 0.18rem;
  color: #fff;
}
.grayborder{
  border:1px solid #E4E4E4;
  color: #A9A9A9;
  background: #fff;
}
.redborder {
  border-radius: 0.14rem;
  border: 0.01rem solid rgba(253, 84, 109, 1);
  color: rgba(253, 84, 109, 1);
  background: #fff;
}
.Size13 {
  font-size: 0.13rem;
}
.Size15 {
  font-size: 0.15rem;
}
.Size18 {
  font-size: 0.18rem;
}
.Size16 {
  font-size: 0.16rem;
}
</style>