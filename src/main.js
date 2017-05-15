import Vue from 'vue';
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router';
import router from './router/index';
import store from './vuex/store';
import { Button, Select,DatePicker } from 'element-ui';
import App from './App.vue';
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
import { setCookie,getCookieValue } from './lib/common'

import '../theme/index.css'

window.CONFIG.lang = getCookieValue('lang') || 'zh-CN';

if( CONFIG.lang === 'en-US' ){
	locale.use(enLocale)
}

Vue.use(VueI18n)

Vue.use(Button)
Vue.use(Select)
Vue.use(DatePicker)

import ZHCN from './lang/zh-CN';
import ENUS from './lang/en';

const i18n = new VueI18n({
    locale: CONFIG.lang,    // 语言标识
    messages: {
        'zh-CN': ZHCN,   // 中文语言包
        'en-US': ENUS    // 英文语言包
    }
})

const app = new Vue({
	i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')