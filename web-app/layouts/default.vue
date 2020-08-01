<template>
  <v-app id="rc-app">
    <nav-drawer :items="items" :drawer="drawer" />
    <app-bar :items="items" :drawer.sync="drawer" />
    <v-main>
      <nuxt id="content" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue"
import MenuItem from "~/assets/types/MenuItem.ts"

export default Vue.extend({
  data() {
    return {
      drawer: false,
      items: [
        new MenuItem("Home", "/"),
        new MenuItem("About", "/about"),
        new MenuItem("Services", "/services"),
        new MenuItem("Information", "/information"),
        new MenuItem("Contact", "/contact"),
        new MenuItem("Gallery", "/gallery"),
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
#rc-app {
  &.v-application {
    background: #000;
  }
}

#content {
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
