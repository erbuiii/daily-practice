// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import axios from 'axios'
// import Users from './components/Users.vue'

axios.defaults.headers.common['token'] = "f4c902c9ae5a2a9d8f84868ad064e706"
axios.defaults.headers.post['Content-type'] = "application/json"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.prototype.$axios = axios

//配置路由
const router = new VueRouter({
	routes: [
		//路由地址：根路径
		{
			path:"/",
			component: Home
		}, {
			path:"/helloworld",
			component: HelloWorld
		},
	],
	//去掉#
	mode: "history"
})
//全局注册组件
// Vue.component("users",Users);
/* eslint-disable no-new */
new Vue({
	router,
	el: '#app',
	components: { App },
	template: '<App/>'
})
