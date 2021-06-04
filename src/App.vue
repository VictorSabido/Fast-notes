<template>
    <div>
        <h1>Fast Notes</h1>
        <input type="text"
            @keyup.enter="addNote($event.target.value)"
            v-model="newNote"
        />

        <div>
            <Notes :notesData="notesData" />
        </div>
    </div>
    <div class="u-overlay" :class="{active: overlayStatus}" @click="setOverlay(false)"></div>
</template>

<script>

import Notes from './components/Notes.vue'
import { ref } from 'vue'
import notesStore from './store/notes'
import { computed } from 'vue'


export default {
    name: 'App',
    components: {
        Notes
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

        const overlayStatus = computed(() => {
            return notesStore.getters.getOverlayStatus
        })

        const setOverlay = (status) => {
            notesStore.commit('setOverlayStatus', status);
            document.querySelectorAll('.modal-color-picker').forEach(function(el) {
                el.style.display = 'none';
            });
        }

        return {
            addNote,
            notesData,
            newNote,
            overlayStatus,
            setOverlay
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
