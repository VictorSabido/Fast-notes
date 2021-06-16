import { createApp } from 'vue'
import App from './App.vue'
import notesStore from './store/notes'
import mitt from 'mitt'

import './css/app.scss'

const emitter = mitt()

createApp(App)
    .use(notesStore)
    .provide('emitter', emitter)
    .mount('#app')
