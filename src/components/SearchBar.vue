<template>
    <div class="searchbar-container">
        <input
            placeholder="Search for a weapon..."
            class="searchbar"
            type="text"
            v-model="searchQuery"
            @keyup.enter="$emit('search', searchQuery)"
        />
        <CharacterSheet />
    </div>
</template>

<script scoped>

import CharacterSheet from './CharacterSheet.vue';

export default {
    data() {
        return {
            searchQuery: '',
        };
    },
    components: {
        CharacterSheet
    }
};
</script>

<!-- Your styles here -->
<style lang="scss">
.searchbar-container {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
}
.searchbar {
    display: flex;
    font-size: 1.25rem;
    width: 25%;
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