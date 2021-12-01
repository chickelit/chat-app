<template>
  <RegisterTemplate />
</template>

<script lang="ts">
import Vue from "vue";
import guest from "@/middleware/guest";
export default Vue.extend({
  middleware: guest,
});
</script>
