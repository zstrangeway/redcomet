<template>
  <v-card class="page-content mx-auto" elevation="24">
    <slot />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({})
</script>

<style scoped>
.page-content {
  margin-top: -64px;
  max-width: 95%;
}
</style>
