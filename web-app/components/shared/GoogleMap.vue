<template>
  <div class="google-map">
    <iframe id="gmap_canvas" :src="mapUrl" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    mapQuery: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      center: { lat: 43.313, lng: -89.5377488 },
    }
  },
  computed: {
    mapUrl() {
      return `https://www.google.com/maps/embed/v1/place?key=${process.env.googleMapsApiToken}&q=${this.mapQuery}`
    },
  },
})
</script>

<style lang="scss" scoped>
.google-map {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: #666666;
}

#gmap_canvas {
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  margin: 0;
}
</style>
