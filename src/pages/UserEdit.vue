<template>
  <div class="add_box">
    <div class="title">角色修改</div>
    <form>
      <div class="input_box">
        <label for="username">角色名</label>
        <div class="inner_input">
          <input type="text" name="username" id="username" v-model="curUser.username" readonly="readonly" >
        </div>
      </div>
      <div class="radio_box">
        <span class="radio_name">数据权限</span>
        <input type="radio" id="one" value="全部" v-model="curUser.data_permission">
        <label for="one">全部</label>
        <input type="radio" id="two" value="本人" v-model="curUser.data_permission" style="marginLeft:20px">
        <label for="two">本人</label>
      </div>
      <div class="input_box">
        <label for="remark" style="vertical-align:top;" class="remark">备注</label>
        <div class="inner_input">
          <textarea style="width:100%;height:100px;"
          placeholder="请输入备注" id="remark"
          v-model="curUser.remark"></textarea>
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
export default {
  name:"addUser",
  data() {
    return {
      curUser:{},
      errmessage:"",
      isShow:false
    }
  },
  methods: {
    submitForm() {
      this.$store.dispatch('modify',this.curUser)
      this.$router.back()
    },
    getImgName(){
      let imgName = this.$refs.imgName.value.split("\\")
      let len = imgName.length
      console.log(imgName[len-1])
      this.imgName = imgName[len-1]
    },

  },
  created(){
    this.$bus.$on('userEidt',(curUser) => {
    this.curUser = curUser
    //console.log(this.curUser.username,this.curUser.data_permission,typeof this.curUser.remark)
    })
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
        input, textarea
          height 32px
          width 100%
          text-indent 10px
          &:focus
            outline-color #2b85e4
    .radio_box
      display inline-block
      margin-left 10px
      margin-bottom 20px
      height 32px
      .radio_name
        display inline-block
        width 110px
        height 32px 
        line-height 32px
        text-align right
        margin-right 18px
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
