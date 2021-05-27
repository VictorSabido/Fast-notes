import { createApp } from 'vue'
import App from './App.vue'
import notesStore from './store/notes'



createApp(App)
    .use(notesStore)
    .mount('#app')
