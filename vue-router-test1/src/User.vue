<template>
	<div>
		<h1>User</h1>
		<p>我是user组件，动态部分是{{dynamicSegment}}</p>
	</div>
</template>
<script>
export default {
	// computed: {
	// 	dynamicSegment() {
	// 		return this.$route.params.id
	// 	}
	// }

	// 如果想要在组件来回切换的时候做点事情，那么只能在组件内部（user.vue中）利用watch 来监听$route 的变化
	data() {
		return {
			dynamicSegment: ''
		}
	},
	watch: {
		$route (to, from) {
			//to：你要去的那个组件
			//from：你从哪个组件过来的
			//它们是两个对象，也有params属性
			console.log(to);
			console.log(from);
			this.dynamicSegment = to.params.id;
		}
	}
}
</script>
<style scoped>
	
</style>