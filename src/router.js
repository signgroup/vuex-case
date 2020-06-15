import Vue from 'vue'
import Router from 'vue-router'

const CountStore = r => require.ensure([], () => r(require('@/view/Count/CountStore')), 'count-store')
const CountImport = () => import(/* webpackChunkName: "count-import" */ './view/Count/CountImport')
const TodoStore = () => import(/* webpackChunkName: "count-store" */ './view/Todo/TodoStore')
const TodoImport = () => import(/* webpackChunkName: "count-import" */ './view/Todo/TodoImport')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'count-store',
            component: CountStore
        },
        {
            path: '/count-store',
            name: 'count-store',
            component: CountStore
        },
        {
            path: '/count-import',
            name: 'count-import',
            component: CountImport
        },
        {
            path: '/todo-store',
            name: 'todo-store',
            component: TodoStore
        },
        {
            path: '/todo-import',
            name: 'todo-import',
            component: TodoImport
        }
    ]
})
