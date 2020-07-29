<template>
  <div>
    <v-parallax dark src="/home-banner.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Red Comet Creations</h1>
          <h4 class="subheading">Lorem Ipsum Dolor Sit Amet!</h4>
        </v-col>
      </v-row>
    </v-parallax>
    <section class="grey lighten-3 py-12 px-4">
      <v-container>
        <v-layout column align-center>
          <h2 class="display-3 text-center">Fringilla Cursus Euismod!</h2>
        </v-layout>
      </v-container>
      <v-container>
        <v-row>
          <v-col v-for="item in items" :key="item" cols="12" md="4">
            <v-card elevation="1" pa-2 class="fill-height py-12 px-4" :to="item.to">
              <v-layout column align-center>
                <v-avatar color="primary" size="88">
                  <v-icon dark size="36">{{item.icon}}</v-icon>
                </v-avatar>
              </v-layout>
              <v-card-title class="headline mb-1 justify-center">{{item.title}}</v-card-title>
              <v-card-text class="justify-center text-center subtitle-1">{{item.text}}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="accent py-12">
      <v-icon dark size="56">mdi-facebook</v-icon>
      <h2>Social Media</h2>
      <v-divider class="base-divder" dark />
      <p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod.</p>
      <v-btn :href="facebookUrl" target="_blank" x-large>
        Follow Us
        <v-icon right dark>mdi-open-in-new</v-icon>
      </v-btn>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "About",
          text:
            "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor.",
          to: "/about",
          icon: "mdi-account-group",
        },
        {
          title: "Services",
          text:
            "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.",
          to: "/services",
          icon: "mdi-room-service",
        },
        {
          title: "Information",
          text:
            "Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla.",
          to: "/information",
          icon: "mdi-information-variant",
        },
      ],
      title: "Red Comet Creations",
      facebookUrl:
        "https://www.facebook.com/Red-Comet-Creations-108728447434833",
    };
  },
};
</script>

<style lang="scss">
.base-divider .v-divider {
  border-width: 3px 0 0 0 !important;
}
</style>