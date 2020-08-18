<template>
  <v-container>
    <v-row>
      <v-col offset-md="3" md="6" cols="12">
        <v-card class="pa-4">
          <slot />
          <v-toolbar flat>
            <v-btn v-if="value > 1" @click.stop="prev">
              Previous
            </v-btn>
            <v-spacer />
            <v-btn
              v-if="value < stepCount"
              color="primary"
              :disabled="disabled"
              @click.stop="next"
            >
              Next
            </v-btn>
            <v-btn
              v-else
              color="primary"
              :disabled="disabled"
              @click.stop="submit"
            >
              Submit
            </v-btn>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    value: {
      type: Number,
      default: null,
    },
    stepCount: {
      type: Number,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    next() {
      this.$emit("input", this.$props.value + 1)
    },
    prev() {
      this.$emit("input", this.$props.value - 1)
    },
    submit() {
      this.$emit("submit")
    },
  },
})
</script>
