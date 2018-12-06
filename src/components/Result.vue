<template>
  <div>
    <input type="text" placeholder="Type a Start Value" @input="changeCounter">
    <p>Counter (computed) is: {{ doubleCounter }}</p>
    <p>Counter (state)is: {{ counter }}</p>
    <p>Number of clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter", "counter"])
  },
  methods: {
    changeCounter(event) {
      this.$store.dispatch("update", event.target.value);
    }
  }
};
</script>
