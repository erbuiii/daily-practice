import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex);

//导入
import actions from "./actions.js"
import mutations from "./mutations"


//导出
export default new Vuex.Store({
    //mutations是一个模块，放入modules
    modules: {
        mutations
    },
    actions
})
