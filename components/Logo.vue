<template>
  <div>
    <div v-for="(item,index) in list" :key='index'>
        {{item.citys}}
    </div> 
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
        list:null
    }
  },
  computed:{

  },
  methods:{

  },
  created(){
    axios.get('/mock/data.json').then(res=>{
      // this.list=JSON.parse(res.data)
      console.log(res.data)
    })
  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">

</style>
