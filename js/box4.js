var dom = document.getElementById("box4");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: ''
    },
    legend: {
        data: ['2019','2018', '2017', '2016']
    },
    radar: [
        {
            indicator: [
                { text: 'Python',max:1000 },
                { text: 'Rust',max:100 },
                { text: 'CSS',max:100  },
                { text: 'Java',max:100  },
                { text: 'EmacsLisp' ,max:100 }
            ],
            center: ['25%', '50%'],
            radius: 120,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
                formatter: '【{value}】',
                textStyle: {
                    color: '#72ACD1'
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(114, 172, 209, 0.2)',
                        'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                        'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        {
            indicator: [
                { text: 'Python',max:400},
                { text: 'Rust',max:100},
                { text: 'CSS' ,max:100},
                { text: 'Java',max:100 },
                { text: 'EmacsLisp',max:100 },
                { text: 'Javascript',max:100 }
            ],
            center: ['75%', '50%'],
            radius: 120
        }
    ],
    series: [
        {
            name: '雷达图',
            type: 'radar',
            emphasis: {
                lineStyle: {
                    width: 4
                }
            },
            data: [
                {
                    value: [1248, 101, 87, 85, 61],
                    name: '2019',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                {
                    value: [712, 42, 64, 47, 12],
                    name: '2018',
                    areaStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            ]
        },
        {
            name: '成绩单',
            type: 'radar',
            radarIndex: 1,
            data: [
                {
                    value: [611, 50, 57, 36, 23, 73],
                    name: '2017',
                    label: {
                        show: false,
                        formatter: function(params) {
                            return params.value;
                        }
                    }
                },
                {
                    value: [384, 9, 29, 15, 14, 55],
                    name: '2016',
                    areaStyle: {
                        opacity: 0.9,
                        color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                            {
                                color: '#B8D3E4',
                                offset: 0
                            },
                            {
                                color: '#72ACD1',
                                offset: 1
                            }
                        ])
                    }
                }
            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
