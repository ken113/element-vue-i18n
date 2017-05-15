<template>
	<div>
		<span>{{ $t('username') }}</span>
		<el-button type="primary" @click="changeCN()">中文</el-button>
		<el-button type="primary" @click="changeEN()">English</el-button>
		<el-button type="primary" @click="changeUsername()">{{ $t('btn1')}}</el-button>
		<el-button type="primary" @click="changeUsernameAction()">{{$t('btn2')}}</el-button>
		<el-date-picker
	      align="right"
	      type="date"
	      :placeholder="$t('selectDate')" >
	    </el-date-picker>
	    <input type="text" name="aaa" :placeholder="$t('username')"/>
	    <span>{{ this.$store.state.username }}</span>
	    <span>{{ $t('selectRows',{ record:12 } ) }}</span>
	    <h2 class="red">Hello from Component index!</h2>
	</div>
</template>
<script>

import { setCookie } from './../lib/common'

export default {
	data(){
		return{
			msg:'1111'
		}		
	},
	methods:{
		changeCN(){
			setCookie('lang','zh-CN',30);
			//window.location.href= 'http://localhost:8080/#/';
			window.location.reload();
		},
		changeEN(){
			setCookie('lang','en-US',30);
			//window.location.href = 'http://localhost:8080/index-en.html';
			window.location.reload();
		},
		changeUsername(){
			this.$store.commit('changeUserName','ABC');
		},
		changeUsernameAction(){
			this.$store.dispatch('changeUserNameAction','新的username');
		}
	}
}
</script>
<style lang='sass' scoped>
</style>