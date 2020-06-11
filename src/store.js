import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const countDown = (mutations, context, data) => {
    setTimeout(() => {
        context.commit(mutations, data.counterNum)
    }, data.time * 1000)
}

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        addMutations(state, num) {
            state.count += num
        },
        reduceMutations(state, num) {
            state.count -= num
        }
    },
    getters: {
        showNum(state) {
            return `当前最新数量是[${state.count}]`
        }
    },
    actions: {
        addAsyncAction(context, data) {
            countDown('addMutations', context, data)
        },
        reduceAsyncAction(context, data) {
            countDown('reduceMutations', context, data)
        }
    }
})
