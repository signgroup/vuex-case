const countDown = (mutations, context, data) => {
    setTimeout(() => {
        context.commit(mutations, data.counterNum)
    }, data.time * 1000)
}
export const  moduleCount = {
    state: {
        count: 0
    },
    mutations: {
        addCountMutation(state, num) {
            state.count += num
        },
        reduceCountMutation(state, num) {
            state.count -= num
        },

    },
    getters: {
        showNum(state) {
            return `当前最新数量是[${state.count}]`
        }
    },
    actions: {
        addAsyncAction(context, data) {
            countDown('addCountMutation', context, data)
        },
        reduceAsyncAction(context, data) {
            countDown('reduceCountMutation', context, data)
        }
    }
}
