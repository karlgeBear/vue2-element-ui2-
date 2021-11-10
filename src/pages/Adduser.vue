<template>
  <div class="add_box">
    <div class="title">管理员添加</div>
    <el-form
      :model="addUserForm"
      ref="addUserForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="所属角色" prop="admin" :rules="[{required: true, message: '所属角色不能为空', trigger: 'blur'}]">
        <el-input type="text" autocomplete="off" value="超级管理员"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname" :rules="[{required: true, message: '昵称不能为空'},{type:'string',message: '昵称必须是个字符串'}]">
        <el-input type="text" autocomplete="off" v-model.string="addUserForm.nickname" placeholder="请输入昵称"></el-input>
      </el-form-item>

      <el-form-item label="头像" prop="avatar" :rules="[{required: true}]">
        <input type="file" name="" id="" ref="imgName" @change="getImgName">
        <img src="" alt="">
        <i class="el-icon-picture"></i>
      </el-form-item>

      <el-form-item label="用户名" prop="username" :rules="[{required: true, message: '用户名不能为空'},{type:'string',message: '用户名必须是个字符串'}]">
        <el-input type="text" autocomplete="off" v-model.string="addUserForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :rules="[{required: true, message:'密码不能为空'},{type:'number',message: '密码必须为数字'}]">
        <el-input type="password" autocomplete="off" v-model.number="addUserForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status" :rules="[{required: true,message:''}]">
        <el-radio checked :label="1" >启用</el-radio>
        <el-radio :label="2">备用</el-radio>
      </el-form-item>
      <el-form-item label="年龄" prop="age"
        :rules="[
          { required: true, message: '年龄不能为空' },
          { type: 'number', message: '年龄必须为数字值' },
        ]"
      >
        <el-input type="age" v-model.number="addUserForm.age" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('addUserForm')"
          >提交</el-button
        >
        <el-button @click="$router.back()">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      addUserForm: {
        age: '',
      },
      radio: '1'
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    /* 先等会。未实现 */
    // 获取文件名，保存到本地，放在img的src？显示图片，
    //【el-upload，没有后台处理图片】 【搭建express后台？操作文件save？】  
    getImgName(){
      let imgName = this.$refs.imgName.value.split("\\")
      let len = imgName.length
      console.log(imgName[len-1])
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
    margin-bottom 20px
  form 
    padding-bottom 15px
    .avatar-uploader-icon 
      border 1px solid #DCDFE6
      font-size 40px
      color #8c939d
      height: 80px
      width 80px
      line-height 80px
      text-align center
</style>
