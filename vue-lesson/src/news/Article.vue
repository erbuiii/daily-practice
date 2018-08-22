<template>
	<div class="container">
		<h1>{{title}}</h1>
		<p>分享次数：{{shareTime}}</p>
		<p>发表于{{date | moment}}</p>
		<p class="lead">
			{{content}}
		</p>
		<!-- v-bind:自定义属性 -->
		<app-author :articlename="name">
		</app-author>
		<!-- 触发子组件的自定义事件 -->
		<!-- 还可以传值event和其他自定义的 -->
		<app-share @shared="fooShare($event, '10')"></app-share>
	</div>
</template>

<script>
import moment from "moment";
import Author from "./Author.vue"
import Share from "./Share.vue"
export default {
	data() {
		return {
			title: "震惊！！！！",
			date: new Date(),
			content: "为何过年亲戚催找对象",
			name: 123,
			shareTime: 0
		}
	},
	filters: {
		moment: function (value) {
			return moment(value).format("MMMM Do")
		}
	},
	// 局部注册组件
	components: {
		'app-author': Author,
		'app-share': Share
	},
	methods: {
		//父组件的自定义事件
		fooShare(event, age) {
			console.log(age,event);	//event是子组件向父组件传的值
			this.shareTime ++;
		}
	}
	//点击子组件，触发子组件的点击事件
	//该点击事件触发父组件的自定义事件
}
</script>

<!-- 对某一组件应用局部样式 -->
<style scoped>
	* {
		color: red;
	}
</style>