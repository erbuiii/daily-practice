<template>
	<footer>
		<p>{{copyright}}</p>
	</footer>
</template>
<script type="text/javascript">
export default {
	name: 'app-footer',
	data () {
		return {
			copyright: "Copyright 2018 Vue Demo"
		}
	}
}
</script>
<style scoped>
	footer {
		background: #222;
		padding: 6px;
	}
	p {
		color: lightgreen;
		text-align: center;
	}
	
</style>