<template>
    <el-dialog
      :visible.sync="dialogVisible"
      >
     <div class="dialog-tile">
       <img src="../../assets/sign-red.png" alt="">
       <span>告警内容</span>
     </div>
     <div class="container">
       <span v-for="(item,index) in list" :key="index">
          <p>{{item.time==undefined?'':item.time}}</p>
          <p>{{item.text}}</p>
       </span>
     </div>
     <div class="btn">
        <el-button class="isTrue" @click="handleClose">确定</el-button>
     </div>
    </el-dialog>
</template>

<script>
export default {
  name:'errorBox',
  data(){
    return{
        dialogVisible:false,
        list:[]
    }
  },
  props:{
    errorList:{
      type:Array,
      require:true
    },
    isShow:{
      type:Boolean,
      require:true
    }
  },
  methods:{
    handleClose(){
      this.dialogVisible= false
      this.$emit('closeDialog',false)
      this.$emit('closeErrorDialog',false)
    }
  },
  watch:{
    errorList(){
      this.list = this.errorList
      deep:true
    },
    isShow(){
      this.dialogVisible = this.isShow
      deep:true
    },
  }
}
</script>

<style lang='scss' scoped>
@import './ErrorDialog.scss'

</style>