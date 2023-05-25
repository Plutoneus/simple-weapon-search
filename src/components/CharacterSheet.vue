<template>
    <div class="form-container">
        <form class="text-center">
            <label>
                STR
                <input class="stat-input" type="number" v-model.number="str" @input="emitUpdate">
            </label>
            <label>
                DEX
                <input class="stat-input" type="number" v-model.number="dex" @input="emitUpdate">
            </label>
            <label>
                INT
                <input class="stat-input" type="number" v-model.number="int" @input="emitUpdate">
            </label>
            <label>
                FAI
                <input class="stat-input" type="number" v-model.number="fai" @input="emitUpdate">
            </label>
            <label>
                ARC
                <input class="stat-input" type="number" v-model.number="arc" @input="emitUpdate">
            </label>
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
  gap: 1rem;
}
// label {
//   display: flex;
//   justify-content: center;
// }
.stat-input {
    display: flex;
    margin: .25rem 0rem;
    height: 60%;
    // width: 60%;
    outline: none;
    background-color: $color-darkest;
    border-radius: 4px;
    padding-left: .5rem;
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
