<template>
    <div id="modal-info" class="modal" :class="isActive" @click="closeModal">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <p>{{ modal.title }}</p>

            <span style="font-size:12px">{{ modal.date }}</span>
        </div>
    </div>
</template>

<script>
import { inject, onMounted, reactive, ref } from '@vue/runtime-core'

export default {
    setup() {
        const isActive = ref('');
        const modal = reactive({
            title: '',
            date : ''
        });

        const emitter = inject("emitter")
        onMounted(() => {
            emitter.on("openModal", ({title, id}) => {
                modal.title = title
                modal.date  = new Date(id).toLocaleString()
                isActive.value = 'active'
            })
        })

        const closeModal = (event) => {
            if(event.target.id == 'modal-info' || event.target.classList.contains('close')) {
                isActive.value = ''
            }
        }


        return {
            isActive,
            modal,
            closeModal
        }
    },
}
</script>
