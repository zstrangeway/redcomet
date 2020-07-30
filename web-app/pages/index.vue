<template>
  <div>
    <hero
      :image-url="heroImageUrl"
      :heading="heroHeading"
      :sub-heading="heroSubHeading"
    />
    <three-cards :title="cardTitle" :card-items="cardItems" />
    <social />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import CardItem from "~/assets/types/CardItem.ts"

export default Vue.extend({
  data() {
    return {
      heroImageUrl: "/home-banner.jpg",
      heroHeading: "Red Comet Creations",
      heroSubHeading: "Lorem Ipsum Dolor Sit Amet!",
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
