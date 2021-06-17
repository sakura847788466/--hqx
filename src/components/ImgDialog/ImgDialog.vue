<template>
  <!-- 查看图片容器 -->
  <el-dialog title="查看快视图"
             :visible.sync="dialogVisible"
             :before-close="handleClose">
    <div class="imgBox">
      <img :src="img"
           alt=""
           v-if="this.fileType(img)">
      <!-- 图片 -->
      <div class="emptyBox"
           v-else></div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'imgDialog',
  data() {
    return {
      dialogVisible: false,
      img: require('../../assets/clound.png')
    }
  },
  props: {
    isShowImg: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    //文件类型判别
    fileType(url) {
      const type = url.split('.')[url.split('.').length - 1]
      if (type !== 'jpg' && type !== 'png' && type !== 'tiff') {
        return false
      } else {
        return true
      }
    },
    handleClose() {
      this.dialogVisible = false
      this.$emit('handleCloseImg', false)
    }
  },
  watch: {
    isShowImg() {
      this.dialogVisible = this.isShowImg
      deep: true
    },
  }
}
</script>

<style lang="scss" scoped>
@import './ImgDialog.scss';
</style>