<template>
    <button id="myBtn">Open Modal</button>

    <!-- The Modal -->
    <div id="myModal" class="modal" :class="isActive" @click="closeModal">

        <!-- Modal content -->
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <p>Some text in the Modal..</p>
        </div>

    </div>
</template>

<script>
import { inject, onMounted, ref } from '@vue/runtime-core'

export default {
    setup() {
        const isActive = ref('');

        const emitter = inject("emitter")
        onMounted(() => {
            emitter.on("blogLoaded", (status) => {
                console.log(status)

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
            closeModal
        }
    },
}
</script>

<style>
    .active {
        display: block !important;
    }
</style>