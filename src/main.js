import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

//5.封装一个request模块
import {request} from "network/request";

request({
  url:'/home/multidata',
}).then(res=>{
  // console.log(res);
}).catch(err=>{
  // console.log(err);
})
