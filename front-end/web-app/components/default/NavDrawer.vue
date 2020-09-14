<template>
  <v-navigation-drawer v-if="$vuetify.breakpoint.mobile" v-model="drawer" app>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    items: {
      type: Array,
      default: [],
    },
    drawer: Boolean,
  },
})
</script>

<style lang="scss" scoped></style>
