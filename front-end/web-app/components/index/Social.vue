<template>
  <v-sheet class="social text-center" :dark="dark">
    <v-container>
      <v-icon class="mb-4" size="56">
        mdi-facebook
      </v-icon>
      <h3 class="display-1 mx-auto mb-2" :dark="dark">
        Social Media
      </h3>
      <divider class="mb-8" :dark="dark" />
      <p class="text-center mb-16 mx-auto">
        Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Etiam
        porta sem malesuada magna mollis euismod. Donec id elit non mi porta
        gravida at eget metus.
      </p>
      <v-btn :color="buttonColor" :href="facebookUrl" target="_blank" x-large>
        Follow Us
        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    buttonColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      facebookUrl:
        "https://www.facebook.com/Red-Comet-Creations-108728447434833",
    }
  },
})
</script>

<style lang="scss" scoped>
.social {
  background: transparent;

  p {
    opacity: 0.56;
    max-width: 600px;
  }
}
</style>
