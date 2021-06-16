<template>
    <div id="myModal" class="modal" :class="isActive" @click="closeModal">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script>
import { inject, onMounted, ref } from '@vue/runtime-core'

export default {
    setup() {
        const isActive = ref('');
        const title = ref('');

        const emitter = inject("emitter")
        onMounted(() => {
            emitter.on("openModal", (data) => {
                title.value = data
                isActive.value = 'active'
            })
        })

        const closeModal = (event) => {
            if(event.target.id == 'myModal' || event.target.classList.contains('close')) {
                isActive.value = ''
            }
        }


        return {
            isActive,
            title,
            closeModal
        }
    },
}
</script>
