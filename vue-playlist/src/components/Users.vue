<template>
	<div class="users">
		<ul>
			<li v-for="user in users" @click="user.show = !user.show">
				<h2>{{user.name}}</h2>
				<h3 v-show="user.show">{{user.position}}</h3>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default {
	name: 'users',
	data () {
		return {
			users: [
				{name: "Henry",position: "Web开发",show: false},
				{name: "Henry",position: "Web开发",show: false},
				{name: "Henry",position: "Web开发",show: false},
				{name: "Henry",position: "Web开发",show: false},
				{name: "Henry",position: "Web开发",show: false},
				{name: "Henry",position: "Web开发",show: false},
				{name: "Henry",position: "Web开发",show: false},
				{name: "Henry",position: "Web开发",show: false},
				{name: "Henry",position: "Web开发",show: false},
				{name: "Henry",position: "Web开发",show: false},
				{name: "Henry",position: "Web开发",show: false},
			]
		}
	}
}
</script>
<style>
	.users {
		width: 100%;
		max-width: 1200px;
		margin: 40px auto;
		padding: 0 20px;
		box-sizing: border-box;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
		padding: 0;
	}
	li {
		flex-grow: 1;
		flex-basis: 200px;
		text-align: center;
		padding: 30px;
		border: 1px solid #222;
		margin: 10px;
	}
</style>