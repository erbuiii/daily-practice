<template>
	<div>
		<button class="btn btn-primary" @click="share">分享到微信</button>
	</div>
</template>
<script>
export default {
	methods: {
		share() {
			//向父组件通信 --> 触发自定义事件
			//还可以传值
			this.$emit("shared", {
				name: "erbuiii"
			})
		}
	}
}
</script>