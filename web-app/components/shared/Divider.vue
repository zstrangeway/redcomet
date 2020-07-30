<template>
  <div class="divider">
    <v-divider class="mx-auto" :dark="dark" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.divider {
  .v-divider {
    border-width: 3px;
    max-width: 28px;
  }
}
</style>
