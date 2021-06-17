<template>
     <div class="indexPage">
       <!-- 头部 -->
       <commonHeader />
       <div class="main">
         <router-view>

         </router-view>
       </div>
     </div>
</template>

<script>
import commonHeader from '../../components/Head/Head.vue'
export default {
  name:'message',
  data(){
    return{
      
    }
  },
  methods:{
  
  },
  components:{
    commonHeader
  }
}
</script>

<style lang="scss" scoped>
@import './Index.scss'

</style>