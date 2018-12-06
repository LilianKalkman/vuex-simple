<template>
  <div>
    <p>Counter (computed) is: {{ doubleCounter }}</p>
    <p>Counter (state)is: {{ counter }}</p>
    <p>Number of clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      counter: this.$store.state.counter
    };
  },
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"])
  }
};
</script>
