import Vue from 'vue'
import Vuex from 'vuex'
import userlis from '../../public/users.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    userlis:userlis
  },
  mutations:{
    update(state,newUserlis){
      state.userlis = newUserlis
    }
  },
  actions:{
    create({state},newUser){
      state.userlis.push(newUser)
    },
    delete({commit,state},idlis){
      console.log('islis:',idlis.indexOf("1")===0)
      // 不可删除admin
      idlis.indexOf("1")===0 ? idlis.splice(idlis.indexOf("1"),1) : idlis
      // 获取一个新的userlis
      let newUserlis = state.userlis.filter((user) => {
        return idlis.indexOf(user['id']) < 0
      })
      // 更新用户数据
      commit('update',newUserlis)
    },
    modify({state},curUser){
      let curUserId = curUser.id
      // 获取curUserId在userlis的所在的下标
      let num
      state.userlis.forEach((user,index) => {
        if (user.id === curUserId){
          num = index
        }
      });
      // 替换userlis中的user
      state.userlis.splice(num,1,curUser)
      console.log("curUserId:",curUserId,num)
      //commit('update',value)
    },
  },
  getters:{

  }
})