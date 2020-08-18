<template>
  <v-card class="page-content mx-auto mb-12" elevation="24">
    <slot />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({})
</script>

<style scoped>
.page-content {
  flex-grow: 1;
  margin-top: -64px;
  width: 95%;
}
</style>
