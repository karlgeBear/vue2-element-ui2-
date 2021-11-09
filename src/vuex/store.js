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
    create({commit},value){
      commit('update',value)
    },
    delete({commit,state},idlis){
      let newUserlis =  state.userlis.filter((user) => {
        return idlis.indexOf(user['id']) < 0
      })
      console.log('sdel',idlis)
      commit('update',newUserlis)
    },
    modify({commit},value){
      commit('update',value)
    },
  },
  getters:{

  }
})