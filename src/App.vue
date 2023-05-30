<template>
  <div id="app">
    <WeaponSearch />
  </div>
</template>

<script>
import WeaponSearch from './components/WeaponSearch.vue';

export default {
  name: 'App',
  components: {
    WeaponSearch,
}
};
</script>


<style lang="scss">

@font-face {
    font-family: 'Mantinia';
    src: url('../public/fonts/Mantinia-Regular.otf') format('opentype');
}

.comp-title {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
}

#app{
  margin-top: 4rem;
  margin-right: 3rem;
  margin-left: 3rem;
  border-radius: 8px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: $color-primary;
}
</style>
