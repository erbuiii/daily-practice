import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex)

var state = {
    count: 10
};

//mutations：处理状态/数据的变化
const mutations = {
    increment(state) {
        state.count ++;
    },
    decrement(state) {
        state.count --;
    }, 
    // clickOod()
};

//actions：处理你要干什么，异步请求，判断，流程控制
//接收mapActions传过来的对象 
//--> commit：用于提交，state：用于提取数据
const actions = {
    increment: ({commit}) => {
        commit('increment')
        //这里的increment给mutations了
    },
    decrement: ({commit}) => {
        commit('decrement')
    },
    clickOdd: ({commit, state}) => {
        // console.log(state.count)
        if(state.count % 2 == 0) {
            commit('increment')
        }
    },
    clickAsync: ({commit}) => {
        //模拟异步请求
        new Promise((resolve) => {
            setTimeout(() => {
                commit('increment');
            }, 1000);
        });
    }
};

//接收mapGetters传过来的
const getters = {
    count(state) {
        return state.count;
    },
    getOdd(state) {
        return state.count % 2 == 0 ? '偶数' : '奇数';
    }
};


//需要导出store对象
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});