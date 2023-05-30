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
	font-family: 'Karla';
	src: url('../public/fonts/Karla.ttf') format('opentype');
}

.comp-title {
	font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
	margin-bottom: 2rem;
	font-size: 3rem;
	color: $color-primary;
}

#app{
	margin-top: 2rem;
	margin-right: 2rem;
	margin-left: 3rem;
	border-radius: 8px;
	font-family: 'Karla';
	color: $color-primary;
}
</style>
