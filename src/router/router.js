/* 
所有路由配置的数组
*/
import Controller from '../pages/Controller.vue'
import Admin from '../pages/Admin.vue'
import User from '../pages/User.vue'
import Adduser from '../pages/Adduser.vue'

export default [
  {
    name:'controller',
    path:'/controller',
    component:Controller
  },
  {
    path:'/admin',
    component:Admin,
  },
  {
    name:'user',
    path:'/user',
    component:User
  },
  {
    name:'adduser',
    path:'/adduser',
    component: Adduser
  },
  {
    path:'/',
    redirect:'/controller'
  }

]