<template>
  <v-img
    :src="imageUrl"
    gradient="to top, rgba(0,0,0,.62), rgba(0,0,0,.62)"
    :height="imageHeight"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">
          {{ heading }}
        </h1>
        <h4 class="subheading">
          {{ subHeading }}
        </h4>
      </v-col>
    </v-row>
  </v-img>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    fullscreen: {
      type: Boolean,
      default: false,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    heading: {
      type: String,
      default: "",
    },
    subHeading: {
      type: String,
      default: "",
    },
  },
  computed: {
    imageHeight() {
      return this.fullscreen ? "100vh" : "600px"
    },
  },
})
</script>

<style lang="scss" scoped></style>
