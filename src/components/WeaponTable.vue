<template>
    <table class="statTable">
        <thead>
            <th>Type</th>
            <th>Dmg</th>
        </thead>
        <tr v-for="attack in attack" :key="attack.name">
            <td>{{ attack.name }}</td>
            <td>{{ attack.amount }}</td>
        </tr>
    </table>
    <table class="statTable">
        <thead>
            <th>Stat</th>
            <th>Req</th>
            <th>Scale</th>
        </thead>
        <tr v-for="attribute in requiredAttributes" :key="attribute.name">
            <td>{{ attribute.name }}</td>
            <td>{{ attribute.amount }}</td>
            <td>{{ attribute.scaling }}</td>
            <td v-if="!canEquip(attribute.name, attribute.amount)" class="fail text-center">X</td>
            <td v-else class="pass text-center">O</td>
        </tr>
    </table>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: {
        attack: {
            type: Array,
            required: true,
        },
        requiredAttributes: {
            type: Array,
            required: true,
        },
    },
    computed: {
      ...mapState(['characterStats']),
    },
    methods: {
        canEquip(stat, requiredAmount) {
            const lowercaseStat = stat.toLowerCase();
            return this.characterStats[lowercaseStat] >= requiredAmount;
        },
    },
};
</script>


<style lang="scss">
.statTable {
    color: $color-primary;
    margin-top: auto;
    th {
        margin-right: -20px;
        color: $color-accent;
    }
    td {
        margin-right: -20px;
        color: $color-primary;
    }
    .fail {
        color: #ff5555;
    }
    .pass {
        color: #50fa7b;
    }
}
</style>
<!-- Your styles here -->
