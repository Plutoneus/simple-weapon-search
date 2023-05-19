<template>
    <div class="searchbar-container">
        <input
            placeholder="Search for a weapon..."
            class="searchbar"
            type="text"
            v-model="searchQuery"
            @keyup.enter="$emit('search', searchQuery)"
        />
    </div>
</template>

<script scoped>
export default {
    data() {
        return {
            searchQuery: '',
        };
    },
};
</script>

<!-- Your styles here -->
<style lang="scss">
.searchbar-title {
    color: $color-tertiary;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 6rem;
}
.searchbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.searchbar {
    font-size: 1.25rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 50%;
    outline: none;
    background-color: $color-darkest;
    border-radius: 8px;
    padding-left: .5rem;
    color: $color-primary;
    border: 2px solid $color-secondary;
    
    &:focus{
        border: 2px solid #6272a4;
    }
}

</style>