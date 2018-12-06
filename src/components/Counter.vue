<template>
  <div class="container">
    <input type="text" placeholder="Inc/Dec By:" style="width: 100px" @change="changeValue">
    <button class="btn btn-primary" @click="increment(parseInt(value))">Increment</button>
    <button class="btn btn-primary" @click="decrement(parseInt(value))">Decrement</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      value: 0
    };
  },
  methods: {
    ...mapActions(["increment", "decrement"]),
    changeValue(event) {
      this.value = event.target.value;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>
