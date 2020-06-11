import Vue from 'vue'
import Router from 'vue-router'

const IndexStore = r => require.ensure([], () => r(require('@/view/Count/IndexStore')), 'count-store')
const IndexImport = () => import(/* webpackChunkName: "count-import" */ './view/Count/IndexImport')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index-store',
            component: IndexStore
        },
        {
            path: '/index-store',
            name: 'index-store',
            component: IndexStore
        },
        {
            path: '/index-import',
            name: 'index-import',
            component: IndexImport
        }
    ]
})
