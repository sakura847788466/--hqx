<template>
  <!-- 自定义下拉框 -->
  <div
    v-bind:id="componentId"
    class="cw-input-select_wrap"
    v-bind:class="{open: isShowPop}"
    onselectstart="return false"
  >
    <div class="cw-input-select">
      <div class="cw-input-select_box" @click="selectHandle">
        <span :style="{color: selectedValue == '未处理' ? 'red' : 'green'}">{{
          selectedValue
        }}</span>
        <!-- <i class="cw-arrow" :class="{'up': isShowPop}"></i> -->
        <img src="../../assets/toBottom.png" alt="" class="cw-arrow" :class="{up: isShowPop}">
      </div>
      <div class="cw-input-select_pop" v-if="isShowPop">
        <ul class="cw-input-select_options">
          <li
            v-for="(item, index) in optionsList"
            @click.stop="selected(item)"
            :key="index"
          >
            {{ typeof item == 'object' ? item.ename : '' }}
          </li>
        </ul>
        <span class="cw-input-select_arrow"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectBox',
  data() {
    return {
      optionsList: [
        {id: 1, ename: '已处理'},
        {id: 2, ename: '未处理'},
      ],
      isShowPop: false,
      selectedValue: '已处理', // 选中值
      searchTxt: '', // 搜索词
      componentId: '',
    }
  },
  props: {
    options: {
      type: Array,
      require: true,
    },
  },
  methods: {
    selectHandle() {
      this.isShowPop = !this.isShowPop
    },
    hidePop() {
      this.isShowPop = false
    },
    // 点击选项
    selected(val) {
      this.selectedValue = typeof val == 'object' ? val.ename : 'error'
      this.isShowPop = false
      
    },
  },
  watch: {
    options() {
      //监听传值
      this.optionsList = this.options
      deep: true
    },
  },
}
</script>
<style lang="scss" scoped>
@import './Myselect.scss';
</style>
