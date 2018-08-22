<template>
	<!-- <div class="alert alert-info" v-html="html">{{msg}}</div> -->
	<div class="alert alert-info">
		<slot name="one">{{msg}}</slot>
		<slot name="two">{{msg1}}</slot>
	</div>
</template>
<script type="text/javascript">
export default {
	data() {
		return {
			msg: "这是一个页面",
			msg1: "这是一个页面2"
		}
	},
	// props: ["html"]
}
</script>