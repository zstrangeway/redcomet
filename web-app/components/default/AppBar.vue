<template>
  <v-app-bar
    id="main-nav-bar"
    fixed
    elevate-on-scroll
    scroll-threshold="500"
    :dark="!isScrolled"
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

export default Vue.extend({
  props: {
    items: {
      type: Array,
      default: new Array(),
    },
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      title: "Red Comet Creations",
      isScrolled: false,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      this.isScrolled = currentScrollPosition > 0
    },
  },
})
</script>

<style lang="scss" scoped>
#main-nav-bar {
  &.theme--dark {
    background: transparent;
  }
}
</style>
