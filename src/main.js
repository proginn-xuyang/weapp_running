import Vue from 'vue'
import App from './App'
import api from '@/api'
import store from '@/store'
import util from '@/utils'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$api = api
Vue.prototype.$store = store
Vue.prototype.$util = util

const app = new Vue(App)
app.$mount()
