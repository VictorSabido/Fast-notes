<template>
    <div class="v-card bc" :class="color" :id="id">
        <span>{{ title }}</span>
        <div class="remove_note">
            <div class="svg-container info">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="20" height="20" viewBox="0 0 128 128"><defs></defs><title>x</title><path class="cls-1" d="M63.99993,6.0564A57.9436,57.9436,0,1,0,121.9436,63.99993,58.00916,58.00916,0,0,0,63.99993,6.0564Zm0,104.44631a46.50272,46.50272,0,1,1,46.50278-46.50278A46.55537,46.55537,0,0,1,63.99993,110.50272Z"/><circle class="cls-2" cx="61.48833" cy="39.26524" r="7.74597"/><path class="cls-2" d="M56.41651,53.95439A4.60509,4.60509,0,0,0,52.616,58.48922h0a4.60348,4.60348,0,0,0,4.60463,4.60463H57.677V88.60052H55.21362a3.94011,3.94011,0,0,0-3.94011,3.94011h0a3.94011,3.94011,0,0,0,3.94011,3.94011H72.78638a3.94011,3.94011,0,0,0,3.94011-3.94011h0a3.94011,3.94011,0,0,0-3.94011-3.94011H70.34982V56.04026A3.97591,3.97591,0,0,0,65.60173,52.14C61.62628,52.92712,56.57417,53.92668,56.41651,53.95439Z"/></svg>
            </div>
            <div class="svg-container completed">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
            </div>
            <div class="svg-container color-picker" @click="colorPicker()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <linearGradient id="svg-color-picker">
                        <stop class="main-stop" offset="0%" />
                        <stop class="alt-stop" offset="100%" />
                    </linearGradient>
                    <path d="M18.896 7.104c-.682.6-.753 1.638-.153 2.324l-1.239 1.083-5.416-6.198 1.239-1.082c.599.684 1.638.753 2.32.154l3.246-2.776c.47-.407 1.048-.609 1.625-.609 1.38 0 2.482 1.128 2.482 2.471 0 .73-.322 1.393-.854 1.858l-3.25 2.775zm-6.943 3.896h-2.5l3.562-3.123-1.085-1.24-7.339 6.387c-1.189 1.033-.368 1.831-1.348 3.195-.133.186-.21.372-.231.55-.066.54.325.995.817 1.056.194.023.41-.015.616-.137 1.55-.912 2.178.117 3.396-.947l7.34-6.384-1.081-1.241-2.147 1.884zm-9.106 7.5c-.535 2.053-1.847 2.335-1.847 3.684 0 1.003.834 1.816 1.847 1.816s1.834-.813 1.834-1.816c0-1.349-1.299-1.631-1.834-3.684z"/>
                </svg>
            </div>
            <div class="u-overlay" :class="{active: isVisible}" @click="setPaletteStatus(false)"></div>
            <Palette v-show="isVisible" :idNote="id" @setPaletteStatus="setPaletteStatus"/>
            <div class="svg-container remove" @click="removeNote()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M21 6l-3 18h-12l-3-18h2.028l2.666 16h8.611l2.666-16h2.029zm-4.711-4c-.9 0-1.631-1.099-1.631-2h-5.316c0 .901-.73 2-1.631 2h-5.711v2h20v-2h-5.711z"/></svg>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import notesStore from '../store/notes'
import Palette from './Palette'

export default {
    components: {
        Palette
    },
    props: {
        id: {
            type: Number
        },
        title: {
            type: String
        },
        color: {
            type: String
        }
    },
    setup(props) {
        let isVisible = ref(false)

        const removeNote = () => {
            notesStore.commit('removeNoteById', props.id)
        }

        const colorPicker = () => {
            isVisible.value = !isVisible.value
        }

        const setPaletteStatus = (status) => {
            isVisible.value = status
        }

        return {
            removeNote,
            colorPicker,
            isVisible,
            setPaletteStatus
        }
    }

}
</script>
