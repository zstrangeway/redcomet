<template>
  <v-app-bar
    id="main-nav-bar"
    app
    fixed
    elevate-on-scroll
    scroll-threshold="500"
  >
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.mobile"
      @click.stop="$emit('update:drawer', !drawer)"
    />
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <div v-if="!$vuetify.breakpoint.mobile">
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        text
        small
        class="font-weight-light"
      >
        {{ item.title }}
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue"
import MenuItem from "~/assets/types/MenuItem.ts"

export default Vue.extend({
  props: {
    items: {
      type: [MenuItem],
      default: [],
    },
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      title: "Red Comet Creations",
    }
  },
})
</script>

<style lang="scss" scoped></style>
