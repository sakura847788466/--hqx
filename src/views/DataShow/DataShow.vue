<template>
  <div class="dataShow">
    <div
      class="left"
      :style="{'height':leftHeight+'px'}"
    >
      <div class="item">
        <span>选择日期</span>
        <el-date-picker
          v-model="selectTime"
          type="daterange"
          align='center'
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div>
      <div class="item">
        <span>仪器名称</span>
        <el-select
          v-model="instrumentName"
          placeholder="请选择"
          @change="instrumentSelect"
          popper-class="common-selectDown"
        >
          <el-option
            v-for="item in instrumentNameList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="item">
        <span>产品等级</span>
        <el-select
          v-model="productLevel"
          placeholder="请选择"
          @change="productLevelSelect"
          popper-class="common-selectDown"
        >
          <el-option
            v-for="item in productLevelList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="item">
        <span>产品类型</span>
        <el-select
          v-model="productType"
          placeholder="请选择"
          popper-class="common-selectDown"
        >
          <el-option
            v-for="item in productTypeListLOne"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="btnOption">
        <el-button class="find">查询</el-button>
        <el-button class="reset" @click="reset">重置</el-button>
      </div>
    </div>
    <div
      class="right"
      :style="{'height':leftHeight+'px'}"
    >
      <div class="title">
        <span class="sign">数据展示</span>
        <el-button class="downLoad">下载</el-button>
      </div>
      <div class="table-container table-dataShar">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          :header-cell-style="{background:'#F1F2F5'}"
          style="width: 100%"
          :height="tableHeight"
          @select-all="selectAll"
          @select="selectItem"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="50"
            align="center"
          >
          </el-table-column>
          <el-table-column
            label="序号"
            prop="id"
            width="72"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="仪器名称"
            width="94"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="productLevel"
            label="产品级别"
            width="114"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="productType"
            label="产品类型"
            width="114"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="time"
            label="数据时间"
            width="175"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            prop="dataPath"
            label="数据路径"
            width="248"
            align="center"
          >
          <template slot-scope="scope">
              <el-tooltip placement="top">
                <div slot="content" style="cursor:pointer;">点击复制</div>
                <span style="display:block;cursor:pointer;width:100%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;" class="tag-read" 
                :data-clipboard-text="tableData[scope.$index].dataPath" 
                @click="copy">{{tableData[scope.$index].dataPath}}</span>  
              </el-tooltip>
          </template>
          </el-table-column>
          <el-table-column
            prop="fileName"
            label="数据文件名"
            width="270"
            align="center"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column
            label="快视图"
            width="160"
            align="center"
          >
            <template >
              <span @click="toViewImg">查看</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="page-list common-page-style">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            :pager-count="5"
            layout="prev, pager, next, jumper"
            :total="100"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- 图片弹窗 -->
    <ImgDialog
      :isShowImg="isShowImg"
      @handleCloseImg="handleCloseImg"
    />
  </div>
</template>

