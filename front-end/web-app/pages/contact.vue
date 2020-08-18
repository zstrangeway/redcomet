<template>
  <div>
    <section id="hero">
      <hero :image-url="heroImageUrl" :heading="heroHeading" />
    </section>
    <content-card>
      <section id="contact">
        <contact />
      </section>
      <section id="map">
        <google-map :map-query="mapQuery" />
      </section>
      <section id="social" class="accent py-14">
        <social button-color="primary" dark />
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
      heroHeading: "Contact Us",
      mapQuery: "Lodi+WI",
    }
  },
})
</script>

<style lang="scss" scoped></style>
