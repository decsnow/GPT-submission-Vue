import Vue from 'vue'
import { Row, Col,Header,Main,Footer,Container,Input,Button,Message } from 'element-ui';
import App from './App.vue'

Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = ''

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Footer.name, Footer);
Vue.component(Container.name, Container);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Message.name, Message);





new Vue({
  render: h => h(App),
}).$mount('#app')
