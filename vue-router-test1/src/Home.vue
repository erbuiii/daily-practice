<template>
	<div>
		<h1>Home</h1>
		<p>{{msg}}</p>
		<!-- router-link的to属性要注意：路由是先进入到home，然后才进入相应的子路由比如phone，所以书写时要把home带上 -->
		<p>
			<router-link to="/home/phone">手机</router-link>
			<router-link to="/home/computer">电脑</router-link>
			<router-link to="/home/tablet">平板</router-link>
		</p>

		<router-view></router-view>
	</div>
</template>
<script>
export default {
	data() {
		return {
			msg: "我是home组件"
		}
	}
}
</script>
<style scoped>
	
</style>