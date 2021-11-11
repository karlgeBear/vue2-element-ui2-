<template>
  <div class="add_box">
    <div class="title">管理员添加</div>
    <form>
      <div class="input_box">
        <label for="belongToUser">所属角色</label>
        <div class="inner_input">
          <input name="belongToUser" id="belongToUser" value="超级管理员" readonly="readonly">
        </div>
      </div>
      <div class="input_box">
        <label for="nickname">昵称</label>
        <div class="inner_input">
          <input name="nickname" id="nickname" 
          placeholder="请输入昵称" autocomplete="off"
          v-model="nickname" >
        </div>
      </div>
      <div class="input_box">
        <label for="avatar">头像</label>
        <div class="inner_input" style="border:none">
          <input type="file" name="avatar" id="avatar" 
          autocomplete="off"
          ref="imgName"
          @change="getImgName">
        </div>
      </div>
      <div class="input_box">
        <label for="username">用户名</label>
        <div class="inner_input">
          <input type="text" name="username" id="username"
          placeholder="请输入用户名" autocomplete="off"
          v-model="username" >
        </div>
      </div>
      <div class="input_box">
        <label for="password">密码</label>
        <div class="inner_input">
          <input type="password" name="password" id="password" 
          placeholder="请输入密码" autocomplete="off"
          v-model="password" >
        </div>
      </div>
      <div class="input_box">
        <label for="status">状态</label>
        <div class="radio_box">
          <input type="radio" name="status" checked>
          <span></span>启用</span>
        </div>
        <div class="radio_box">
          <input type="radio" name="status">
          <span>禁用</span>
        </div>
      </div>
      <div class="button_box">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button type="primary" @click="$router.back()">返回</el-button>
      </div>
      <el-alert :title="errmessage" v-show="isShow" type="error"></el-alert>
    </form>
  </div>

</template>

<script type='text/ecmascript-6'>
import {mapState} from 'vuex'
export default {
  name:"addUser",
  data() {
    return {
      nickname:"",
      imgName:"",
      username:"",
      password:"",
      errmessage:"",
      isShow:false
    }
  },
  computed:{
    ...mapState(['userlis']),
  },
  methods: {
    submitForm() {
      // 判断提交数据是否正确
      if (!this.nickname) {
        this.errmessage = "请输入昵称"
        this.isShow = true
        console.log(Boolean(this.username))
        return
      }else if (!this.imgName) {
        this.errmessage = "请上传头像"
        return
      }else if (!this.username) {
        this.errmessage = "请输入用户名"
        return
      }else if(!this.password){
        this.errmessage = "请输入密码"
        return
      }


      let time = new Date()  //"2021-11-5 10:45:36"
      // 当前addUser的时间
      const curCreateTime = `${time.getFullYear() +'-'}${time.getMonth()+1+'-'}${time.getDate() +' '}${time.getHours() +':'}${time.getMinutes() +':'}${time.getSeconds()}`
      // 获取最大的id值+1
      const userId = this.userlis.reduce((pre,cur) => {
        return pre.id > cur.id ? pre.id : cur.id
      })
      console.log(userId)
      console.log(curCreateTime)
      console.log(this.userlis)
      
      let newUser = {
        "id": parseInt(userId)+1,
        "user": this.username,
        "avatar": "http://api.btstu.cn/sjtx/api.php?lx=c1&format=images",
        "nickname": this.nickname,
        "username": this.username,
        "lastLoginTime": curCreateTime,
        "lastLoginIP": ""
      }

      this.$store.dispatch('create',newUser)
      this.$router.back()
    },
    getImgName(){
      let imgName = this.$refs.imgName.value.split("\\")
      let len = imgName.length
      console.log(imgName[len-1])
      this.imgName = imgName[len-1]
    }
  }
}
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
.add_box 
  margin: 115px 0 0 15px;
  background-color: #fff;
  height: 100%;
  .title
    height 39px
    line-height 39px
    text-indent 16px
    border-bottom 1px solid #DCDFE6
    margin-bottom 10px
  form 
    padding-bottom 15px
    .input_box
      margin-bottom 20px
      label
        display inline-block
        width 120px
        height 32px 
        line-height 32px
        text-align right
        margin-right 18px
        &::before
          content '*'
          color #f56c6c
          margin-right 4px
      .inner_input
        display inline-block
        border 1px solid #DCDFE6
        height 32px
        width 88%
        input
          height 32px
          width 100%
          text-indent 10px
          &:focus
            outline-color #2b85e4
      .radio_box
        display inline-block
        margin-left 10px
        input
          width 22px
          height 22px
          vertical-align middle
          margin-right 5px
    .button_box
      margin-left 138px
    .el-alert
      margin-top 15px
      justify-content center

</style>
