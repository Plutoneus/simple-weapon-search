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
        </tr>
    </table>
</template>

<script>
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
}
</style>
<!-- Your styles here -->
