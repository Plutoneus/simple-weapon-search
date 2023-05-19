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
            <td v-if="(attribute.amount != 0)">{{ attribute.amount }}</td>
            <td v-else>-</td>
            <td v-if="(attribute.scaling != 0)">{{ attribute.scaling }}</td>
            <td v-else>-</td>
            <td v-if="!canEquip(attribute.name, attribute.amount)" class="fail text-center">✕</td>
            <td v-else class="pass text-center">✓</td>
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
            if (lowercaseStat == "str") {
                return this.characterStats[lowercaseStat] >= (requiredAmount / 1.5);
            }
            else {
                return this.characterStats[lowercaseStat] >= requiredAmount;
            }
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
