<template>
  <v-sheet dark>
    <v-img
      :src="imageUrl"
      gradient="to top, rgba(0,0,0,.62), rgba(0,0,0,.62)"
      :height="imageHeight"
    >
      <div class="hero-container">
        <h1 class="heading">
          {{ heading }}
        </h1>
        <h1 v-if="subHeading" class="sub-heading">
          {{ subHeading }}
        </h1>
        <h4 v-if="text" class="text">
          {{ text }}
        </h4>
        <v-btn v-if="button" class="mt-6" :to="button.to" :color="button.color">
          {{ button.text }}
          <v-icon v-if="button.icon" right>
            {{ button.icon }}
          </v-icon>
        </v-btn>
        <scroll-down v-if="fullscreen" class="scroll-down" />
      </div>
    </v-img>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue"
import ButtonData from "~/assets/models/ButtonData.ts"

export default Vue.extend({
  props: {
    fullscreen: {
      type: Boolean,
      default: false,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    heading: {
      type: String,
      default: "",
    },
    subHeading: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    button: {
      type: ButtonData,
      default: null,
    },
  },
  computed: {
    imageHeight() {
      return this.fullscreen ? "100vh" : "600px"
    },
  },
})
</script>

<style lang="scss" scoped>
.hero-container {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.heading {
  font-size: 3rem;
  font-weight: 400;
  line-height: 3.125rem;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.sub-heading {
  font-size: 2.125rem;
  font-weight: 200;
  line-height: 2.5rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.text {
  font-weight: 300;
}

@media (min-width: 1264px) {
  .heading {
    font-size: 6rem;
    font-weight: 300;
    line-height: 6rem;
    letter-spacing: -0.015625em;
    margin-bottom: 8px;
  }

  .sub-heading {
    font-size: 3.75rem;
    font-weight: 200;
    line-height: 3.75rem;
    letter-spacing: 1rem;
    margin-bottom: 16px;
  }

  .text {
    font-size: 1.2rem;
  }
}

.scroll-down {
  position: absolute;
  bottom: 85px;
}
</style>
