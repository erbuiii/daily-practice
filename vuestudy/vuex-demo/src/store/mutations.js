//导入单一一个
// import { INCREMENT } from "./types";
import { INCREMENT, DECREMENT } from "./types"
import getters from "./getters";


const state = {
    count: 20
};

//接收
const mutations = {
    //变量：方括号
    [INCREMENT](state) {
        state.count ++;
    },
    [DECREMENT](state) {
        state.count --;
    }
};

//导出
export default {
    state,
    mutations,
    getters
}