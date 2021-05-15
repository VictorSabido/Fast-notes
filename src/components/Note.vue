<template>
    <div class="v-card">
        <span>{{ title }}</span>
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
        // console.log(props, '');
    }

}
</script>

<style>
    .v-card {
        border: 2px solid mediumslateblue;
        padding: 10px;
        margin: 4px;
    }
</style>