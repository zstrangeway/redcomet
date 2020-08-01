<template>
  <div>
    <section id="hero">
      <hero
        :image-url="heroImageUrl"
        :heading="heroHeading"
        :sub-heading="heroSubHeading"
        :text="heroText"
        :button="heroButton"
        fullscreen
      />
    </section>
    <content-card>
      <section id="links" class="grey lighten-3 py-12 px-4">
        <three-cards :title="cardTitle" :card-items="cardItems" />
      </section>
      <section id="social" class="accent py-14">
        <social button-color="primary" dark />
      </section>
    </content-card>
    <app-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CardItem from "~/assets/types/CardItem.ts"
import ButtonData from "~/assets/types/ButtonData.ts"

export default Vue.extend({
  data() {
    return {
      heroImageUrl: "/home-banner.jpg",
      heroHeading: "Red Comet",
      heroSubHeading: "Creations",
      heroText: "Lorem Ipsum Dolor Sit Amet!",
      heroButton: new ButtonData("Get a Quote!", "/services", "primary"),
      cardTitle: "Fringilla Cursus Euismod!",
      cardItems: [
        new CardItem(
          "About",
          "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor.",
          "/about",
          "mdi-account-group"
        ),
        new CardItem(
          "Services",
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.",
          "/services",
          "mdi-room-service"
        ),
        new CardItem(
          "Information",
          "Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla.",
          "/information",
          "mdi-information-variant"
        ),
      ],
    }
  },
})
</script>

<style lang="scss" scoped></style>
