export const DrangeEchart = (ele, data, title) => {
    ele.clear()
    var option = {
        title: {
            text: title,
            textStyle: {
                fontSize: 18,
                fontWeight: 400,
                fontFamily: 'Microsoft YaHei'
            },
            left: 'middle',
            textAlign: 'center',

        },
        grid: {
            show: true,
            top: 80,
            left: 40,
            right: 0,
            bottom: 30, //下面距离
            containLabel: false,
        },
        xAxis: {
            show: true,
            position: 'bottom',
            offset: 0,
            type: 'category',
            name: '',
            nameLocation: 'end',
            nameTextStyle: {
                color: '#fff',
                padding: [2, 0, 0, -2],
            },
            nameGap: 20,
            axisLabel: { interval: 0 },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#B8B8B8',
                    width: 0.5,
                    type: 'solid',
                    fontSize: 12,
                    fontWeight: 400,
                    opacity: 0.2
                },
            },
            axisTick: { //关键设置，坐标轴刻度也不显示
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {},
            },
            splitArea: {
                show: false,
            },
            data: ['通道0', '通道1', '通道2', '通道3', '通道4', '通道5', '通道6', '通道7', '通道8', '通道9', '通道10', '通道11', '通道12', '通道13', '通道14', '探测仪'], //内容
        },
        yAxis: {
            show: true,
            position: 'left',
            offset: 0,
            type: 'value',
            name: '数据量',
            nameLocation: 'end',
            max: 120,
            splitNumber: 5,
            nameTextStyle: {
                padding: [5, 0, 0, -30], //---坐标轴名称相对位置
                fontSize: 12,
                fontFamily: 'Microsoft YaHei',
                fontWeight: '400',
                lineHeight: 13,
                color: '#919191',
            },
            nameGap: 15, //---坐标轴名称与轴线之间的距离
            axisLine: {
                show: true, //---是否显示
                lineStyle: {
                    color: '#B5B5B5',
                    width: 0.5,
                    type: 'solid',
                    opacity: 0.2
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true, //---y轴是否显示 
                inside: false, //---是否朝内
                rotate: 0, //---旋转角度
                margin: 6, //---刻度标签与轴线之间的距离
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#B5B5B5',
                    width: 0.5,
                    type: 'solid', //---类型
                },
            },
            splitArea: {
                show: false,
            },
        },
        series: {
            name: 'file',
            type: 'bar',
            barWidth: '20',
            color: '#109583',
            barCategoryGap: '20%',
            itemStyle:  {     
                normal:  {  //柱形图圆角，初始化效果
                    barBorderRadius: [10,  10,  0,  0],
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: '#333333',
                            fontSize: 14,
                            fontWeight: 400,
                            fontFamily: 'Microsoft YaHei',
                        }
                    }          
                }
            },
            data: data[1]
        }
    };
    ele.setOption(option)
    setTimeout(() => {
        window.onresize = () => {
            ele.resize();
        }
    }, 200)
}

export const DrangeEchartUpload = (ele, title) => {
    ele.clear()
    var option = {
        title: {
            text: title,
            textStyle: {
                fontSize: 18,
                fontWeight: 400,
                fontFamily: 'Microsoft YaHei'
            },
            left: 'middle',
            textAlign: 'center',
        },
        grid: {
            show: false,
            top: 80,
            left: 40,
            right: 0,
            bottom: 40, //下面距离
            containLabel: false,
        },
        dataZoom: [{
            type: 'slider',
            height: 6,
            left: 40,
            right: 20,
            bottom: 0,
            textStyle: 'none',
            show: true,
            handleSize: '100%',
            start: 0,
            end: 30,
            fillerColor: '#109583',
            backgroundColor: '#E9E9E9',
            dataBackground: {
                lineStyle: {
                    opacity: 0
                },
                areaStyle: {
                    opacity: 0,
                }
            },
            handleIcon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAAECAYAAACus0BrAAAASElEQVRIS2Pkn9qczsDwv4WRgVGEYRQMzxD4//8DAwNTAaPAlKb3DIyMAsPTl6O+goXAf4b/b0Yje4SkB3BkjxbjIyC2ocU4AIyZFzUOXz76AAAAAElFTkSuQmCC",
            borderColor: 'none',
        }, {
            type: 'inside'
        }],
        xAxis: {
            show: true,
            position: 'bottom',
            offset: 0,
            type: 'category',
            name: '',
            nameLocation: 'end',
            nameTextStyle: {
                color: '#fff',
                padding: [2, 0, 0, -2],
            },
            nameGap: 20,
            axisLabel: { interval: 0 },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#B8B8B8',
                    width: 1,
                    type: 'solid',
                    fontSize: 12,
                    fontWeight: 400,
                    opacity: 0.2
                },
            },
            axisTick: { //关键设置，坐标轴刻度也不显示
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {},
            },
            splitArea: {
                show: false,
            },
            data: ['通道0', '通道1', '通道2', '通道3', '通道4', '通道5', '通道6', '通道7', '通道8', '通道9', '通道10', '通道11', '通道12', '通道13', '通道14', '探测仪'], //内容
        },
        yAxis: {
            show: true,
            position: 'left',
            offset: 0,
            type: 'value',
            name: '数据量',
            nameLocation: 'end',
            max: 120,
            splitNumber: 5,
            nameTextStyle: {
                padding: [5, 0, 0, -30],
                fontSize: 12,
                fontFamily: 'Microsoft YaHei',
                fontWeight: '400',
                lineHeight: 13,
                color: '#919191',
            },
            nameGap: 15,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#B5B5B5',
                    width: 1,
                    type: 'solid',
                    opacity: 0.2
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                inside: false,
                rotate: 0,
                margin: 10,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#B5B5B5',
                    width: 1,
                    type: 'solid',
                },
            },
            splitArea: {
                show: false,
            },
        },
        series: {
            name: 'file',
            type: 'bar',
            barWidth: '20',
            color: '#109583',
            barCategoryGap: '20%',
            itemStyle:  {     
                normal:  {            //柱形图圆角，初始化效果
                    barBorderRadius: [10,  10,  0,  0],
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: '#333333',
                            fontSize: 14,
                            fontWeight: 400,
                            fontFamily: 'Microsoft YaHei',
                        }
                    }          
                }
            },
            data: [55, 23, 45, 66, 78, 109, 23, 55, 66, 33, 63, 62, 89, 56, 93, 15]
        }
    };
    ele.setOption(option)
    setTimeout(() => {
        window.onresize = () => {
            ele.resize()
        }
    }, 200)
}