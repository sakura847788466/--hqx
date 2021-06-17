<template>
   <div class="common-header">
     <div class="left">
       <img src="../../assets/logo.png" title="遥感数据传输系统监控界面">
       <span>遥感数据传输系统监控界面</span>
     </div>
     <div class="right">
       <el-menu
          :default-active="this.$route.path"
          class="el-menu-demo"
          mode="horizontal"
          router
          @select="handleSelect"
          >
          <el-menu-item index="/index/transferStatus">传输状态</el-menu-item>
          <el-menu-item index="/index/monitoring">一页图监控</el-menu-item>
          <el-menu-item index="/index/dataShow" >数据展示</el-menu-item>
          <el-menu-item index="/index/alarmStatus">告警状态
            <span class="errNumber" v-show="this.$route.path=='/index/alarmStatus'&&errorLength!==0">
              <p>{{errorLength}}</p>
            </span>
          </el-menu-item>
        </el-menu>
     </div>
   </div>
</template>

<script>
export default {
 name:'commonHead',
 data(){
   return{
     message:'头部组件',
     errorLength:0
   }
 },
 mounted(){
 
 },
 methods:{
   changeNav(val){
     this.defalutActive = val
     this.$router.push({path:val})
   },
   handleSelect(){
     
   }
 },
 computed:{
   getErrorLength(){
     return this.$store.state.errorList
   }
 },
 watch:{
   getErrorLength(){
     this.errorLength = this.getErrorLength.length
     deep:true
   }
 }
}
</script>

<style lang="scss" scoped>
@import './Head.scss';

</style>