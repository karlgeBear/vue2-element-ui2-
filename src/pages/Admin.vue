<template>
  <div class="box">
    <div class="title">管理员列表</div>
    <div class="table_box">
      <div class="select">
        <div class="s_user_name">
          <label for="user_name">用户名：</label>
          <el-input v-model="name" placeholder="用户名|昵称" id="user_name"></el-input>
        </div>      
        <div class="s_user">
          <label for="user">角色：</label>
          <el-select v-model="user" placeholder="请选择">
            <el-option
              v-for="item in getOptions"
              :key="item.user"
              :label="item.label"
              :value="item.user">
            </el-option>
          </el-select> 
          <el-button type="danger" icon="el-icon-refresh" size="small" @click="reset">重置</el-button>
          <el-button type="primary" icon="el-icon-search" size="small" @click="search">搜索</el-button>
        </div>
      </div>
      <div class="admin_table_box">
        <div class="ctr_add_del">
          <el-button type="primary" icon="el-icon-plus" size="mini" @click="$router.push('/adduser')">添加</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="handleDelete(idlis)">删除</el-button>
        </div>
        <el-table
          border
          ref="multipleTable"
          :data="userlis"
          tooltip-effect="dark"
          style="width: 100%;font-size:13px;color:black"
          :header-cell-style="{color:'black',backgroundColor:'#f5f5f5'}"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="id"
            label="ID"
            width="80"
            >    <!-- renderHeader：添加icon（会有warning） -->
            <template slot="header">   <!-- 自定义tableHeader -->
              <span>ID</span>
              <i class="el-icon-caret-top" style="font-size:12px;position:absolute;top:2px"></i>
              <i class="el-icon-caret-bottom" style="font-size:12px;position:absolute;bottom:2px"></i>
            </template>
          </el-table-column>
          <el-table-column
            prop="user"
            label="角色"
            width="120">
          </el-table-column>
          <el-table-column
            prop="avatar"
            label="头像"
            width="60">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" alt="head" style="width:36px;height:36px;border-radius:50%">
            </template>
          </el-table-column>
          <el-table-column
            prop="nickname"
            label="昵称"
            width="90">
          </el-table-column>
          <el-table-column
            prop="username"
            label="用户名"
            width="270">
          </el-table-column>
          <el-table-column
            prop="lastLoginTime"
            label="最后登录时间"
            width="150"
            >
            <template slot="header">   <!-- 自定义tableHeader -->
              <span>最后登录时间</span>
              <i class="el-icon-caret-top" style="font-size:12px;position:absolute;top:2px"></i>
              <i class="el-icon-caret-bottom" style="font-size:12px;position:absolute;bottom:2px"></i>
            </template>
            <!-- <template slot-scope="scope">{{scope.row.lastLoginTime}}</template>  自定义tableHeader下的内容(不写也照样生效：prop已经传值) -->
          </el-table-column>
          <el-table-column
            prop="lastLoginIP"
            label="最后登录IP"
            width="120">
            <!-- <template slot-scope="scope">{{ scope.row.lastLoginIP }}</template> -->
          </el-table-column>
          <el-table-column
            width="130"
            label="状态"
          >             <!-- show-overflow-tooltip：让table表格随手动拉伸自适应长度 -->
          <template slot-scope="scope">
            <span v-if="scope.row.id == 1" style="backgroundColor:#F56C6C">禁止操作</span>
            <button v-if="scope.row.id != 1" style="backgroundColor:#409EFF;border:1px solid #ebeef5;border-right:none;height:28px;color:#fff">启用</button>
            <button v-if="scope.row.id != 1" style="backgroundColor:#FFF;border:1px solid #ebeef5;border-left:none;height:28px;color:#ebeef5;vertical-align:top"><i class="el-icon-check"></i></button>
          </template>
          </el-table-column>
            <el-table-column
              width="170"
              label="操作"
            >
            <template slot-scope="scope">
  　　　　　　  <el-button type="primary" size="mini" class="el-icon-edit" @click="handleEdit(scope.row.id,scope.row,scope.$index)">修改</el-button>
  　　　　　　  <el-button type="danger" size="mini" class="el-icon-delete" @click="handleDelete([scope.row.id])">删除</el-button>
  　　　　  </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="footer_page">
        <button>首页</button>
        <button>上一页</button>
        <button>1</button>
        <button>下一页</button>
        <button>尾页</button>
        <span>共13条/页</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type='text/ecmascript-6'>
