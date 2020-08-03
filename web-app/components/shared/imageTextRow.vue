<template>
  <v-sheet :dark="dark" class="image-text-row">
    <v-row :class="{ inversed: inverse && !$vuetify.breakpoint.mobile }">
      <v-col md="3" cols="12">
        <v-sheet elevation="6" class="image-text-row-sheet">
          <v-img :aspect-ratio="4 / 5" :src="imageUrl" />
        </v-sheet>
      </v-col>
      <v-col class="hidden-sm-and-down text-center" cols="2">
        <v-divider vertical />
      </v-col>
      <v-col md="7" cols="12">
        <h4 class="display-1">
          {{ heading }}
        </h4>
        <divider class="mt-2 mb-3" :alignment="dividerAlignment" />
        <p>{{ text }}</p>
        <v-btn v-if="to !== null || buttonText !== null" :to="to">
          {{ buttonText }}
        </v-btn>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
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
    buttonText: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
  },
  computed: {
    dividerAlignment() {
      if (this.$vuetify.breakpoint.mobile) {
        return "left"
      }
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
