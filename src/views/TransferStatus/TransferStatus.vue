<template>
  <div class="transferStatus">
     <div class="left" :style="{'height':leftHeight+'px'}">
          <div class="timeSelect">
             <span class="title">选择日期</span>
             <el-date-picker
              v-model="value"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="dayTimeList">
            <ul>
              <li v-for="(item,index) in hourList" :key="index" >
                  <div class="containerBox">
                     <span :class="{'isActive':item.time==defaultTime}" @click="isActiveTime(item.time)">{{item.time}}</span>
                     <div class="status">
                         <p  :class="{'errorBox':item.status=='2','statusBox':item.status=='1','notArrBox':item.status=='0'}"></p>
                     </div>
                  </div>
              </li>
            </ul>
          </div>
     </div>
     <div class="right" :style="{'height':leftHeight+'px'}">
        <div class="nav-option">
          <div class="right">
              <div :class="{'uploadErr':true,'isActive':defalutType=='0'}" @click="isUploadErr('0')">
                 <span>下载告警</span>
               </div>
               <div :class="{'uploadErr':true,'isActive':defalutType=='1'}" @click="isUploadErr('1')">
                 <span>上传告警</span>
               </div>
          </div>
             
        </div>
        <div class="downLoad" v-show="defalutType=='0'">
            <div class="left-btn">风云4方舱</div>
            <div class="right-btn">风云4方舱</div>
            <div class="lineTransferLeft" :style="{'height':lineHeight+'px'}">
              <div  v-for="(item,index) in leftElement" :class="{'item':true,'errBox':item.status}" :key="index">{{item.text}}
                    <div class="dashedLine" >
                      <!-- :style="{'transform':`rotate(${item.rotate}deg)`,'top':item.top,'left':item.left,'width':item.width+'px','borderColor':item.status?'#FF3400':' #109583'}" -->
                      <img src="../../assets/jiantou.png" alt="">
                      <!-- <img src="../../assets/err.png" alt="" style="transfrom:rotate(90deg)"> -->
                    </div>
              </div>
            </div>
            <div class="box-center">机房存储服务器</div>
            <div class="lineTransferRight" :style="{'height':lineHeight+'px'}">
              <div class="item" v-for="(item,index) in rightElement" :key="index">{{item.text}}
                <div class="dashedLine" >
                      <img src="../../assets/jiantou.png" alt="">
                </div>
              </div>
            </div>
        </div>

        <div class="upLoad" v-show="defalutType=='1'">
            <div class="left-btn">风云4方舱</div>
            <div class="right-btn">风云4方舱</div>
            <div class="lineTransferLeft" :style="{'height':lineHeight+'px'}">
              <div  v-for="(item,index) in leftElement" :class="{'item':true,'errBox':item.status}" :key="index">{{item.text}}
                    <div class="dashedLine">
                      <img src="../../assets/jiantou.png" alt="">
                    </div>
              </div>
            </div>
            <div class="box-center">机房存储服务器</div>
            <div class="lineTransferRight" :style="{'height':lineHeight+'px'}">
              <div class="item" v-for="(item,index) in rightElement" :key="index">{{item.text}}
                <div class="dashedLine" >
                      <img src="../../assets/jiantou.png" alt="">
                </div>
              </div>
            </div>
        </div>
     </div>
     <!-- error dialog -->
     <ErrorDialog :isShow="isShow" @closeErrorDialog="closeErrorDialog" :errorList="errorList"/>
  </div>
</template>

<script>
 import RelationGraph from 'relation-graph';
 import api from '../../api/ajaxMock.js'
 import ErrorDialog from '../../components/ErrorDialog/ErrorDialog'
 import Myselect from '../../components/Myselect/Myselect'
 import {mapActions} from 'vuex'
