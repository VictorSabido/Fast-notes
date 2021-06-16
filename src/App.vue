<template>
    <Modal />
    <div class="container">
        <h1>Fast Notes</h1>
        <input type="text"
            @keyup.enter="addNote($event.target.value)"
            v-model="newNote"
        />

        <Notes :notesData="notesData" />
    </div>
</template>

<script>

import Notes from './components/Notes.vue'
import Modal from './components/Modal.vue'
import { ref, computed } from 'vue'
import notesStore from './store/notes'

export default {
    name: 'App',
    components: {
        Notes, Modal
    },
    setup() {
        const newNote = ref('')

        const addNote = (note_written) => {
            if(note_written !== '') {
                notesStore.commit('addNote', note_written)
            }

            newNote.value = ''
        }

        const notesData = computed(() => {
            return notesStore.getters.getAllNotes
        })

        return {
            addNote,
            notesData,
            newNote
        }
    },
}
</script>
