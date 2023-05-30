<template>
	<div class="form-container">
		<form class="text-center row">
			<div class="stat col-sm-2">
				<label for="str">STR</label>
				<input id="str" class="stat-input" type="number" v-model.number="str" @input="emitUpdate">
			</div>
			<div class="stat col-sm-2">
				<label for="dex">DEX</label>
				<input id="dex" class="stat-input" type="number" v-model.number="dex" @input="emitUpdate">
			</div>
			<div class="stat col-sm-2">
				<label for="int">INT</label>
				<input id="int" class="stat-input" type="number" v-model.number="int" @input="emitUpdate">
			</div>
			<div class="stat col-sm-2">
				<label for="fai">FAI</label>
				<input id="fai" class="stat-input" type="number" v-model.number="fai" @input="emitUpdate">
			</div>
			<div class="stat col-sm-2">
				<label for="arc">ARC</label>
				<input id="arc" class="stat-input" type="number" v-model.number="arc" @input="emitUpdate">
			</div>
		</form>
	</div>
</template>


<script>
import { mapMutations } from 'vuex';

export default {
	data() {
		return {
			str: null,
			dex: null,
			int: null,
			fai: null,
			arc: null,
		};
	},
	methods: {
		...mapMutations(['updateCharacterStats']),
		emitUpdate() {
			const stats = {
				str: this.str,
				dex: this.dex,
				int: this.int,
				fai: this.fai,
				arc: this.arc,
			};
			this.updateCharacterStats(stats);
		},
	},
};
</script>


<style lang="scss">
.form-container {
	display: flex;
	justify-content: center;
	margin: 0;
	padding: 0;
}
form {
	display: flex;
	justify-content: center;
}
.stat-input {
	display: flex;
	outline: none;
	width: 100%;
	background-color: $color-darkest;
	border-radius: 8px;
	padding-left: .5rem;
	// margin-bottom: 1rem;
	color: $color-primary;
	border: 2px solid $color-secondary;
	
	&:focus{
		border: 2px solid #6272a4;
	}
}

.stat-input[type="number"] {
	-webkit-appearance: textfield; /* for Chrome */
	-moz-appearance: textfield; /* for Firefox */
	appearance: textfield; /* Standard syntax, currently not fully supported by all browsers */
}

/* For Chrome */
.stat-input[type="number"]::-webkit-inner-spin-button, 
.stat-input[type="number"]::-webkit-outer-spin-button { 
	-webkit-appearance: none; 
	margin: 0; 
}

</style>
