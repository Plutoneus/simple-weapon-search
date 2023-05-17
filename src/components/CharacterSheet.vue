<template>
    <div class="form-container">
        <form >
            <label>
                Strength
                <input class="stat-input" type="number" v-model.number="str" @input="emitUpdate">
            </label>
            <label>
                Dexterity
                <input class="stat-input" type="number" v-model.number="dex" @input="emitUpdate">
            </label>
            <label>
                Intelligence
                <input class="stat-input" type="number" v-model.number="int" @input="emitUpdate">
            </label>
            <label>
                Faith
                <input class="stat-input" type="number" v-model.number="fai" @input="emitUpdate">
            </label>
            <label>
                Arcane
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
  gap: 1rem;
}
.stat-input {
    width: 25%;
    display: flex;
    // font-size: 1.25rem;
    margin-top: .25rem;
    margin-bottom: .25rem;
    // width: 50%;
    outline: none;
    background-color: $color-secondary;
    border-radius: 2px;
    padding-left: .5rem;
    color: $color-primary;
    border: 2px solid $color-secondary;
    
    &:focus{
        border: 2px solid #6272a4;
    }
}
</style>
