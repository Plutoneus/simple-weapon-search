<template>
    <div class="searchbar-container">
        <div class="col-lg-4">
            <div class="title-container">
                <h1 class="text-center comp-title">Weapon Search</h1>
            </div>
            <input
                placeholder="Search for a weapon..."
                class="searchbar"
                type="text"
                v-model="searchQuery"
                @keyup.enter="$emit('search', searchQuery)"
            />

        </div>
        <div class="col-lg-8">
            <div class="title-container">
                <h1 class="text-center comp-title">Equip Check</h1>
            </div>
            <CharacterSheet />
        </div>
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
    width: 100%;
    outline: none;
    background-color: $color-darkest;
    border-radius: 8px;
    padding-left: .5rem;
    color: $color-primary;
    border: 2px solid $color-secondary;
    // margin-bottom: 1rem;
    
    &:focus{
        border: 2px solid #6272a4;
    }
}

</style>