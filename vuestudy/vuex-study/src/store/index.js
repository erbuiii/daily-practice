import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//对单个组件状态进行管理
import dialog_store from '../components/dialog_store.js'

export default new Vuex.Store({
	modules: {
		dialog: dialog_store
	}
})