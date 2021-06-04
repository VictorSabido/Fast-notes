<template>
    <div class="modal-color-picker" ref="colorPicker">
        <div class="container-color-picker">
            <div class="color ambar" @click="setColor('ambar')"></div>
            <div class="color purple" @click="setColor('purple')"></div>
            <div class="color green" @click="setColor('green')"></div>
            <div class="color blue" @click="setColor('blue')"></div>
            <div class="color pink" @click="setColor('pink')"></div>
            <div class="color brown" @click="setColor('brown')"></div>
        </div>
    </div>
</template>

<script>
import notesStore from '../store/notes'

export default ({
    props: {
        idNote: {
            required: true
        }
    },
    setup(props) {
        const setColor = (color) => {
            notesStore.commit('addNoteColor', {id: props.idNote, color})
            notesStore.commit('setOverlayStatus', false)
            document.querySelectorAll('.modal-color-picker').forEach(function(el) {
                el.style.display = 'none';
            });
        }

        return {
            setColor
        }
    }

})
</script>
