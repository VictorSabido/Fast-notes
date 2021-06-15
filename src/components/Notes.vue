<template>
    <div class="notes-container">
        <Note
             v-for="note in notesData" :key="note"
            :id="note.id" :title="note.title" :color="note.color"/>
    </div>
</template>

<script>
import Note from './Note'

export default {
    components: {
        Note
    },
    props: {
        notesData: {
            required: true
        }
    }
}
</script>
