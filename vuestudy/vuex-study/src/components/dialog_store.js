//单独写dialog组件的状态
export default {
	state: {
		show: false
	}，

	//getters和vue中的computed类似，都是用来计算state然后生成新的数据（状态）
	getters: {
		not_show(state) {
			//这里的state对应上面的state
			return !state.show;
		}
	},
	//多个state操作 --> 使用mutations来触发会比较维护

	//mutations里的方法是不分组件的，加入在dialog_store.js中定义了switch_dialog方法
	//那么$store.commit('switch_dialog')会执行所有的switch_dialog方法

	//mutations里的操作必须是同步的
	mutations: {
		switch_dialog(state) { //这里的state对应着上面这个state
			state.show = state.show ? false : true;
			//还可以在这里执行其他操作改变state
		}
	},

	//执行多个mutations --> action
	//官方推荐，异步操作放在action中
	actions: {
		switch_dialog(context) {	
		//这里的context和我们使用的$store拥有相同的对象和方法
			context.commit('switch_dialog');
			//还可以在这里触发其他mutations方法
		}
	}
}