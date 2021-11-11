import Vue from 'vue'
import { Col,Row,Icon,Menu,Submenu,MenuItem,MenuItemGroup,Input,Button,Select,Option,Table,TableColumn,ButtonGroup,Form,FormItem,Upload,Radio,Alert } from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './vuex/store'

Vue.use(Col)
Vue.use(Row)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(ButtonGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Upload)
Vue.use(Radio)
Vue.use(Alert)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
