import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {moduleCount} from "./countStore";
import {moduleTodo} from "./todoStore";


export default new Vuex.Store({
   modules:{
       moduleCount,
       moduleTodo
   },
    getters: {
        importFrom() {
            return '导入形式'
        },
        storeFrom() {
            return '$store形式'
        },
    },
})
