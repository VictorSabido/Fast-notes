<template>
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
        // console.log(props.notesData);
        const notesData = ref([])
        const newNote = ref('')
        notesData.value = ['Nota 1', 'Nota 2'];

        const check = (note_written) => {
            if(note_written !== '') {
                notesData.value.push(note_written)
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


