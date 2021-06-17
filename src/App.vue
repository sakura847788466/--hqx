<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
@import url("./sass/reset.scss");
@import url("./font/iconfont.css");
@font-face {
  font-family: "Classic";
  src: url("./font/ttf/PINGFANG BOLD.TTF");
}
@font-face {
  font-family: "微软简综艺";
  src: url("./font/ttf/微软简综艺.TTF");
}
@font-face {
  font-family: "DIN";
  src: url("./font/ttf/DIN-MEDIUM.OTF");
}
@font-face {
  font-family: "经典特宋简";
  src: url("./font/ttf/经典特宋简.ttf");
}

#app,
body,
html {
  height: 100%;
  width: 100%;
}
body {
  // background-color: #f5f5f5;
  font-family: 'PingFang SC';
}
   // 表格嵌套的下拉框样式
    .common-selectDown-table {
        .el-scrollbar {
            .el-select-dropdown__wrap {
                .el-select-dropdown__list {
                    width: 96px;
                    background: rgba(238, 243, 243, 0);
                    opacity: 1;
                    padding:0!important;
                    .el-select-dropdown__item {
                      width:100%;
                      height: 42px;
                      line-height: 42px;
                      text-align: center;
                      &:hover{
                         background-color: #EEF3F3;
                        }
                    }
                    & .el-select-dropdown__item:nth-child(1){
                      color: #109583;
                    }
                     & .el-select-dropdown__item:nth-child(2){
                      color: #FF3400;
                    }
                     
                    .selected {
                        background: #EEF3F3;
                        font-weight: 700;
                    }
                }
            }
        }
    }
</style>