import { mapState } from 'vuex'
export default {
  name:"Admin",
  data () {
    return {
      // user下选框数据
      // options: [{
      //   value: '角色1',
      //   label: '角色1'
      // }, {
      //   value: '角色2',
      //   label: '角色2'
      // }],
      name:'',
      user: '',
      idlis:[]
    }
  },
  methods:{
    // 选项操作
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log('val',val)
      this.idlis =  val.map((user) => {
        return user.id
      })

      console.log('this.idlis:',this.idlis)
    },
    // render 事件,给表头添加icon
    // renderHeader (h,{column}) {
    //   console.log('h:',h,'column:',column)
    //   return h(
    //     'div',
    //     [ 
    //       h('span', column.label),
    //       h('i', {
    //         class:"el-icon-caret-top",
    //         style: "font-size:12px;position:absolute;top:2px"
    //       }),
    //       h('i', {
    //         class:"el-icon-caret-bottom",
    //         style: "font-size:12px;position:absolute;bottom:2px"
    //         //slot: "reference"
    //       })
    //     ],
    //   )
    // },
    // 清空input的值
    reset(){
     this.name = ""
     this.user = ""
    },
    // 查找表格相应的值，并返回相应的行
    search(){
     if (!(this.name && this.user)) {
       alert("请输入和选择角色")
       return
      }
     const result = this.userlis.filter((user) => {
       return (user["username"] === this.name || user["nickname"] ===this.name) && user["user"] === this.user
     })
     if (result.length === 0){
       alert('未匹配到相应的角色')
       return
     }
    },
    // 修改对应的行
    handleEdit(dataID, curRow,rowIndex) {
      console.log(dataID, curRow,rowIndex)
    },
    //点击删除对应的行
    handleDelete(idlis) {
      console.log('当前点击用户idlis值',idlis)
      this.$store.dispatch('delete',idlis)
    }
  },
  computed:{
    ...mapState(['userlis']),
    getOptions(){
      const options = []
      this.userlis.forEach(user => {
        options.push({"user":user.user,"label":user.user})
      })
      return options
    },
  },
  mounted(){
    //console.log('this.getOptions:',this.getOptions)
    //this.$store.dispatch('delete',id)
  }
}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .box
    margin 115px 0 0 15px
    background-color #fff
    height 100%
    .title
      height 39px
      line-height 40px
      border-bottom 1px solid gray
      font-weight blod
      text-indent 16px
    .select
      height 60px
      padding-left 15px
      display flex
      align-items center
      .s_user_name
        font-size 14px
        margin-left 40px
        .el-input
          width 70%
          >>> .el-input__inner
            height 32px
      .s_user
        font-size 14px
        >>> .el-input__inner
            height 32px
        .el-button--danger
          margin-left 30px
    .admin_table_box
      margin-left 15px
      .ctr_add_del
        height 47.4px
        background-color #f5f5f5
        line-height 47.4px
        text-indent 16px
      .el-table__row:first-child 
        .el-button--danger
          color gray
          background-color #f5f5f5
          border 1px solid #EBEEF5
          pointer-events none
    .footer_page
      height 70px
      line-height 70px
      text-align center
      button
        height 32px
        background-color: #f5f5f5;
        border 1px solid #ebeef5;
        color #808080;
        margin-right 10px
        &:nth-child(3)
          background-color #409EFF
          width 32px
          color #fff
      span
        font-size 13px
      
</style>
