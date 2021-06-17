<template>
  <div class="monitoringBox">
    <div class="topBox">
      <div class="left">
        <div class="timeSelect">
          <span class="title">选择日期</span>
          <el-date-picker v-model="value"
                          type="date"
                          placeholder="选择日期"
                          :picker-options="pickerOptions">
          </el-date-picker>
        </div>
        <div class="itemBox">
          <div class="item">
            <span>下载总文件数</span>
            <span>2222<p>个</p></span>
          </div>
          <div class="item">
            <span>上传总文件数</span>
            <span>2222<p>个</p></span>
          </div>
        </div>
        <div class="itemBox">
          <div class="item">
            <span>融合数据处理成功次数</span>
            <span>80<p>次</p></span>
          </div>
          <div class="item">
            <span>总告警次数</span>
            <span>180<p>次</p></span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title">
          <span class="sign">存储状态图</span>
          <el-button type="primary"
                     icon="el-icon-refresh-right"
                     @click="resetFresh">刷新</el-button>
        </div>
        <table class="table">
          <tr>
            <th>Device</th>
            <th>Directory</th>
            <th>Type</th>
            <th>Size</th>
            <th>Available</th>
            <th>Used</th>
            <th></th>
          </tr>
          <tr v-for="(item,index) in tableTrList"
              :key="index">
            <td>{{item.device}}</td>
            <td>{{item.directory}}</td>
            <td>{{item.type}}</td>
            <td>{{item.size}}</td>
            <td>{{item.available}}</td>
            <td>{{item.used}}</td>
            <td>
              <el-progress :percentage="item.procent"
                           :color="item.color"></el-progress>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bottomBox">
      <div class="left">
        <div class="title">
          <span class="sign">产品类型文件下载量图</span>
          <el-select v-model="productType"
                     placeholder="请选择"
                     @change="selectProduct"
                     popper-class="common-selectDown">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="echartBox"
             ref="echartOne"></div>
      </div>
      <div class="right">
        <div class="title">
          <span class="sign">产品类型文件上传量图</span>
        </div>
        <div class="echartBox"
             ref="echartTwo"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { DrangeEchart, DrangeEchartUpload } from '../../utils/echart'
import api from '../../api/ajaxMock.js'

export default {
  name: 'monitoring',
  data() {
    return {
      value: '',
      productType: '1',
      options: [
        {
          value: '1',
          label: 'L1级产品'
        },
        {
          value: '2',
          label: 'L2级产品'
        },
        {
          value: '3',
          label: 'L3级产品'
        }
      ],
      tableTrList: [
        {
          device: '/dev/sda',
          directory: '/dackup1',
          type: 'ext4',
          size: '11T',
          available: '8.5T',
          used: '1.6T',
          procent: 50,
          color: '#FF903C'
        },
        {
          device: '/dev/sda',
          directory: '/dackup1',
          type: 'ext4',
          size: '11T',
          available: '8.5T',
          used: '1.6T',
          procent: 90,
          color: '#6381FA'
        },
        {
          device: '/dev/sda',
          directory: '/dackup1',
          type: 'ext4',
          size: '11T',
          available: '8.5T',
          used: '1.6T',
          procent: 20,
          color: '#FF903C'
        }
      ],
      pickerOptions: {
        disabledDate: time => {
          //限制只能选中当前月份时间
          var d = new Date()
          var ydate = d.getFullYear()
          var mdate = d.getMonth() + 1
          var day = new Date(ydate, mdate, 0).getDate()
          mdate = mdate > 9 ? mdate : '0' + mdate
          day = day > 9 ? day : '0' + day
          var start_date = `${ydate}-${mdate}-${'01'}`
          var end_date = `${ydate}-${mdate}-${day}`
          let start = new Date(start_date)
          let end = new Date(end_date)
          let ks = start.getTime(start)
          var js = end.getTime(end)
          return time.getTime() > js || time.getTime() < ks
        }
      }
    }
  },
  mounted() {
    DrangeEchart(
      this.$echarts.init(this.$refs.echartOne),
      'L1级产品下载量柱状图'
    )
    DrangeEchartUpload(
      this.$echarts.init(this.$refs.echartTwo),
      '产品类型文件上传量柱状图'
    )
    const that = this
    this.$nextTick(() => {
      setTimeout(() => {
        window.addEventListener(
          'resize',
          () => that.$echarts.init(that.$refs.echartOne).resize(),
          false
        )
        window.addEventListener(
          'resize',
          () => that.$echarts.init(that.$refs.echartTwo).resize(),
          false
        )
      }, 2000)
    })
    that.selectProduct('1')
    
  },
  methods: {
    selectProduct(val) {
      if (val == '1') {
        //请求L2产品数据
        //柱形图
        // @ DrangeEchart(dom,data,title)
        this.getEchartData()
      } else if (val == '2') {
        const EchartData = [
          [
            '通道0',
            '通道1',
            '通道2',
            '通道3',
            '通道4',
            '通道5',
            '通道6',
            '通道7',
            '通道8',
            '通道9',
            '通道10',
            '通道11',
            '通道12',
            '通道13',
            '通道14',
            '探测仪'
          ],
          [21, 47, 61, 34, 65, 62, 48, 20, 50, 47, 35, 15, 55, 33, 37, 54]
        ]
        DrangeEchart(
          this.$echarts.init(this.$refs.echartOne),
          EchartData,
          'L2级产品下载量柱状图'
        )
      } else if (val == '3') {
        const EchartData = [
          [
            '通道0',
            '通道1',
            '通道2',
            '通道3',
            '通道4',
            '通道5',
            '通道6',
            '通道7',
            '通道8',
            '通道9',
            '通道10',
            '通道11',
            '通道12',
            '通道13',
            '通道14',
            '探测仪'
          ],
          [11, 37, 31, 54, 65, 22, 68, 10, 70, 27, 45, 25, 75, 53, 87, 94]
        ]
        DrangeEchart(
          this.$echarts.init(this.$refs.echartOne),
          EchartData,
          'L3级产品下载量柱状图'
        )
      }
    },
    getEchartData() {
      api
        .JH_news('/api/monitorEchart')
        .then(res => {
          console.log(res)
          const EchartData = [[], []]
          const data = []
          const val = []
          res.data.forEach((item, index) => {
            data.push(item.port)
            val.push(item.value)
          })
          EchartData[0] = data
          EchartData[1] = val
          // echart 画图
          DrangeEchart(
            this.$echarts.init(this.$refs.echartOne),
            EchartData,
            'L1级产品下载量柱状图'
          )
        })
        .catch(err => {
          console.log(err)
        })
    },
    resetFresh() {
      const itemTest = []
      for (let i = 0; i < 3; i++) {
        const item = {
          device: '/dev/sda',
          directory: '/dackup1',
          type: 'ext4',
          size: Math.round(Math.random(0, 1) * 100) + 'T',
          available: Math.round(Math.random(0, 1) * 10) + 'T',
          used: Math.round(Math.random(0, 1) * 1000) + 'T',
          procent: Math.round(Math.random(0, 1) * 100), //used/size%
          color: i % 2 == 0 ? '#FF903C' : '#3988FF',
        }
        itemTest.push(item)
      }
      this.tableTrList = itemTest
    }
  },
  created() {}
}
</script>

<style lang="scss" socped>
@import './Monitoring.scss';
</style>