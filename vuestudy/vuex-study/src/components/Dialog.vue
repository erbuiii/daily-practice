<template>
	<!-- <el-dialog :visible.sync="$store.state.dialog.show"></el-dialog> -->
	<el-dialog :visible.sync="show"></el-dialog>
</template>
<script>
	import {mapState} from 'vuex'

	// mapGetters, mapActions, mapState类似
	// mapGetters一般写在computed中，mapAcitons一般写在methods中
	export default {
		computed: {

			//...:扩展运算符
			...mapState ({
				show: state => state.dialog.show
			})

			// 相当于
			// show() {
			// 	return this.$store.state.dialog.show;
			// }
		}
	}
</script>
<style scoped>
	
</style>