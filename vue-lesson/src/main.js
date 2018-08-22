//入口文件
//引入了vue和app.vue
// import $ from 'jquery'
// import './bootstrap/dist/js/bootstrap.min.js'
// import './bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import App from './App.vue'
import Announcement from "./alert/Announcement.vue"
import Article from "./news/Article.vue"

//注册全局组件
Vue.component("app-announcement", Announcement)
Vue.component("app-article",Article)

// console.log(App) // app生成为对象

//定义组件
// Vue.component("App",App)
// Vue.component("my-component", {
// 	template: ...
// })

new Vue({
  el: '#app',
  render: h => h(App)

  // render函数：最底层模板
  // render: function(createElement) {
  //  //首先都会把模板编译成对象，再把App对象变成DOM节点
  //  createElement(App);
  // }

  // template: `<App></App>`,
  // //该字符串模板会覆盖掉原来的html模板，变成单文件组件<template>里的内容
  // components: {
  // 	App: App
  // }
})
