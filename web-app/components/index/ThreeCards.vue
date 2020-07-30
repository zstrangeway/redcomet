<template>
  <section class="grey lighten-3 py-12 px-4">
    <v-container>
      <v-layout column align-center>
        <h2 class="display-3 text-center">
          {{ title }}
        </h2>
      </v-layout>
    </v-container>
    <v-container>
      <v-row>
        <v-col v-for="item in cardItems" :key="item" cols="12" md="4">
          <v-card
            elevation="1"
            pa-2
            class="fill-height py-12 px-4"
            :to="item.to"
          >
            <v-layout column align-center>
              <v-avatar color="primary" size="88">
                <v-icon dark size="36">
                  {{ item.icon }}
                </v-icon>
              </v-avatar>
            </v-layout>
            <v-card-title class="headline mb-1 justify-center">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="justify-center text-center subtitle-1">
              {{ item.text }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from "vue"
import CardItem from "~/assets/types/CardItem.ts"

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: "",
    },
    cardItems: {
      type: [CardItem],
      default: [],
    },
  },
})
</script>

<style lang="scss" scoped></style>
