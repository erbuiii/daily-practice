import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 

//引入组件
import Home from "./Home.vue"
import About from "./About.vue"
import User from "./User.vue"
import Phone from "./Phone.vue"
import Computer from "./Computer.vue"
import Tablet from "./Tablet.vue"

//告诉vue使用VueRouter
Vue.use(VueRouter)
 

const router = new VueRouter({
	routes : [
		{
			path: "/home",
			//下面属性必不可少，因为要先进入home页面，才能进入子路由
			component: Home,
			//子路由
			children: [
				{
					path: "phone",
					component: Phone
				},
				{
					path: "computer",
					component: Computer
				},
				{
					path: "tablet",
					component: Tablet
				},
				//当进入到home时，下面的组件显示
				{
					path: "",
					component: Phone
				}
			]
		}, 
		{
			path: "/about",
			component: About
		}, 
		//新增user路径，配置了动态的id
		{
			path: "/user/:id",
			component: User,
			//命名路由
			name: "user"
		},
		//首次进入页面时，路径为'/'，将它重新指向'/home'
		//重定向
		{
			path: '/',
			redirect: '/home'
		}
	],
	// 去掉#
	mode: "history"
})


new Vue({
	router,		//注入到根实例中
	el: '#app',
	render: h => h(App)
})
