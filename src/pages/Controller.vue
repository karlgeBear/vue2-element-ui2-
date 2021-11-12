<template>
  <div class="box">
    <div class="welcome">您好：admin，欢迎使用网站后台管理系统。今天是：{{getTime}}</div>
    <div class="artical">
      <div class="artical_box">
        <div class="head">
          <span>文章总数</span>
          <span>总数</span>
        </div>
        <div class="num">32</div>
        <div class="detail">
          <span>今日发布</span>
          <span>0篇<i class="el-icon-document"></i></span>
        </div>
      </div>
      <div class="artical_box">
        <div class="head">
          <span>审核总数</span>
          <span>总数</span>
        </div>
        <div class="num">32</div>
        <div class="detail">
          <span>待审核</span>
          <span>0篇<i class="el-icon-document"></i></span>
        </div>
      </div>
      <div class="artical_box">
        <div class="head">
          <span>我的发布</span>
          <span>总数</span>
        </div>
        <div class="num">32</div>
        <div class="detail">
          <span>今日发布</span>
          <span>0<i class="el-icon-chat-dot-round"></i></span>
        </div>
      </div>
      <div class="artical_box">
        <div class="head">
          <span>栏目总数</span>
          <span>总数</span>
        </div>
        <div class="num">32</div>
        <div class="detail">
          <span>隐藏栏目</span>
          <span>0<i class="el-icon-chat-round"></i></span>
        </div>
      </div>
    </div>
    <broken-line></broken-line>
  </div>
</template>

<script type='text/ecmascript-6'>
import BrokenLine from '@/components/echarts/BrokenLine'
export default {
  name:"Controller",
  data () {
    return {}
  },
  components:{
      BrokenLine
  },
  computed:{
    getTime(){
      const date = new Date()
      return date.getFullYear() +'-'+ (date.getMonth()+1) +'-'+ date.getDate()

    }
    
  }
}

</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  .box
    margin 115px 15px
    .welcome
      height 50px
      line-height 50px
      border 1px solid #bce8f1
      background-color #d9edf7
      text-indent 16px
      color #31708f
    .artical
      height 173px
      display flex
      background-color #f5f5f5
      .artical_box
        width 302px
        height 148px
        margin-top 15px
        text-indent 16px
        background-color #fff
        &:not(:first-child)
          margin-left 15px
        .head
          height 41px
          line-height 41px
          border-bottom 1px solid #1e9fff
          span:last-child
            border-radius 12%
            margin-left 175px
            background-color #1e9fff
        .num
          height 70px
          line-height 70px
          color #2b85e4
          font-size 28px
        .detail
          padding 0 10px 0 0
          color #999999
          span:last-child
            float right
              
            






</style>
