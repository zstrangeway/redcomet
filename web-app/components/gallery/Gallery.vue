<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="(item, i) in galleryItems"
        :key="i"
        class="d-flex child-flex"
        cols="3"
        @click.stop="
          dialogVisible = true
          selectedImage = i
        "
      >
        <gallery-image
          :src="item.src"
          :lazy-src="item.lazySrc"
          :alt="item.alt"
        />
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialogVisible"
      width="80vw"
      transition="scale-transition"
    >
      <gallery-dialog
        :gallery-items="galleryItems"
        :selected-index="selectedImage"
      />
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      dialogVisible: false,
      selectedImage: 0,
      galleryItems: [
        {
          src: "https://picsum.photos/400/500?image=1",
          lazySrc: "https://picsum.photos/10/6?image=1",
          alt: "Gallery image 1",
        },
        {
          src: "https://picsum.photos/500/300?image=2",
          lazySrc: "https://picsum.photos/10/6?image=2",
          alt: "Gallery image 2",
        },
        {
          src: "https://picsum.photos/500/300?image=3",
          lazySrc: "https://picsum.photos/10/6?image=3",
          alt: "Gallery image 3",
        },
        {
          src: "https://picsum.photos/500/300?image=4",
          lazySrc: "https://picsum.photos/10/6?image=4",
          alt: "Gallery image 4",
        },
        {
          src: "https://picsum.photos/500/300?image=5",
          lazySrc: "https://picsum.photos/10/6?image=5",
          alt: "Gallery image 5",
        },
        {
          src: "https://picsum.photos/500/300?image=6",
          lazySrc: "https://picsum.photos/10/6?image=6",
          alt: "Gallery image 6",
        },
        {
          src: "https://picsum.photos/500/300?image=7",
          lazySrc: "https://picsum.photos/10/6?image=7",
          alt: "Gallery image 7",
        },
        {
          src: "https://picsum.photos/500/300?image=8",
          lazySrc: "https://picsum.photos/10/6?image=8",
          alt: "Gallery image 8",
        },
        {
          src: "https://picsum.photos/500/300?image=9",
          lazySrc: "https://picsum.photos/10/6?image=9",
          alt: "Gallery image 9",
        },
        {
          src: "https://picsum.photos/500/300?image=10",
          lazySrc: "https://picsum.photos/10/6?image=10",
          alt: "Gallery image 10",
        },
        {
          src: "https://picsum.photos/500/300?image=11",
          lazySrc: "https://picsum.photos/10/6?image=11",
          alt: "Gallery image 11",
        },
        {
          src: "https://picsum.photos/500/300?image=12",
          lazySrc: "https://picsum.photos/10/6?image=12",
          alt: "Gallery image 12",
        },
        {
          src: "https://picsum.photos/500/300?image=13",
          lazySrc: "https://picsum.photos/10/6?image=13",
          alt: "Gallery image 13",
        },
        {
          src: "https://picsum.photos/500/300?image=14",
          lazySrc: "https://picsum.photos/10/6?image=14",
          alt: "Gallery image 14",
        },
        {
          src: "https://picsum.photos/500/300?image=15",
          lazySrc: "https://picsum.photos/10/6?image=15",
          alt: "Gallery image 15",
        },
        {
          src: "https://picsum.photos/500/300?image=16",
          lazySrc: "https://picsum.photos/10/6?image=16",
          alt: "Gallery image 16",
        },
        {
          src: "https://picsum.photos/500/300?image=17",
          lazySrc: "https://picsum.photos/10/6?image=17",
          alt: "Gallery image 17",
        },
        {
          src: "https://picsum.photos/500/300?image=18",
          lazySrc: "https://picsum.photos/10/6?image=18",
          alt: "Gallery image 18",
        },
        {
          src: "https://picsum.photos/500/300?image=19",
          lazySrc: "https://picsum.photos/10/6?image=19",
          alt: "Gallery image 19",
        },
        {
          src: "https://picsum.photos/500/300?image=20",
          lazySrc: "https://picsum.photos/10/6?image=20",
          alt: "Gallery image 20",
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped></style>
