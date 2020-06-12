import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {moduleCount} from "./countStore";
import {moduleTodo} from "./todoStore";


export default new Vuex.Store({
   modules:{
       moduleCount,
       moduleTodo
   }
})
