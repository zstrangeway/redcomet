<template>
  <v-row>
    <v-avatar color="transparent" size="72">
      <v-icon size="36">
        {{ icon }}
      </v-icon>
    </v-avatar>
    <div class="text">
      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
      <div class="text-wrapper grey--text text--darken-1">{{ text }}</div>
    </div>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    icon: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
})
</script>

<style lang="scss" scoped>
.text {
  display: flex;
  align-items: center;

  .text-wrapper {
    white-space: pre;
  }
}
</style>
