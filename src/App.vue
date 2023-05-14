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
    WeaponSearch
  }
};
</script>


<style lang="scss">
#app{
  margin-top: 4rem;
  margin-right: 3rem;
  margin-left: 3rem;
  border-radius: 8px;
}
</style>
