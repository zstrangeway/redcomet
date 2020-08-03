<template>
  <v-sheet :dark="dark" class="image-text-row">
    <v-row :class="{ inversed: inverse }">
      <v-col cols="3">
        <v-sheet elevation="6" class="image-text-row-sheet">
          <v-img :aspect-ratio="4 / 5" :src="imageUrl" />
        </v-sheet>
      </v-col>
      <v-col class="text-center" cols="2">
        <v-divider vertical />
      </v-col>
      <v-col cols="7">
        <h4>{{ heading }}</h4>
        <divider class="mt-2 mb-3" :alignment="dividerAlignment" />
        <p>{{ text }}</p>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    heading: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    inverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dividerAlignment() {
      return this.inverse ? "right" : "left"
    },
  },
})
</script>

<style lang="scss" scoped>
.image-text-row {
  background: transparent;

  .inversed {
    flex-direction: row-reverse;
    text-align: right;
  }
}
</style>
