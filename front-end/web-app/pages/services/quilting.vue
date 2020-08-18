<template>
  <div>
    <section id="hero">
      <hero :image-url="heroImageUrl" :heading="heroHeading" />
    </section>
    <content-card>
      <section id="placeholder">
        <quilting-quote-stepper />
      </section>
    </content-card>
    <app-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      heroImageUrl: "/home-banner.jpg",
      heroHeading: "Quilting",
    }
  },
})
</script>

<style lang="scss" scoped></style>
