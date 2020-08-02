<template>
  <div>
    <section id="hero">
      <hero
        :image-url="heroImageUrl"
        :heading="heroHeading"
        :sub-heading="heroSubHeading"
        :text="heroText"
        fullscreen
      />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      heroImageUrl: "/home-banner.jpg",
      heroHeading: "Red Comet",
      heroSubHeading: "Creations",
      heroText: "Coming Soon!",
    }
  },
})
</script>

<style lang="scss" scoped></style>
