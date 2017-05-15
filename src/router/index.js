import Vue from 'vue'
import Router from 'vue-router'
// 注册router组件
Vue.use(Router)

//import index from './../pages/index.vue';

const routes = [
	{ path: '/', component: require('./../pages/index') },
]

export default new Router({
  	routes
})