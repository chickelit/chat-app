<template>
  <ProfileTemplate />
</template>

<script lang="ts">
import Vue from "vue";
import auth from "@/middleware/auth";
export default Vue.extend({
  middleware: auth,
});
</script>
