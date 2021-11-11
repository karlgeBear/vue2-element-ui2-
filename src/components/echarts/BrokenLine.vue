<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div>
    <div id="main_title">数据统计</div>
    <div id="main"></div>
  </div>
  
</template>

<script type='text/ecmascript-6'>
import* as echarts from 'echarts'
export default {
  name: 'BrokenLine',
  data() {
    return {
      charts: '',
       //opinion: ["1", "3", "3", "4", "5"],
      opinionData: ["0","0","0","0","0","0","0","0.1","0.2","0.4","0.6","0.8","1"]
    }
  },
  methods: {
    drawLine(id) {
      console.log(echarts)
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        title:{
          text: '近七天文章发布统计',
          left: '15px',
        },
        tooltip: {   // 提示宽控件
          trigger: 'axis'
        },
        legend: {  //图例控制
          data: ['发布总量']
        },
        grid: {  // 图例内网格控制
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: { //x轴
          type: 'category',
          boundaryGap: false,
          data: ["2021-11-1","2021-11-2","2021-11-3","2021-11-4","2021-11-5","2021-11-6","2021-11-7"]
        },
        yAxis: {  // y轴
          type: 'value'
        },
        series: [{  // 系列列表。
          name: '发布总量',
          type: 'line',
          stack: '总量',
          data: this.opinionData,
          color:'red',
          label:{
            show: false,
          },  
        }]
      })
    }
  },
  //调用
  mounted() {
    this.$nextTick(function() {
      this.drawLine('main')
    })
  }
}

</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  #main_title
    width 100%
    height 40px
    line-height 40px
    text-indent 16px
    background-color #fff
    border-bottom 1px solid rgb(236 239 246)
  #main
    width 100%
    height 300px
    background-color #fff

   
</style>
