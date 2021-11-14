<template>
  <footer class="footer">
    <Wrapper class="wrapper">
      <p>Copyright &copy; {{ currentYear }}</p>
    </Wrapper>
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
  .wrapper {
    display: grid;
    align-items: center;
  }
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
