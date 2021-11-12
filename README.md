# baseiterview

## 1、需求：
```
框架：采用element ui 2.x
Vue： 2.x版本
要求：参考下图实现以下板块，增删改查界面及操作
备注：仅实现前端界面及操作，无需对接数据库（后端），接口数据在项目public目录自定义

板块栏目结构：
主页
—控制台
权限关联
—管理员
—角色
```
## 1、采用
  1. vue： vue2+element-ui2+vuex3+vue-router3
  2. 可视化：echarts
  3. 预编译器：stylus
## 2、数据描述：
  - 全局用vuex来管理。
  - 一刷新，将重新加载，原有的数据失效
## 3、完成度
  - 界面：基本实现，
  - 操作：增删改查已实现
  - 不足：
    1. 界面右侧是个header的底部是个tab页，点击右侧导航栏对应相应显示
    2. 界面未高度还原，颜色结构数据均自定义
    3. 头像上传是上传的一个随机获取头像的api，并未修改成功，原因：要搭后台处理保存图片，或者用js的file方法。未能实现
    3. Admin组件下的启动禁用组件未实现
    4. User组件下的修改用户权限的那个权限链，未实现
## 4、目前还没结课，学校事多，每天写一点，唉。。。（心想：赶时间基本完成就行了，代码有点乱，不足之后再实现吧）

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
