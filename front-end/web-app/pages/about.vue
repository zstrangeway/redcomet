<template>
  <div>
    <section id="hero">
      <hero :image-url="heroImageUrl" :heading="heroHeading" />
    </section>
    <content-card>
      <section id="intro" class="py-6">
        <v-container class="text-center">
          <h2 class="display-2 my-8">
            Inceptos Sem Commodo
          </h2>
          <p>
            Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Cras
            justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis
            risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada
            magna mollis euismod. Maecenas faucibus mollis interdum. Donec id
            elit non mi porta gravida at eget metus.
          </p>
          <p>
            Sed posuere consectetur est at lobortis. Donec sed odio dui.
            Maecenas faucibus mollis interdum. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Sed posuere consectetur est at lobortis.
          </p>
        </v-container>
      </section>
      <section id="profiles" class="accent py-6">
        <v-container>
          <image-text-row
            v-for="(item, i) in aboutItems"
            :key="i"
            class="mt-4"
            :heading="item.heading"
            :text="item.text"
            :image-url="item.imageUrl"
            :inverse="i % 2 !== 0"
            dark
          />
        </v-container>
      </section>
      <section id="social" class="py-6">
        <social button-color="primary" />
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
      heroHeading: "About",
      aboutItems: [
        {
          heading: "LeAnn Spuda",
          text:
            "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          imageUrl: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        },
        {
          heading: "Alisha Spuda",
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