export default {
  name:'transferStatus',
  data(){
    return{
      leftHeight:window.innerHeight-86-64,
      lineHeight:window.innerHeight-86-64-129,
      value:'',
      defaultTime:'00:00:00',
      defalutType:'0',
      isShow:false,
      errorList:[],
      hourList:[
        {
          time:'00:00:00',
          status:'0'
        },{
          time:'00:01:00',
          status:'0'
        }, {
          time:'00:02:00',
          status:'1'
        },{
          time:'00:03:00',
          status:'2'
        }, {
          time:'00:04:00',
          status:'0'
        },{
          time:'00:05:00',
          status:'0'
        }, {
          time:'00:06:00',
          status:'0'
        },{
          time:'00:07:00',
          status:'0'
        }, {
          time:'00:08:00',
          status:'0'
        },{
          time:'00:09:00',
          status:'0'
        }, {
          time:'00:10:00',
          status:'0'
        },{
          time:'00:11:00',
          status:'0'
        }, {
          time:'00:12:00',
          status:true
        },{
          time:'00:13:00',
          status:'0'
        }, {
          time:'00:14:00',
          status:'0'
        },{
          time:'00:15:00',
          status:'0'
        }, {
          time:'00:16:00',
          status:'0'
        },{
          time:'00:17:00',
          status:'0'
        }, {
          time:'00:18:00',
          status:'0'
        },{
          time:'00:19:00',
          status:'0'
        }, {
          time:'00:20:00',
          status:'0'
        },{
          time:'00:21:00',
          status:'0'
        }, {
          time:'00:22:00',
          status:'0'
        },{
          time:'00:23:00',
          status:'0'
        }
        
      ],
      rightElement:[{
        text:'雾检测',
        status:0, // status: 0 默认 1 正常green 2 异常red
        rotate:'-46',
        top:'156px',
        left:'-326px',
        width:'377px'
      },{
        text:'水体检测',
        status:0,
        rotate:'-39',
        top:'122px',
        left:'-306px',
        width:'333px'
      },{
        text:'增强型植被',
        status:0,
        rotate:'-28',
        top:'92px',
        left:'-287px',
        width:'296px'
      },{
        text:'陆地气溶胶',
        status:0,
        rotate:'-17',
        top:'56px',
        left:'-274px',
        width:'272px'
      },{
        text:'海洋气溶胶',
        status:0,
        rotate:'-3',
        top:'24px',
        left:'-264px',
        width:'255px'
      },{
        text:'地表温度',
        status:0,
        rotate:'11',
        top:'-9px',
        left:'-264px',
        width:'255px'
      },{
        text:'海面温度',
        status:0,
         rotate:'25',
        top:'-39px',
        left:'-279px',
        width:'283px'
      },{
        text:'归一化植被',
        status:0,
         rotate:'35',
        top:'-73px',
        left:'-295px',
        width:'316px'
      },{
        text:'实施降水',
        status:0,
        rotate:'44',
        top:'-103px',
        left:'-313px',
        width:'350px'
      },{
        text:'植被供水',
        status:0,
         rotate:'50',
        top:'-138px',
        left:'-340px',
        width:'406px'
      },{
        text:'海温日产品',
        status:0,
        rotate:'55',
        top:'-168px',
        left:'-362px',
        width:'452px'
      }],
      leftElement:[{
        text:'大气校正',
        status:1,
        rotate:'48',
        top:'157px',
        left:'67px',
        width:(window.innerWidth-150)*0.22 //384
      },{
        text:'对流初生',
        status:0,
        rotate:'41',
        top:'123px',
        left:'92px',
        width:(window.innerWidth-150)*0.19
      },{
        text:'云检测',
        status:0,
        rotate:'32',
        top:'91px',
        left:'114px',
        width:(window.innerWidth-150)*0.16
      },{
        text:'云相态',
        status:0,
        rotate:'18',
        top:'61px',
        left:'123px',
        width:(window.innerWidth-150)*0.15
      },{
        text:'云类型',
        status:0,
        rotate:'5',
        top:'27px',
        left:'128px',
        width:(window.innerWidth-150)*0.145
      },{
        text:'白天云微物理',
        status:0,
        rotate:'-10',
        top:'-6px',
        left:'127px',
        width:(window.innerWidth-150)*0.147
      },{
        text:'云顶高度',
        status:0,
        rotate:'-24',
        top:'-37px',
        left:'120px',
        width:(window.innerWidth-150)*0.18
      },{
        text:'云顶温度',
        status:0,
         rotate:'-34',
        top:'-70px',
        left:'106px',
        width:(window.innerWidth-150)*0.17
      },{
        text:'云顶气压',
        status:0,
         rotate:'-43',
        top:'-99px',
        left:'87px',
        width:(window.innerWidth-150)*0.195
      },{
        text:'沙尘检测',
        status:0,
        rotate:'-48',
        top:'-139px',
        left:'58px',
        width:(window.innerWidth-150)*0.22
      },{
        text:'热源点检测',
        status:0,
        rotate:'-55',
        top:'-165px',
        left:'35px',
        width:(window.innerWidth-150)*0.25
      }]
    }
  },
  mounted(){
    const that = this
    window.addEventListener('resize', () => that.leftHeight = window.innerHeight-86-64, false)
    window.addEventListener('resize', () => that.lineHeight = window.innerHeight-86-64-129, false)
    // window.addEventListener('resize', () => this.upDataLineWandH(), false)
    // that.getMockData()
    console.log(window.innerWidth)
  },
  methods:{
    ...mapActions(['saveErrorList']),
    isActiveTime(val){
      this.defaultTime = val
      const errorList=[]
      const errorListLeft=[]
      this.rightElement.forEach((item,index)=>{
        if(item.status==1){
          errorList.push({time:val,text:item.text})
        }
      })
    this.leftElement.forEach((item,index)=>{
      if(item.status==1){
        errorListLeft.push({time:val,text:item.text})
      }
    })
    const allErrorList = [...errorList,...errorListLeft]
    
    if(allErrorList.length!==0){
      //统计告警信息数量
      console.log(allErrorList)
      this.saveErrorList(allErrorList)
      this.isShow= true
      this.errorList = allErrorList
    }
    },
    isUploadErr(val){
      this.defalutType=val
    },
    closeErrorDialog(val){
      this.isShow = val
    },
    getMockData(){
      api.JH_news('/api/monitor')
        .then(res => {
          console.log(res);
          this.hourList=res.data
        });
    },
    //线条的角度和宽度重新计算
    upDataLineWandH(){
       const allWidth = window.innerHeight-86-64
       const newHeightList = []
          this.leftElement.forEach((item,index)=>{
            newHeightList.push(item.width/allWidth*100)
       })
       console.log(newHeightList)
       newHeightList.forEach((item,index)=>{
        this.$set(this.leftElement[index],'width',item)
       })
     
    }
  },
  components: { ErrorDialog },
}
</script>

<style lang='scss' scoped>
@import './TransferStatus.scss';
@import './TransferVesion.scss';

</style>