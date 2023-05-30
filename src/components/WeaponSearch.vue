<template>
    <div class="weapon-search">
        <SearchBar @search="searchWeapons" />
        <hr>
        <div class="row custom-row">
            <div v-for="weapon in weaponsWithNonZeroAttack" :key="weapon.id" class="col-12 col-sm-6 col-md-4 col-lg-2 custom-col">
                <WeaponCard :weapon="weapon" />
            </div>
            <div>
                <h3 v-if="(noneFound)" class="comp-title text-center">No weapons found...</h3>
            </div>
        </div>
        <div v-if="currentQuery" class="page-nav">
            <button v-if="(currentPage > 0)" class="nav-arrow" @click="previousPage">◀</button>
            <button v-else class="disabled">◀</button>

            <div v-if="(!noneFound && weapons.length > 0)" class="text-center">
                <span>Page {{ currentPage + 1 }} / {{ totalPages }}</span>
            </div>

            <button v-if="!(currentPage+1 == totalPages)" class="nav-arrow" @click="nextPage">▶</button>
            <button v-else class="disabled" @click="nextPage">▶</button>
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
            allWeapons: [],
            weapons: [],
            currentPage: 0,
            currentQuery: "",
            noneFound: false
        };
    },
    methods: {
        async searchWeapons(searchQuery) {
            if (!searchQuery) return;
            this.currentQuery = searchQuery;  // Save the query
            this.currentPage = 0; // Reset the page number to 0 for new searches
            this.fetchWeapons();
        },
        
        async fetchWeapons() {
            try {
                const response = await axios.get(`https://eldenring.fanapis.com/api/weapons?name=${encodeURIComponent(this.currentQuery)}`);
                this.allWeapons = response.data.data; // Store all weapons
                this.noneFound = this.allWeapons.length === 0;
                this.totalPages = Math.ceil(this.allWeapons.length / 6);
                this.fetchPage();
            } catch (error) {
                console.error(error);
            }
        },

        fetchPage() {
            const start = this.currentPage * 6;
            const end = start + 6;
            this.weapons = this.allWeapons.slice(start, end);
        },
        
        nextPage() {
            if (this.currentPage < this.totalPages - 1) {
                this.currentPage += 1;
                this.fetchPage();
            }
        },

        previousPage() {
            if (this.currentPage > 0) {
                this.currentPage -= 1;
                this.fetchPage();
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
.weapon-search {
    padding: .5rem 2rem;
}
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
    opacity: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    .nav-arrow {
        font-size: 2rem;
        color: $color-darkest;
        background-color: $color-accent;
        border: none;
        padding: 1.5rem 2rem;
        margin: 2rem auto;
        border-radius: 4px;
        transition: opacity 0.3s ease;
        &:hover {
            opacity: 80%;
        }
    }
    .disabled {
        opacity: 20%;
        font-size: 2rem;
        color: $color-darkest;
        background-color: $color-accent;
        border: none;
        padding: 1.5rem 2rem;
        margin: 2rem auto;
        border-radius: 4px;
        transition: opacity 0.3s ease;
        cursor: default;
    }
}
</style>
