<template>
  <div class="alarmStatus">
     <div class="mainBox" :style="{'height':leftHeight+'px'}">
        <div class="title">
           <div class="left">
             <span>日期选择</span>
             <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
           </div>
           <div class="right">
               <div  :class="{'uploadErr':true,'isActive':defalutType=='0'}" @click="isUploadErr('0')">
                 <span>下载告警</span>
               </div>
               <div :class="{'uploadErr':true,'isActive':defalutType=='1'}" @click="isUploadErr('1')">
                 <span>上传告警</span>
               </div>
           </div>
        </div>
        <div class="table-com alarm-table">
          <el-table
            :data="tableDataDownload"
            v-show="defalutType=='0'"
            :header-cell-style="{background:'#F1F2F5'}"
            style="width: 100%"
            :height="tableHeight">
            <el-table-column
              prop="id"
              label="序号"
              width="180"
              align="center" 
              >
            </el-table-column>
            <el-table-column
              prop="time"
              label="告警时间"
              width="180"
              align="center" 
              >
            </el-table-column>
            <el-table-column
              prop="downloadErr"
              label="告警类别"
              align="center" 
              >
            </el-table-column>
            <el-table-column
              label="处理情况"
              align="center" 
              >
               <template  >
                  <!-- <el-select v-model="selectValue" popper-class="common-selectDown-table"
                  @change="handleStatus">
                    <el-option
                      v-for="item in SelectList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select> -->
            	 <Myselect  label-name="ename"></Myselect>
               </template>
            </el-table-column>
            <el-table-column
              prop="address"
              label="告警内容"
              align="center" 
              >
               <template >
                 <!-- slot-scope="scope" -->
                 <span @click="toViewErrorInfo()">查看</span>
               </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="page-list common-page-style">
           <el-pagination
              v-show="defalutType=='0'"
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="pageSize"
              layout="prev, pager, next, jumper"
              :total="20">
            </el-pagination>
        </div>
        <div class="table-com alarm-table">
          <el-table
            :data="tableDataUpload"
            v-show="defalutType=='1'"
            ref="multipleTable"
            :header-cell-style="{background:'#F1F2F5'}"
            style="width: 100%"
            :height="tableHeight">
            <el-table-column
              prop="id"
              label="序号"
              width="180"
              align="center" 
              >
            </el-table-column>
            <el-table-column
              prop="time"
              label="告警时间"
              width="180"
              align="center" 
              >
            </el-table-column>
            <el-table-column
              prop="downloadErr"
              label="告警类别"
              align="center" 
              >
            </el-table-column>
            <el-table-column
              label="处理情况"
              align="center" 
              >
               <template  >
                  <!-- <el-select v-model="selectValue" popper-class='tree'>
                    <el-option
                      v-for="item in SelectList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select> -->
            	 <Myselect  label-name="ename"></Myselect>

               </template>
            </el-table-column>
            <el-table-column
              prop="address"
              label="告警内容"
              align="center" 
              >
               <template  >
                 <span @click="toViewErrorInfo()">查看</span>
               </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="page-list common-page-style">
           <el-pagination
              v-show="defalutType=='1'"
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="pageSize"
              layout="prev, pager, next, jumper"
              :total="20">
            </el-pagination>
        </div>
     </div>
     <ErrorDialog :errorList="errorList" :isShow="isShow" @closeDialog="closeDialog"/>
  </div>
</template>

<script>
import ErrorDialog from '../../components/ErrorDialog/ErrorDialog.vue'
import Myselect from '../../components/Myselect/Myselect'
import api from '../../api/ajaxMock.js'

export default {
name:'alarmStatus',
data(){
  return{
      leftHeight:window.innerHeight-86-64,
      value1:'',
      tableHeight:window.innerHeight-86-64-184,
      currentPage:1,
      totalPage:10,
      pageSize:11,
      defalutType:'0',
      selectValue:'0',
      errorList:[],
      isShow:false,
      tableDataDownload: [{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'下载告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'下载告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'下载告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'下载告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'下载告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'下载告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'下载告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'下载告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'下载告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'下载告警',
          }],
          tableDataUpload: [{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'上传告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'上传告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'上传告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'上传告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'上传告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'上传告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'上传告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'上传告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'上传告警',
          },{
            id: 1,
            time: '2020/10/23  14:28',
            downloadErr:'上传告警',
          }],
          options:[{
          value: 'AGRI',
          label: 'AGRI'
          }, {
            value: 'GIIRS',
            label: 'GIIRS'
          }],
          value:'',
          SelectList:[{
          value: '0',
          label: '已处理'
          }, {
            value: '1',
            label: '未处理'
          }],
  }
},
mounted(){
  let that = this;
  window.addEventListener('resize', () => that.leftHeight = window.innerHeight-86-64, false)
  window.addEventListener('resize', () => that.tableHeight = window.innerHeight-86-64-184, false)
  that.errorList =[{text:'大气校正产品失败'},{text:'大气校正产品失败'}]
  that.getTable()
},
methods:{
  handleSizeChange(){

  },
  handleCurrentChange(){

  },
  display(){

  },
  //获取表格数据
  getTable(){
    api.JH_news('/api/alarmTable').then(res=>{
      console.log(res)
      if(res.code == 200){}
    }).catch(err=>{
      console.log(err)
    })
  },
  handleStatus(val){
    console.log(val)
    this.selectValue = val
  },
  closeDialog(val){
    this.isShow = val
  },
  toViewErrorInfo(){
    console.log(999)
    this.isShow= true
  },
  isUploadErr(val){
    console.log(val)
    this.defalutType=val
  }

},
components:{
  ErrorDialog,Myselect
}
}
</script>

<style lang="scss" scoped>
@import './AlarmStatus.scss';

</style>
