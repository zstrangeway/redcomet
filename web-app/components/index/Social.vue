<template>
  <section class="accent py-12">
    <v-icon dark size="56">
      mdi-facebook
    </v-icon>
    <h2>Social Media</h2>
    <v-divider class="base-divder" dark />
    <p>
      Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Etiam porta
      sem malesuada magna mollis euismod.
    </p>
    <v-btn :href="facebookUrl" target="_blank" x-large>
      Follow Us
      <v-icon right dark>
        mdi-open-in-new
      </v-icon>
    </v-btn>
  </section>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      facebookUrl:
        "https://www.facebook.com/Red-Comet-Creations-108728447434833",
    }
  },
})
</script>

<style lang="scss" scoped></style>
