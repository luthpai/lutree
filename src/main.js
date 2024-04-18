import './assets/main.css'
import 'animate.css'

import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { SiInstagram, SiGithub, SiWhatsapp, SiDevdotto } from 'oh-vue-icons/icons'

addIcons(SiInstagram, SiGithub, SiWhatsapp, SiDevdotto)

createApp(App).component('v-icon', OhVueIcon).mount('#app')
