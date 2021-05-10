<template>
    <base-layout page-title="The Details" page-default-back-link="/memories">
        The Detail
    </base-layout>
</template>

<script>
export default {
    data() {
        return {
            memoryId: null
        }
    },
    computed: {
        loadedMemory() {
            return this.$store.getters.memory(this.memoryId);
        }
    },
    watch: {
        '$route'(currentRoute) {
            this.memoryId = currentRoute.params.id
        }
    }
}
</script>