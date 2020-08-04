<template>
  <div>
    <section id="hero">
      <hero :image-url="heroImageUrl" :heading="heroHeading" />
    </section>
    <content-card>
      <section id="placeholder">
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
              <v-container>
                <v-row>
                  <v-col offset-md="3" md="6" cols="12">
                    <v-card class="pa-4">
                      <h3>Enter quilt dimensions</h3>
                      <v-text-field
                        v-model="quiltingQuote.height"
                        label="Height"
                        type="number"
                        hint="Enter height in inches"
                        :rules="dimenRules"
                        required
                      />
                      <v-text-field
                        v-model="quiltingQuote.width"
                        label="Width"
                        type="number"
                        hint="Enter width in inches"
                        :rules="dimenRules"
                        required
                      />
                      <p>{{ quiltingQuote.totalArea }} square inches</p>
                      <v-toolbar flat>
                        <v-spacer />
                        <v-btn
                          color="primary"
                          :disabled="!step1Complete"
                          @click.stop="stepper++"
                        >
                          Next
                        </v-btn>
                      </v-toolbar>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-container>
                <v-row>
                  <v-col offset-md="3" md="6" cols="12">
                    <v-card>
                      <h3>Select Quilting Pattern</h3>
                      <v-toolbar flat>
                        <v-btn @click.stop="stepper--">
                          Previous
                        </v-btn>
                        <v-spacer />
                        <v-btn color="primary" @click.stop="stepper++">
                          Next
                        </v-btn>
                      </v-toolbar>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-container>
                <v-row>
                  <v-col offset-md="3" md="6" cols="12">
                    <v-card>
                      <h3>Select Thread Color</h3>
                      <v-toolbar flat>
                        <v-btn @click.stop="stepper--">
                          Previous
                        </v-btn>
                        <v-spacer />
                        <v-btn color="primary" @click.stop="stepper++">
                          Next
                        </v-btn>
                      </v-toolbar>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-stepper-content>
            <v-stepper-content step="4">
              <v-container>
                <v-row>
                  <v-col offset-md="3" md="6" cols="12">
                    <v-card>
                      <h3>Select Other Options</h3>
                      <v-toolbar flat>
                        <v-btn @click.stop="stepper--">
                          Previous
                        </v-btn>
                        <v-spacer />
                        <v-btn color="primary" @click.stop="stepper++">
                          Next
                        </v-btn>
                      </v-toolbar>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-stepper-content>
            <v-stepper-content step="5">
              <v-container>
                <v-row>
                  <v-col offset-md="3" md="6" cols="12">
                    <v-card>
                      <h3>Enter Contact Information</h3>
                      <v-toolbar flat>
                        <v-btn @click.stop="stepper--">
                          Previous
                        </v-btn>
                        <v-spacer />
                        <v-btn color="primary" @click.stop="stepper++">
                          Next
                        </v-btn>
                      </v-toolbar>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-stepper-content>
            <v-stepper-content step="6">
              <v-container>
                <v-row>
                  <v-col offset-md="3" md="6" cols="12">
                    <v-card>
                      <h3>Summary</h3>
                      <v-toolbar flat>
                        <v-btn @click.stop="stepper--">
                          Previous
                        </v-btn>
                        <v-spacer />
                        <v-btn color="primary">
                          Submit
                        </v-btn>
                      </v-toolbar>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </section>
    </content-card>
    <app-footer />
  </div>
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
      quiltingQuote: new QuiltingQuote(),
      dimenRules: [
        (v: string) => !!v || "Dimension is required",
        (v: string) =>
          v >= this.$data.quiltingQuote.minDimen ||
          `Dimension must be at least ${this.$data.quiltingQuote.minDimen}`,
        (v: string) =>
          v <= this.$data.quiltingQuote.maxDimen ||
          `Dimension cannot be more than ${this.$data.quiltingQuote.maxDimen}`,
      ],
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
})
</script>

<style lang="scss" scoped></style>
