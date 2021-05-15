<template>
    <div class="v-card">
        <span>{{ title }}</span>
        <div class="remove_note" @click="removeNote($event.target)">x</div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    },
    setup() {
        const removeNote = (e) => {
            console.log(e);
            e.closest('div.v-card').remove()
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