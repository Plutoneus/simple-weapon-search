<template>
    <div>
        <SearchBar @search="searchWeapons" />
        <button @click="previousPage">Previous Page</button>
        <button @click="nextPage">Next Page</button>
        <div class="row custom-row">
            <div v-for="weapon in weaponsWithNonZeroAttack" :key="weapon.id" class="col-12 col-sm-6 col-md-4 col-lg-2 custom-col">
                <WeaponCard :weapon="weapon" />
            </div>
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
            sorceries: [],
            incantations: [],
            currentPage: 0,
            currentQuery: "",
        };
    },
    methods: {
        async searchSpells(searchQuery) {
            await this.searchSorceries(searchQuery);
            await this.searchIncantations(searchQuery);
        },
        async searchWeapons(searchQuery) {
            console.log("I am searching for ", searchQuery);
            if (!searchQuery) return;
            this.currentQuery = searchQuery;  // Save the query
            try {
                const response = await axios.get(`https://eldenring.fanapis.com/api/weapons?name=${encodeURIComponent(searchQuery)}&limit=12&page=${this.currentPage}`);
                this.weapons = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async searchSorceries(searchQuery) {
            if (!searchQuery) return;
            try {
                const response = await axios.get(`https://eldenring.fanapis.com/api/sorceries?name=${encodeURIComponent(searchQuery)}&limit=12`);
                this.sorceries = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async searchIncantations(searchQuery) {
            if (!searchQuery) return;
            try {
                const response = await axios.get(`https://eldenring.fanapis.com/api/incantations?name=${encodeURIComponent(searchQuery)}&limit=12`);
                this.incantations = response.data.data;
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
    margin-right: 3rem;
    margin-left: 3rem;
}
.custom-col {
    padding: 1rem;
    margin-bottom: 3rem;
}
</style>
