<template>
  <div id="app">
	<h3>Welcome to vuexdemo</h3>
	<input type="button" value="增加" @click="increment">
	<input type="button" value="减少" @click="decrement">
	<input type="button" value="偶数才能增加" @click="clickOdd">
	<input type="button" value="点击异步增加" @click="clickAsync">
	<div>现在的数字为：{{count}}，它现在是{{getOdd}}</div>

	<!-- 可以通过如下方式获取数据 -->
	<!-- <div>现在的数字为：{{$store.state.count}}</div> -->
  </div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex"
	export default {
		
		//mapGetters：获取数据
		computed: mapGetters ([
			'count',
			'getOdd'
		]),
		//mapActions：管理所有的方法（行为）
		methods: mapActions ([
			'increment',		//向store.js提交
			'decrement',
			'clickOdd',
			'clickAsync'

		])
	}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
