<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h3>Keep in touch with us</h3>
          <divider alignment="left" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
            pariatur quidem, quis modi iure nihil commodi suscipit, corporis
            dicta adipisci, voluptatum quia cupiditate. Nulla minus voluptatum
            nostrum deleniti, asperiores facere.
          </p>
        </v-col>
      </v-row>
      <contact-content-item
        v-for="(item, i) in items"
        :key="i"
        :icon="item.icon"
        :text="item.text"
      />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      items: [
        {
          icon: "mdi-map-marker-outline",
          text: "101 Meadow St\nLodi, WI 53555",
        },
        {
          icon: "mdi-cellphone",
          text: "608-555-1212",
        },
        {
          icon: "mdi-email theme--light",
          text: "help@example.com",
        },
      ],
    }
  },
})
</script>

<style scoped></style>
