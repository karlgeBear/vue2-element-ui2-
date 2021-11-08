import Vue from 'vue'
import Vuex from 'vuex'
import userinfo from '../../public/users.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    userinfo:userinfo
  },
  mutations:{
    update(state,tableData){
      state.tableData = tableData
    }
  },
  actions:{
    create({commit},value){
      commit('update',value)
    },
    delete({commit},value){
      commit('update',value)
    },
    modify({commit},value){
      commit('update',value)
    },
  },
  getters:{

  }
})