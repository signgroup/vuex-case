import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI)
import {Button, Input, Form, FormItem, InputNumber} from 'element-ui'
import "./assets/common.less";
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(InputNumber)
Vue.use(Vuex)
new Vue({
    store,
    render: h => h(App),
    router
}).$mount('#app')
