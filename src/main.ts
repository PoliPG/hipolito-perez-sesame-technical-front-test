import 'reflect-metadata'
import { IocContainer } from './sesame/Shared/IocContainer/Infrastructure/Container'
import { EventBusPluginVue } from './sesame/Shared/EventBus/Infrastructure/Vue/EventBusPlugin'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/css/index.css'
import './assets/css/DataTableTheming.css'
import PrimeVue from 'primevue/config'

const app = createApp(App)

//IOC Container
app.provide('container', IocContainer.getInstance())

// Plugins
app.use(new EventBusPluginVue())

app.use(PrimeVue)

app.use(createPinia())
app.use(router)

app.mount('#app')
