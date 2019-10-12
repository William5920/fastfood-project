# fastfood-project

## 项目描述
### 此项目为一个移动端的外卖项目（SPA），实现了商家列表展示、商品展示、用户评论展示、购物车、搜索功能、用户登录（密码登录、短信登录）等功能
### 技术选型采用了vue全家桶（vue-cli、vue、vue-router、vuex、axios、mint-ui）+ ES6 + Webpack，采用模块化、组件化、工程化的模式开发
###
### 前台页面构建主要采用swiper实现轮播图，采用better-scroll实现滑动，部分组件使用了mint-ui组件库
### 样式方面采用sass编写，字体图标采用阿里矢量图标库
### 前后台交互部分利用axios发送ajax请求，在缺乏数据时利用mockjs模拟数据并使用postman测试接口
### 项目优化方面利用vue-lazyload实现懒加载，使用date-fns替换moment来实现日期的格式化

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
