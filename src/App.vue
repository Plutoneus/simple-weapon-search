<template>
  <div id="app">
    <CharacterSheet />
    <WeaponSearch />
  </div>
</template>

<script>
import CharacterSheet from './components/CharacterSheet.vue';
import WeaponSearch from './components/WeaponSearch.vue';

export default {
  name: 'App',
  components: {
    WeaponSearch,
    CharacterSheet
}
};
</script>


<style lang="scss">
#app{
  margin-top: 4rem;
  margin-right: 3rem;
  margin-left: 3rem;
  border-radius: 8px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: $color-primary;
}
</style>
