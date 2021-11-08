/* 
向外暴露路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'

// 声明使用vue插件
Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)  //声明使用vue插件

export default new VueRouter({
  mode:'history',  //路由路径没有#

  // 配置项目中所有的路由
  routes: router
})
