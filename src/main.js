import Vue from 'vue'
import App from './App.vue'
import Mainform from './Mainform.vue'
import Finish from './Finish.vue'
import Print from './components/Print.vue'
import VueRouter from 'vue-router'
import axios from 'axios';
import VueSwal from 'vue-swal'
import VeeValidate from 'vee-validate'
import vmodal from 'vue-js-modal'
Vue.use(vmodal)
Vue.use(VeeValidate);
Vue.use(VueSwal)
Vue.use(VueRouter)
Vue.prototype.$http = axios;

Vue.config.productionTip = false
Vue.mixin({
  data() {
    return {
      itseconfig:{
        token:'ABC',
        key:'123',
        baseurl:'https://sts.ug.edu.gh/itsev8engine/api/ictm',
        // payment:'https://sts.ug.edu.gh/itsev8engine/api/gateway/payments',
        payment:'#',
      }
    }
  },
  created: function () {
   //return this.csrf;
  }
});
const router = new VueRouter({
  routes:[
    {path:'/',component:Mainform},
    // {path:'/status',component:Finish},
    // {path:'/print',component:Print}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
