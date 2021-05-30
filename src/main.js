import { createApp } from 'vue'
import App from './App.vue'
import notesStore from './store/notes'

import './css/app.css'



createApp(App)
    .use(notesStore)
    .mount('#app')
