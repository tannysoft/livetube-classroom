import Vue from 'vue'
import App from './App.vue'

import jQuery from 'jquery'
global.$ = jQuery

import './assets/plugins/bootstrap/css/bootstrap.min.css';
import './assets/plugins/font-awesome/css/font-awesome.min.css';
import './assets/plugins/icomoon/style.css';
import './assets/plugins/uniform/css/default.css';
import './assets/plugins/switchery/switchery.min.css';

import './assets/css/space.min.css';
import './assets/css/custom.css';

// import './assets/plugins/jquery/jquery-3.1.0.min.js';
// import './assets/plugins/bootstrap/js/bootstrap.min.js';
// import './assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js';
// import './assets/plugins/uniform/js/jquery.uniform.standalone.js';
// import './assets/plugins/switchery/switchery.min.js';
// import './assets/js/space.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
