<template>
  <div>
    <h3>Enter quilt dimensions</h3>
    <v-text-field
      ref="heightInput"
      v-model="value.height"
      label="Height"
      type="number"
      hint="Enter height in inches"
      :rules="dimenRules"
      required
    />
    <v-text-field
      ref="widthInput"
      v-model="value.width"
      label="Width"
      type="number"
      hint="Enter width in inches"
      :rules="dimenRules"
      required
    />
    <p>{{ value.totalArea }} square inches</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import QuiltingQuote from "~/assets/types/QuiltingQuote.ts"

export default Vue.extend({
  props: {
    value: {
      type: QuiltingQuote,
      default: null,
    },
  },
  data() {
    return {
      dimenRules: [
        (v: string) => !!v || "Dimension is required",
        (v: string) =>
          v >= this.$props.value.minDimen ||
          `Dimension must be at least ${this.$props.value.minDimen}`,
        (v: string) =>
          v <= this.$props.value.maxDimen ||
          `Dimension cannot be more than ${this.$props.value.maxDimen}`,
      ],
    }
  },
})
</script>

<style scoped></style>
