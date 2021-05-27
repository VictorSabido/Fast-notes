<template>
    <!-- Your personal stickers -->
    <h1>Fast Notes</h1>
    <input type="text" 
        @keyup.enter="addNote($event.target.value)"
        v-model="newNote"
    />

    <div>
        <Notes :notesData="notesData" />
    </div>
</template>

<script>

import Notes from './components/Notes.vue'
import { ref } from 'vue'
import notesStore from './store/notes'

export default {
    name: 'App',
    components: {
        Notes
    },
    setup() {
        const notesData = ref([])
        const newNote = ref('')
        notesData.value = notesStore.state.notes

        const addNote = (note_written) => {
            if(note_written !== '') {
                notesStore.commit('addNote', note_written)
            }

            newNote.value = ''
        }

        return {
            addNote,
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


