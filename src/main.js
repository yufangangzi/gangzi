import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import App from './App'
import routes from './store/router.config'
import 'bootstrap/dist/css/bootstrap.css'
import './css/common/livelist.css'
import './css/common/reset.css'
import './css/common/publicStyle.css'
import './css/common/sidenav.css'
Vue.use(VueRouter)
Vue.use(VueResource)
console.log(666)
const router = new VueRouter({
    routes,
    mode:'history'

});

/* eslint-disable no-new */
// 这灵活得亮瞎了
/*new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
});

 new Vue(Vue.util.extend({
   router
 }, App)).$mount('#app');

new Vue({
  el:'#app',
  router,
  render:h => h(App)
});*/
var Event=new Vue();
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
