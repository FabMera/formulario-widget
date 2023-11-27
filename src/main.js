import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VeeValidate from 'vee-validate'

createApp(App).use(store).use(VeeValidate).mount('#app')
