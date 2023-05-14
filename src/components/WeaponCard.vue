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
    border-radius: 4px;
}
.weapon-image {
    width: 100%;
    height: 180px;
    object-fit: contain;
    padding: .5rem;
}
.card {
    width: 100%;
    margin: 1rem 0;
    transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease, scale 0.3s ease;
    background-color: $color-secondary !important;
    border: 1px solid $color-primary;
    border-radius: 4px;
    color: $color-primary;
    scale: 100%;

    &:hover {
        .weapon-image-container {
            background-color: $color-highlight;
        }
        box-shadow: 0px 4px $color-accent;
        transform: translate(-0px, -4px);
        scale: 1.10;
    }
}

.card-body {
    display: flex;
    flex-direction: column;  /* this makes the children of the card stack vertically */
    justify-content: space-between; /* this spreads out the children across the full height of the card */
}

</style>