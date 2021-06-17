const Mock = require('mockjs')
const Random = Mock.Random

const newsData = function() {
    let articles = []
    for (let i = 0; i < 10; i++) {
        let newsObj = {
            date: Random.date(), //年月日
            longDate: Random.datetime(), //精确到时分秒
            number: Random.natural(201, 205), //数字
            image: Random.image(), //图片
            flag: Random.boolean(), // true-false
            name: Random.cname(), //姓名
            url: Random.url(), //url地址
            province: Random.province(), //省
            city: Random.city(), //市
            county: Random.county() //区
        }
        articles.push(newsObj)
    }
    return {
        code: 200,
        data: articles,
    }

}
const monitorData = (() => {
        let itemList = []
        for (let i = 0; i < 24; i++) {
            let item = {
                time: '00' + ':' + '0' + i >= 10 ? i.splice(1, i.length - 1) : i + ':' + '00',
                status: Random.boolean() ? '1' : '0'
            }
            itemList.push(item)
        }
        return {
            code: 200,
            data: itemList
        }
    })
    /*
      @echart mockData
      @ada
      @data 2020-12-15
    */
const monitorEchart = (() => {
    const dataY = [];
    const dataX = ['通道0', '通道1', '通道2', '通道3', '通道4', '通道5', '通道6', '通道7', '通道8', '通道9', '通道10', '通道11', '通道12', '通道13', '通道14', '探测仪'];
    for (let i = 0; i < 16; i++) {
        let val = Random.natural(10, 100)
        dataY.push(val)
    }
    const EchartData = []
    dataX.forEach((item, index) => {
        const echartItem = {
            port: item,
            value: dataY[index]
        }
        EchartData.push(echartItem)
    })
    return {
        code: 200,
        data: EchartData
    }
})
Mock.setup({
    timeout: 500
})

//存储状态数据图表
const saveFilesData = (() => {
    const item = {
        deviceName: '/dev/sda',
        direct: '/dackup1',
        type: 'ext4',
        size: '11T',
        avail: '8.5T',
        used: '1.5T'
    }
    const list = []
    for (let i = 0; i < 3; i++) {
        list.push(item)
    }
    return {
        code: 200,
        data: list
    }
})

//表格数据
const table = (() => {
    const tableItem = {
        time: Random.datetime(),
        downloadErr: 0, //0 ==>下载告警 ,1==>上传告警
        handleStatus: 0, //0 已处理, 1 未处理
        filePath: require('../assets/clound.png')
    }
    const tableList = []
    for (let i = 0; i < 10; i++) {
        tableList.push(tableItem)
    }
    return {
        code: 200,
        data: tableList
    }
})

Mock.mock('/api/user/myTranferRecord', 'post', newsData) //post请求

Mock.mock('/api/monitor', 'post', monitorData) //post请求

//echart模拟数据
Mock.mock('/api/monitorEchart', 'post', monitorEchart) //post请求

Mock.mock('/api/alarmTable', 'post', table) //post请求

Mock.mock('/api/saveList', 'post', saveFilesData)