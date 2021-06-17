import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        errorList: []
    },
    mutations: {
        SAVEERRORLIST: (state, params) => {
            // let data = Object.assign({}, state.errorList, params)
            state.errorList = params
        }
    },
    actions: {
        //存储的告警信息队列
        saveErrorList({ commit }, params) {
            commit('SAVEERRORLIST', params)
        }
    },
    getters: {
        //计算存储告警信息队列中的告警长度
        getErrorListLength: state => {
            return state.errorList.length
        }
    },
    modules: {}
})