<template>
  <div class="box">
    <div class="title">管理员列表</div>
    <div class="table_box">
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
            width="100"
            >    <!-- renderHeader：添加icon（会有warning） -->
            <template slot="header">   <!-- 自定义tableHeader -->
              <span>ID</span>
              <i class="el-icon-caret-top" style="font-size:12px;position:absolute;top:2px"></i>
              <i class="el-icon-caret-bottom" style="font-size:12px;position:absolute;bottom:2px"></i>
            </template>
          </el-table-column>
          <el-table-column
            prop="username"
            label="用户组名"
            width="200px">
          </el-table-column>
          <el-table-column
            prop="data_permission"
            label="数据权限"
            width="200">
            <template slot-scope="scope">
              <span style="backgroundColor:#19be6b;display:inline-block;width:32px;text-align:center;color:#fff;borderRadius:7%">{{scope.row.data_permission}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="remark"
            label="备注"
            width="520">
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
  name:"User",
  data () {
    return {
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
      margin-bottom 10px
    .admin_table_box
      margin-left 15px
      .ctr_add_del
        height 47.4px
        background-color #f5f5f5
        line-height 47.4px
        text-indent 16px
      .el-table__row:first-child 
        background-color #f5f5f5
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
