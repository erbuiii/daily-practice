//把types里所有的都导入
import * as types from "./types"

//导出
export default {
    increment: ({ commit }) => {
        commit(types.INCREMENT);
        //这里的increment给mutations了
    },
    decrement: ({ commit }) => {
        commit(types.DECREMENT);
    },
    clickOdd: ({ commit, state }) => {
        console.log(state.mutations.count)
        //!!因为现在导出的是一组mutations，写成state.count报错
        if (state.mutations.count % 2 == 0) {
            commit(types.INCREMENT);
        }
    },
    clickAsync: ({ commit }) => {
        //模拟异步请求
        new Promise((resolve) => {
            setTimeout(() => {
                commit(types.INCREMENT);
            }, 1000);
        });
    }
}