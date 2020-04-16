var mychart6 = echarts.init(document.getElementById("box6"));
var option1 = {
    // backgroundColor:'#d48265', //背景颜色
    color:['#bc0005'],//系列颜色
    xAxis: {//x轴
        type: 'category',
        data: ['Python','Rust','CSS	','Java','EL','JS','HTML','C++','C','PHP','Go'],
        axisLine:{ //线条设置
            lineStyle:{//线条颜色
                color: '#1b0025'
            }
        },
        axisLabel:{
            interval:0,//横轴信息全部显示
            rotate:-20,//-15度角倾斜显示
        },
    },
    grid:{  //图表在指定div中的位置,相当于html中的margin
        left:'2%',
        right:'2%',
        top:'2%',
        bottom:150,
        containLabel: true //是否显示刻度信息
    },
    yAxis: {//y轴
        type: 'value'
    },
    series: [{//展示数据
        data: [120,27,19,63,21,9,8,11,14,6,5],
        type: 'bar'  //line为折线图，bar为柱状图
    }]
};
//初始化

//设置数据
//mychart1.setOption(option);
//实时数据展示，这里为了制造动态图表，直接进行模拟数据
var data1 = [[120,27,19,63,21,9,8,11,14,6,5],
    [1248,101,87,85,61,46,40,34,32,17,10],
    [712,42,64,47,12,33,9,30,33,14,4],
    [611,50,57,36,21,73,4,15,33,5,5],
    [384,9,29,15,14,55,2,6,11,11,1],
    [391,3,10,15,8,34,0,8,6,6,0],
    [200,2,19,8,9,27,0,3,15,3,0],
    [121,1,12,5,3,29,0,2,6,2,0],
    [97,1,2,3,0,8,0,1,7,0,0],
    [28,0,1,1,0,6,0,0,0,0,0]];
//定时器
setInterval(getItem1, 1000);  //每间隔两秒钟请求一次函数
function getItem1(){
    var random = data1[parseInt(Math.random()*data1.length)];
    option1.series[0].data = random;  //获取series的第一行数据，并将模拟的数据赋值给他
    mychart6.setOption(option1);//重新加载表
}
//先直接调用该函数，可以让页面刚出现时图表就可以展现出来，也可以不写
getItem1();
if (option1 && typeof option1 === "object") {
    mychart6.setOption(option1, true);
}
