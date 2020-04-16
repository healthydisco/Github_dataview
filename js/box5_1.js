var myChart5_1 = echarts.init(document.getElementById("box5_1"));
myChart5_1.setOption({
    //图标题
    title:{text: '异步加载的数据'},
    //图提示框
    tootip:{},
    //图例
    legend:{
        data:['销售']
    },
    grid: {
        bottom:150
    },
    //x轴属性
    xAxis:{
        data:[]
    },
    //y轴属性
    yAxis:{},
    //图属性
    series:[
        {
            name:'销售',
            type:'bar',//图类型：柱状图
            color:['#d60005'],//设置图像颜色
            data:[]//图表的数值
        }
    ]
});
//使用jQuery中的$.get()获取data.json文件，使用done函数;
//done(function(data))中data表示调用的函数返回的数据
setInterval($.get('data.json').done(function(data){
    myChart5_1.setOption({
        xAxis:{
            data:data.category
        },
        series:{
            name:'销售',
            data:data.data
        }
    });

}), 1000);

