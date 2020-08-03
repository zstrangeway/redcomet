<template>
  <v-card flat tile class="d-flex">
    <v-img
      :src="src"
      :lazy-src="lazySrc"
      :alt="alt"
      aspect-ratio="1"
      class="gallery-image grey lighten-2"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5" />
        </v-row>
      </template>
    </v-img>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    src: {
      type: String,
      default: "",
    },
    lazySrc: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },
})
</script>

<style lang="scss" scoped>
.gallery-image {
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
}
</style>
