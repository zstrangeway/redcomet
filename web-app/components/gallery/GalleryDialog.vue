<template>
  <v-card dark>
    <v-carousel
      v-model="selectedIndex"
      height="100%"
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

<style lang="scss" scoped></style>
