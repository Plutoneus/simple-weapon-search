<template>
    <div>
        <button @click="changePage(currentPage - 1)" :disabled="currentPage <= 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="changePage(currentPage + 1)" :disabled="currentPage >= totalPages">Next</button>
    </div>
</template>

<script>
export default {
    props: ['currentPage', 'totalPages'],
    methods: {
        changePage(page) {
            this.$emit('changePage', page);
            console.log("page", page)
        }
    }
}
</script>
