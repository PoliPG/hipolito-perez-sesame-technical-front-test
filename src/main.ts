import 'reflect-metadata'
import App from './App.vue'
import router from './router'
import { IocContainer } from './sesame/Shared/IocContainer/Infrastructure/Container'
import { EventBusPluginVue } from './sesame/Shared/EventBus/Infrastructure/Vue/EventBusPlugin'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ToastService from 'primevue/toastservice'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import './assets/css/index.css'
import './assets/css/DataTableTheming.css'

const app = createApp(App)

//IOC Container
app.provide('container', IocContainer.getInstance())

// Plugins
app.use(new EventBusPluginVue())

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'light',
      cssLayer: false
    }
  }
})
app.use(ToastService)

app.use(createPinia())
app.use(router)

app.mount('#app')
