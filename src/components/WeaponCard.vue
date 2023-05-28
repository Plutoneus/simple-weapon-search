<template>
    <div class="card h-100">
        <div class="weapon-image-container">
            <img :src="weapon.image" alt="weapon image" class="card-img-top weapon-image">
        </div>
        <div class="card-body">
            <h3 class="card-title text-center">{{ weapon.name }}</h3>
            <p class="card-desc text-center">{{ weapon.category }}</p>
            <weapon-table :attack="weapon.attack" :requiredAttributes="weapon.requiredAttributes" />
        </div>
    </div>
</template>

<script scoped>
import WeaponTable from './WeaponTable.vue';

export default {
    components: {
        WeaponTable,
    },
    props: {
        weapon: {
            type: Object,
            required: true,
        },
    },
};
</script>

<!-- Your styles here -->
<style lang="scss">
.weapon-image-container {
    transition: background-color 0.3s ease;
    margin: 1rem;
    border-radius: 2px;
}
.weapon-image {
    transition: scale 0.3s ease, transform 0.3s ease;
    width: 100%;
    height: 180px;
    object-fit: contain;
    padding: 0rem;
}
.card {
    // width: 100%;
    transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease, scale 0.3s ease, border 0.5s ease;
    background-color: $color-secondary !important;
    border: 1px solid $color-accent !important;
    border-radius: 2px;
    color: $color-primary;
    scale: 100%;
    
    &:hover {
        // background-color: $color-darkblue !important;
        // box-shadow: 0px 4px $color-accent;
        // scale: 105%;
        border: 1px solid $color-highlight !important;
        box-shadow: 4px 8px $color-darkest;
        transform: translate(-0px, -8px);
        .weapon-image {
            scale: 120%;
            transform: translate(-0px, 8px);
        }
    }
}

.card-body {
    display: flex;
    flex-direction: column;  /* this makes the children of the card stack vertically */
    justify-content: space-between; /* this spreads out the children across the full height of the card */
}

</style>