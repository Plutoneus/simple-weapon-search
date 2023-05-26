<template>
    <div>
        <SearchBar @search="searchWeapons" />
        <div class="row custom-row">
            <div v-for="weapon in weaponsWithNonZeroAttack" :key="weapon.id" class="col-12 col-sm-6 col-md-4 col-lg-2 custom-col">
                <WeaponCard :weapon="weapon" />
            </div>
        </div>
        <div class="page-nav">
            <button class="nav-arrow" @click="previousPage">◀</button>
            <button class="nav-arrow" @click="nextPage">▶</button>
        </div>
    </div>
</template>

<script> 
import axios from "axios";
import SearchBar from './SearchBar.vue';
import WeaponCard from './WeaponCard.vue';

export default {
    components: {
        SearchBar,
        WeaponCard,
    },
    data() {
        return {
            searchQuery: "",
            weapons: [],
            currentPage: 0,
            currentQuery: "",
        };
    },
    methods: {
        async searchWeapons(searchQuery) {
            if (!searchQuery) return;
            this.currentQuery = searchQuery;  // Save the query
            try {
                const response = await axios.get(`https://eldenring.fanapis.com/api/weapons?name=${encodeURIComponent(searchQuery)}&limit=6&page=${this.currentPage}`);
                this.weapons = response.data.data;
                console.log(response.data.count)
            } catch (error) {
                console.error(error);
            }
        },
        nextPage() {
            this.currentPage += 1;
            this.searchWeapons(this.currentQuery);
        },
        previousPage() {
            if (this.currentPage > 0) {
                this.currentPage -= 1;
                this.searchWeapons(this.currentQuery);
            }
        },
    },
    computed: {
        weaponsWithNonZeroAttack() {
            // List of all possible attributes
            const allAttributes = ["Str", "Dex", "Fai", "Int", "Arc"];

            return this.weapons.map(weapon => {
                const combinedAttributes = allAttributes.map(attrName => {
                    const requiredAttr = weapon.requiredAttributes.find(attr => attr.name === attrName);
                    const scalingAttr = weapon.scalesWith.find(scale => scale.name === attrName);

                    return {
                        name: attrName,
                        amount: requiredAttr ? requiredAttr.amount : 0, // Req
                        scaling: scalingAttr ? scalingAttr.scaling : 0, // Scale
                    };
                });

                return {
                    ...weapon,
                    attack: weapon.attack.filter(({ amount }) => amount !== 0),
                    requiredAttributes: combinedAttributes,
                };
            });
        },
    },
};
</script>


<style lang="scss">
.custom-row {
    margin: 0rem 3rem;
}
.custom-col {
    padding: 1rem;
    margin-bottom: 3rem;
}
.page-nav {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .nav-arrow {
        font-size: 1.5rem;
        color: $color-darkest;
        background-color: $color-accent;
        border: none;
        padding: 0rem .5rem;
        margin: 2rem auto; // updated this line
        border-radius: 4px;
        transition: opacity 0.3s ease;
        &:hover {
            background-color: $color-accent;
            opacity: 80%;
        }
    }
}
</style>
