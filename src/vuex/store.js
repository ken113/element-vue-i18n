import Vue from 'vue'
import Vuex from 'vuex'
import { getCookieValue } from './../lib/common'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

let state = {
	count:1,
	userId:null,
	username:'吉吉',
	orderList:[1,2,3],
}

if( getCookieValue('lang') === 'en-US' ){
	
	state = Object.assign(state,{
		username:'jiji',
	});
}

export default new Vuex.Store({
	state,
    mutations,
    getters,
    actions
})