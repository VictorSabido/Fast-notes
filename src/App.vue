<template>
    <Modal />
    <div class="container">
        <div class="app-title">
            <h1>Fast Notes</h1>
        </div>
        <textarea type="text"
            @keyup.enter="addNote($event.target.value)"
            v-model="newNote"
        />

        <div>
            <input type="radio" name="notes" value="all" id="all-notes" v-model="notesType" checked>
            <label for="all-notes">All</label>
            <input type="radio" name="notes" value="completed" id="completed-notes" v-model="notesType">
            <label for="completed-notes">Completed</label>
            <input type="radio" name="notes" value="incompleted" id="incompleted-notes" v-model="notesType">
            <label for="incompleted-notes">Incomplete</label>
        </div>

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
        const notesType = ref('')

        const filters = {
            'all'        : 'getAllNotes',
            'completed'  : 'getCompletedNotes',
            'incompleted': 'getIncompletedNotes',
        }

        const addNote = (note_written) => {
            if(note_written !== '') {
                notesStore.commit('addNote', note_written)
            }

            newNote.value = ''
        }

        const notesData = computed(() => {
            let fnGetter = filters[notesType.value] || 'getAllNotes'

            return notesStore.getters[fnGetter]
        })


        return {
            addNote,
            notesData,
            newNote,
            notesType
        }
    },
}
</script>
