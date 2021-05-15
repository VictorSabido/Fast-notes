<template>
    <!-- Your personal stickers -->
    <h1>Fast Notes</h1>
    <input type="text" 
        @keyup.enter="check($event.target.value)"
        v-model="newNote"
    />

    <div>
        <Notes :notesData="notesData" />
    </div>
</template>

<script>

import Notes from './components/Notes.vue'
import { ref } from 'vue'

export default {
    name: 'App',
    components: {
        Notes
    },
    setup() {
        const notesData = ref([])
        const newNote = ref('')
        notesData.value = [
            {'id': '2313123213', 'title': 'Nota 1'},
            {'id': '1111111111', 'title': 'Nota 2'}
        ];

        const check = (note_written) => {
            if(note_written !== '') {
                let uniqueID = Date.now();
                notesData.value.push({id: uniqueID, title: note_written})
            }

            newNote.value = ''
        }

        return {
            check,
            notesData,
            newNote
        }
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


