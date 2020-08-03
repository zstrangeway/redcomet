<template>
  <div class="divider">
    <v-divider :class="alignmentClass" :dark="dark" />
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
    alignment: {
      type: String,
      default: "center",
    },
  },
  computed: {
    alignmentClass() {
      switch (this.alignment) {
        case "left":
          return "mr-auto"
        case "right":
          return "ml-auto"
        default:
          return "mx-auto"
      }
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