<script>
import ImgDialog from '../../components/ImgDialog/ImgDialog'
export default {
  name: 'dataShow',
  data () {
    return {
      leftHeight: window.innerHeight - 86 - 64,
      tableHeight: window.innerHeight - 86 - 64 - 150,
      currentPage: 1,
      pageSize: 12,
      totalPage: 10,
      selectTime: '',
      productType: '',
      productTypeListLOne: [{
        value: 'C001',
        label: '通道1'
      }, {
        value: 'C002',
        label: '通道2'
      }, {
        value: 'C003',
        label: '通道3'
      }, {
        value: 'C004',
        label: '通道4'
      }, {
        value: 'C005',
        label: '通道5'
      }, {
        value: 'C006',
        label: '通道6'
      }, {
        value: 'C007',
        label: '通道7'
      }, {
        value: 'C008',
        label: '通道8'
      }, {
        value: 'C009',
        label: '通道9'
      }, {
        value: 'C010',
        label: '通道10'
      }, {
        value: 'C011',
        label: '通道11'
      }, {
        value: 'C012',
        label: '通道12'
      }, {
        value: 'C013',
        label: '通道13'
      }, {
        value: 'C014',
        label: '通道14'
      }, {
        value: 'IRA',
        label: '探测仪'
      }],
      productTypeListLTwo: [{
        value: 'ACI',
        label: '大气校正'
      }, {
        value: 'CIX',
        label: '对流初生'
      }, {
        value: 'CLM',
        label: '云检测'
      }, {
        value: 'CLP',
        label: '云相态'
      }, {
        value: 'CLT',
        label: '云类型'
      }, {
        value: 'CPD',
        label: '白天云微物理'
      }, {
        value: 'CTH',
        label: '云顶高度'
      }, {
        value: 'CTP',
        label: '云顶气压'
      }, {
        value: 'CTT',
        label: '云顶温度'
      }, {
        value: 'DSD',
        label: '沙尘检测'
      }, {
        value: 'EVI',
        label: '增强型植被'
      }, {
        value: 'FHS',
        label: '热源点检测'
      }, {
        value: 'FOG',
        label: '雾检测'
      }, {
        value: 'LDA',
        label: '陆地气溶胶'
      }, {
        value: 'LST',
        label: '地表温度'
      }, {
        value: 'NVI',
        label: '归一化植被'
      }, {
        value: 'NWI',
        label: '水体检测'
      }, {
        value: 'OCA',
        label: '海洋气溶胶'
      }, {
        value: 'QPE',
        label: '降水估计'
      }, {
        value: 'SST',
        label: '海面温度'
      }, {
        value: 'VWI',
        label: '植被供水'
      }],
      instrumentNameList: [{
        value: 'AGRI',
        label: 'AGRI'
      }, {
        value: 'GIIRS',
        label: 'GIIRS'
      }],
      productLevelList: [{
        value: 'L1',
        label: 'L1'
      }, {
        value: 'L2',
        label: 'L2'
      }, {
        value: 'L3',
        label: 'L3'
      }],
      productLevel: '',
      instrumentName: '',
      value: '',
      tableData: [{
        id: '1',
        name: 'AGRI',
        productLevel: 'L2',
        productType: '对流初生',
        time: '2020/10/23  14:28',
        dataPath: '/data/fy4/FY4data/Arda/Dsdaddds',
        fileName: 'FY4A-_AGRI--_N_DISK_1047DA/Dada',
      }, {
        id: '1',
        name: 'AGRI',
        productLevel: 'L2',
        productType: '对流初生',
        time: '2020/10/23  14:28',
        dataPath: '/data/fy4/FY4data/Arda/Dsdaddds',
        fileName: 'FY4A-_AGRI--_N_DISK_1047DA/Dada',
      }, {
        id: '1',
        name: 'AGRI',
        productLevel: 'L2',
        productType: '对流初生',
        time: '2020/10/23  14:28',
        dataPath: '/data/fy4/FY4data/Arda/Dsdaddds',
        fileName: 'FY4A-_AGRI--_N_DISK_1047DA/Dada',
      }, {
        id: '1',
        name: 'AGRI',
        productLevel: 'L2',
        productType: '对流初生',
        time: '2020/10/23  14:28',
        dataPath: '/data/fy4/FY4data/Arda/Dsdaddds',
        fileName: 'FY4A-_AGRI--_N_DISK_1047DA/Dada',
      }, {
        id: '1',
        name: 'AGRI',
        productLevel: 'L2',
        productType: '对流初生',
        time: '2020/10/23  14:28',
        dataPath: '/data/fy4/FY4data/Arda/Dsdaddds',
        fileName: 'FY4A-_AGRI--_N_DISK_1047DA/Dada',
      }, {
        id: '1',
        name: 'AGRI',
        productLevel: 'L2',
        productType: '对流初生',
        time: '2020/10/23  14:28',
        dataPath: '/data/fy4/FY4data/Arda/Dsdaddds',
        fileName: 'FY4A-_AGRI--_N_DISK_1047DA/Dada',
      }, {
        id: '1',
        name: 'AGRI',
        productLevel: 'L2',
        productType: '对流初生',
        time: '2020/10/23  14:28',
        dataPath: '/data/fy4/FY4data/Arda/Dsdaddds',
        fileName: 'FY4A-_AGRI--_N_DISK_1047DA/Dada',
      }, {
        id: '1',
        name: 'AGRI',
        productLevel: 'L2',
        productType: '对流初生',
        time: '2020/10/23  14:28',
        dataPath: '/data/fy4/FY4data/Arda/Dsdaddds',
        fileName: 'FY4A-_AGRI--_N_DISK_1047DA/Dada',
      }, {
        id: '1',
        name: 'AGRI',
        productLevel: 'L2',
        productType: '对流初生',
        time: '2020/10/23  14:28',
        dataPath: '/data/fy4/FY4data/Arda/Dsdaddds',
        fileName: 'FY4A-_AGRI--_N_DISK_1047DA/Dada',
      }, {
        id: '1',
        name: 'AGRI',
        productLevel: 'L2',
        productType: '对流初生',
        time: '2020/10/23  14:28',
        dataPath: '/data/fy4/FY4data/Arda/Dsdaddds',
        fileName: 'FY4A-_AGRI--_N_DISK_1047DA/Dada',
      }, {
        id: '1',
        name: 'AGRI',
        productLevel: 'L2',
        productType: '对流初生',
        time: '2020/10/23  14:28',
        dataPath: '/data/fy4/FY4data/Arda/Dsdaddds',
        fileName: 'FY4A-_AGRI--_N_DISK_1047DA/Dada',
      }],
      multipleSelection: [],
      isShowImg: false,
      //日期时间限制,默认30天
      pickerOptions: {
        onPick: ({maxDate, minDate}) => {
          this.selectTime= minDate.getTime();
          if (maxDate) {
            this.selectTime= ''
          }
        }, 
        disabledDate: (time) => {
          if (this.selectTime!== '') {
            const one = 30 * 24 * 3600 * 1000;
            const minTime = this.selectTime- one;
            const maxTime = this.selectTime+ one;
            return time.getTime() < minTime || time.getTime() > maxTime
          }
        }
      }
    }
  },
  mounted () {
    const that = this
    window.addEventListener('resize', () => that.leftHeight = window.innerHeight - 86 - 64, false)
    window.addEventListener('resize', () => that.tableHeight = window.innerHeight - 86 - 64 - 150, false)

  },
  methods: {
    handleSizeChange () {

    },
    
    //复制粘贴功能
    copy () {
      var clipboard = new this.Clipboard('.tag-read');
      clipboard.on('success', e => {
          this.$message({
          message: '复制成功',
          type: 'success'
        });
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        this.$message('复制失败,浏览器不支持自动复制','error')
        clipboard.destroy()
      })
    },
    //查询重置
    reset(){
      this.selectTime=''
      this.productLevel=''
      this.instrumentName=''
      this.productType=''
    },
    //文件下载
    downLoadTest(url) {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.style.height = 0;
      iframe.src = url;
      document.body.appendChild(iframe);
      setTimeout(() => {
          document.body.removeChild(iframe);
      }, 1000);
      //删除iframe
    },
    handleCurrentChange () {

    },
    handleSelectionChange () {

    },
    selectAll (row) { //多文件下载
      row.forEach((item,index)=>{
        this.downLoadTest(item.url)
      })
    },
    selectItem (row) {
      console.log(row)
    },
    toViewImg () {
      this.isShowImg = true
    },
    handleCloseImg (val) {
      this.isShowImg = val
    },
    instrumentSelect (val) {
      console.log(val)
      if (val == 'GIIRS') {
        this.productLevel = 'L1'
        this.productType = 'IRA'
      }
    },
    //产品选择
    productLevelSelect (val) {
      if (val == 'L3') {
        this.productType = 'IRA'

      }
    }

  },
  components: {
    ImgDialog
  }
}
</script>

<style lang='scss' scoped>
@import "./DataShow.scss";
</style>