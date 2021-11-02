<template>
  <footer class="footer">
    <p>Copyright &copy; {{ currentYear }}</p>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
});
</script>

<style lang="scss" scoped>
.footer {
  background: color("primary");
  height: 4rem;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  p {
    font-family: "Acumin Regular";
    color: color("light", "darkest");

    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
}
</style>
