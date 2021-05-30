<template>
    <div class="v-card" :id="id">
        <span>{{ title }}</span>
        <div class="remove_note" @click="removeNote()">x</div>
    </div>
</template>

<script>
import notesStore from '../store/notes'

export default {
    props: {
        id: {
            type: Number
        },
        title: {
            type: String
        }
    },
    setup(props) {
        const removeNote = () => {
            notesStore.commit('removeNoteById', props.id)
        }

        return {
            removeNote
        }
    }

}
</script>

<style>
    .v-card {
        border: 2px solid mediumslateblue;
        padding: 10px;
        margin: 4px;
        position: relative;
    }

    .v-card > .remove_note {
        width: 16px;
        border-radius: 50px;
        position: absolute;
        top: 0px;
        right: 0px;
        height: 16px;
        background-color: tomato;
        color: white;
        cursor: pointer;
        font-size: 12px;
    }

</style>