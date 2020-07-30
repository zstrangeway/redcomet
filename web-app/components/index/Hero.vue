<template>
  <v-parallax dark :src="imageUrl">
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
  </v-parallax>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
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
})
</script>

<style lang="scss" scoped></style>
