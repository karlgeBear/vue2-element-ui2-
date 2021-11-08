/* 
所有路由配置的数组
*/
import Controller from '../pages/Controller.vue'
import Admin from '../pages/Admin.vue'
import User from '../pages/User.vue'

export default [
  {
    name:'controller',
    path:'/controller',
    component:Controller
  },
  {
    name:'admin',
    path:'/admin',
    component:Admin
  },
  {
    name:'user',
    path:'/user',
    component:User
  },
  {
    path:'/',
    redirect:'/controller'
  }

]