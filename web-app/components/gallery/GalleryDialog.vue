<template>
  <v-card class="gallery-dialog" dark>
    <v-carousel
      v-model="selectedIndex"
      height="80vh"
      hide-delimiters
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(item, i) in galleryItems" :key="i" contain eager>
        <v-img :src="item.src" :lazy-src="item.lazySrc" contain />
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    galleryItems: {
      type: Array,
      default: new Array(),
    },
    selectedIndex: {
      type: Number,
      default: 0,
    },
  },
})
</script>

<style lang="scss">
.gallery-dialog {
  .v-carousel__item {
    .v-responsive__content {
      align-items: center;
      justify-content: center;
      display: flex;

      .v-image {
        max-height: 80vh;
      }
    }
  }
}
</style>
