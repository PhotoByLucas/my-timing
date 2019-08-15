import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import { Icon, Drawer, XHeader, Tabbar, TabbarItem, Flexbox, FlexboxItem, Panel, Cell } from 'vux'

Vue.component('icon', Icon)
Vue.component('drawer', Drawer)
Vue.component('x-header', XHeader)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('panel', Panel)
Vue.component('cell', Cell)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
