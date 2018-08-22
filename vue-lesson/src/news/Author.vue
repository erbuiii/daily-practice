<!-- 在article.vue里局部注册 -->
<template>
	<div>
		<!-- 可复用组件 -->
		<!-- articlename来源于父组件传值 -->
		<p>Written By {{articlename}}</p>
	</div>
</template>
<script>
export default {
	// 验证 --> 指明用哪一个属性,及传值的形式/默认值或必
	props: {
		articlename: {
			type: [String, Number],
			//defaultL "erbuiii",
			required: true
		}
	}
}
</script>