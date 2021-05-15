<template>
    <div v-for="note in notesData" :key="note">
        <Note :title="note.title"/>
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
    },
}
</script>
