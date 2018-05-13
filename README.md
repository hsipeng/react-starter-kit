# React 开发框架

结构图:


## 依赖

## 配置
- webpack
- babel
- eslint
- flow 
- ….

## 开发目录
- assets
- components
- frame
### redux
#### actions
创建各个 action 导出 action 名称，action type 和 action handler。
#### reducers
封装各个action 和 state
#### store
- createStore
初始化store
- middlewares
中间件

### router
路由
### utils
- cookie 处理
- ajax 数据请求封装
- logger 配置
- ConnectDecorator 
将组件转成高阶组件包裹connect

- AsyncLoadingDecorator 
按需异步加载装饰器
react-loadable
 - createReducer
创建reducer
- view
- index.js
- …

