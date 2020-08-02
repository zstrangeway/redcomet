<template>
  <v-app id="rc-app">
    <v-main>
      <nuxt id="content" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style lang="scss" scoped>
#rc-app {
  &.v-application {
    background: #000;
  }
}

#content {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: #c9c9c9;
}

.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-active,
.layout-enter,
.layout-leave-active {
  opacity: 0;
}
</style>
