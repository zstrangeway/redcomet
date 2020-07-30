<template>
  <v-app>
    <nav-drawer :items="items" :drawer="drawer" />
    <app-bar :items="items" :drawer.sync="drawer" />
    <v-main>
      <nuxt />
    </v-main>
    <app-footer />
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

<style lang="scss">
#main-nav-bar {
  .v-btn.v-size--small {
    font-size: 0.9rem;
  }
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
