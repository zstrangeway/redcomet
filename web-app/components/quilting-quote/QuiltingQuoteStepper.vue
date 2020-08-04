<template>
  <v-stepper v-model="stepper">
    <v-stepper-header>
      <v-stepper-step :complete="step1Complete" step="1">
        Enter Dimensions
      </v-stepper-step>
      <v-divider />
      <v-stepper-step step="2">
        Quilting Pattern
      </v-stepper-step>
      <v-divider />
      <v-stepper-step step="3">
        Thread Color
      </v-stepper-step>
      <v-divider />
      <v-stepper-step step="4">
        Other Options
      </v-stepper-step>
      <v-divider />
      <v-stepper-step step="5">
        Contact Information
      </v-stepper-step>
      <v-divider />
      <v-stepper-step step="6">
        Summmary
      </v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <quilting-quote-stepper-content
          v-model="stepper"
          :step-count="stepCount"
        >
          <quilting-quote-dimens v-model="quiltingQuote" />
        </quilting-quote-stepper-content>
      </v-stepper-content>

      <v-stepper-content step="2">
        <quilting-quote-stepper-content
          v-model="stepper"
          :step-count="stepCount"
        >
          <h3>Select Quilting Pattern</h3>
        </quilting-quote-stepper-content>
      </v-stepper-content>

      <v-stepper-content step="3">
        <quilting-quote-stepper-content
          v-model="stepper"
          :step-count="stepCount"
        >
          <h3>Select Thread Color</h3>
        </quilting-quote-stepper-content>
      </v-stepper-content>

      <v-stepper-content step="4">
        <quilting-quote-stepper-content
          v-model="stepper"
          :step-count="stepCount"
        >
          <h3>Select Other Options</h3>
        </quilting-quote-stepper-content>
      </v-stepper-content>

      <v-stepper-content step="5">
        <quilting-quote-stepper-content
          v-model="stepper"
          :step-count="stepCount"
        >
          <h3>Enter Contact Information</h3>
        </quilting-quote-stepper-content>
      </v-stepper-content>

      <v-stepper-content step="6">
        <quilting-quote-stepper-content
          v-model="stepper"
          :step-count="stepCount"
          @submit="submit"
        >
          <h3>Summary</h3>
        </quilting-quote-stepper-content>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script lang="ts">
import Vue from "vue"
import QuiltingQuote from "~/assets/types/QuiltingQuote.ts"

export default Vue.extend({
  data() {
    return {
      heroImageUrl: "/home-banner.jpg",
      heroHeading: "Quilting",
      stepper: 1,
      stepCount: 6,
      quiltingQuote: new QuiltingQuote(),
    }
  },
  computed: {
    step1Complete() {
      return this.$data.quiltingQuote.dimensValid
    },
    step2Complete() {
      return this.$data.quiltingQuote.hasPattern
    },
    step3Complete() {
      return false
    },
    step4Complete() {
      return false
    },
    step5Complete() {
      return false
    },
    step6Complete() {
      return false
    },
  },
  methods: {
    submit() {
      // TODO: Implement
      console.log("submit")
    },
  },
})
</script>

<style lang="scss" scoped></style>
