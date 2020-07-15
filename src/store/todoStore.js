export const  moduleTodo = {
    state: {
        list:[],
        nextId:0,
        options:[
            {name:'紧急重要', type:'error'},
            {name:'重要不紧急', type:'warning'},
            {name:'不重要紧急', type:'info'},
            {name:'不重要不紧急', type:'success'}
        ]
    },
    mutations: {
        addTodoMutation(state,val){
            let obj={
                id:state.nextId,
                ...val
            }
            state.list.push(obj)
            state.nextId++
        },
        updateTodoMutation(state,val){
           let list=state.list
           let arrIndex= state.list.findIndex(item => item.id === val.id)
           list.fill(val,arrIndex,arrIndex+1)
        },
        deleteTodoMutation(state,id){
            state.list.splice(state.list.findIndex(item => item.id === id), 1)
        },
        updateTodoList(state,val){
            state.list=val
        }
    },
    getters: {
        getTypeOptions(state){
            return state.options
        }
    },
}
