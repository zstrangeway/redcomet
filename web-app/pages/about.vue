<template>
  <div>
    <section id="hero">
      <hero :image-url="heroImageUrl" :heading="heroHeading" />
    </section>
    <content-card>
      <section id="placeholder">
        <v-container>
          <v-layout column align-center>
            <h2 class="display-2 mt-6">
              Coming Soon!
            </h2>
          </v-layout>
        </v-container>
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
      heroHeading: "About",
    }
  },
})
</script>

<style lang="scss" scoped></style>
