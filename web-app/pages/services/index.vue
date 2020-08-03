<template>
  <div>
    <section id="hero">
      <hero :image-url="heroImageUrl" :heading="heroHeading" />
    </section>
    <content-card>
      <section id="services" class="py-6">
        <v-container>
          <image-text-row
            v-for="(item, i) in services"
            :key="i"
            class="mt-4"
            :heading="item.heading"
            :text="item.text"
            :image-url="item.imageUrl"
            :to="item.to"
            :button-text="item.buttonText"
            :inverse="i % 2 !== 0"
          />
        </v-container>
      </section>
    </content-card>
    <app-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      heroImageUrl: "/home-banner.jpg",
      heroHeading: "Services",
      services: [
        {
          heading: "Long Arm",
          text:
            "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          to: "/services/long-arm",
          buttonText: "Get Quote",
        },
        {
          heading: "Mattis Fermentum",
          text:
            "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        },
        {
          heading: "Mattis Fermentum",
          text:
            "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        },
        {
          heading: "Mattis Fermentum",
          text:
            "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        },
        {
          heading: "Mattis Fermentum",
          text:
            "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        },
        {
          heading: "Mattis Fermentum",
          text:
            "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped></style>
