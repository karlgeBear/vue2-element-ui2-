<template>
  <div>
    <div class="side_nav">
      <el-row class="tac">
        <el-col :span="4">
          <el-menu
            router
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            @select="handSelect"
            text-color="#fff"
            >
            <li class="logo_and_name">
              <div class="name_box">
                <span><img class="logo" src="../common/images//police.webp" alt=""></span>
                <span class="msite_name">信州义警</span></br>
                <span class="msite_ename">XINZHOU VIGILANTES</span>
              </div>
            </li>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>首页</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/controller"><i class="el-icon-location"></i>控制台</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>内容管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1"><i class="el-icon-location"></i>选项1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>活动管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1"><i class="el-icon-location"></i>选项1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>签到管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1"><i class="el-icon-location"></i>选项1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>标记管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1"><i class="el-icon-location"></i>选项1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>咨询管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="6-1"><i class="el-icon-location"></i>选项1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>友情链接</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="7-1"><i class="el-icon-location"></i>选项1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>广告管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="8-1"><i class="el-icon-location"></i>选项1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="9">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/admin"><i class="el-icon-location"></i>管理员</el-menu-item>
                <el-menu-item index="/user"><i class="el-icon-location"></i>角色</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="10">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="10-1"><i class="el-icon-location"></i>选项1</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="20">
          <div class="header">
            <div class="h_top">
              <div class="left_icon">
                <a href=""><i class="el-icon-s-fold"></i></a>
                <a href=""><i class="el-icon-refresh"></i></a>
              </div>
              <div class="right_icon">
                <a href=""><i class="el-icon-s-shop"></i></a>
                <a href=""><i class="el-icon-delete-solid"></i></a>
                <a href=""><i class="el-icon-rank"></i></a>
                <a href=""><img src="../common/images/head_portrait.jpg" alt="登陆头像"> admin<i class="el-icon-caret-bottom"></i></a>
                <a href=""><i class="el-icon-warning"></i></a>
              </div>
            </div>
            <div class="h_bottom">
              <span>控制台</span>
              <span>/</span>
              <span>首页</span>
            </div>
          </div>
          <div class="content">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name:'GuideSidenav',
  data () {
    return {}
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handSelect(key,keyPath){
      console.log('handSelect',key,keyPath)
    }
  }
}

</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  .el-menu-item.is-active 
      background-color: #6db6ff !important
  .el-submenu__title.is-active 
    background-color: #6db6ff !important

  .el-col-4
    height 100vh
    background-color #545c64
    position fixed
    overflow hidden
    .el-menu
      height auto
      background-color: inherit
      .el-menu-item-group
        background-color black
        .el-menu-item
          color #fff
      .logo_and_name
        height 56px
        border-bottom 1px solid gray
        color white
        display flex
        justify-content center
        align-items center
        .logo
          width 40px
          height 40px
          display block
          border 1px solid gray
          border-radius 50% 
          float left
          margin-right 3px
          
        .msite_name
          font-size 22px
          letter-spacing 11px
        .msite_ename
            font-size 12px
  .el-col-20
    height 1080px;
    background-color: #f5f5f5
    position: relative
    left 254.2px
    .header 
      position fixed
      width 83.33333%
      height 100px
      background-color #fff
      z-index 99
      .h_top
        width 100%
        height 56px
        border-bottom 1px solid gray
        display flex
        justify-content space-between
        align-items center
        a
          margin-left 30px
          color black
        .right_icon
          display table-cell
          vertical-align meddle
          text-align center
          img
            width 30px
            height 30px
            border-radius 50%
            vertical-align middle
          .el-icon-warning
            margin-right 30px
      .h_bottom
        height 43px
        line-height 43px
        span
          margin-left 12px
          color gray
        span:nth-child(3)
          color: black
</style>

