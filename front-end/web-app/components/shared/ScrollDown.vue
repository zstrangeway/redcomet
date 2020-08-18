<template>
  <div :class="['scroll-down', isScrolled ? 'transparent' : '']">
    <div class="scroll-mouse">
      <div class="scroll-mouse-wheel" />
    </div>
    <p v-if="!$vuetify.breakpoint.mobile" class="scroll-down-text">
      Scroll Down
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      isScrolled: false,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      this.isScrolled = currentScrollPosition > 0
    },
  },
})
</script>

<style scoped lang="scss">
.scroll-down {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s;
}

.scroll-mouse {
  width: 40px;
  height: 70px;
  box-shadow: inset 0 0 0 1px #fff;
  border-radius: 25px;
}

.scroll-mouse-wheel {
  width: 8px;
  height: 8px;
  background: #fff;
  margin-top: 8px;
  margin-left: 16px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll;
}

@keyframes scroll {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(30px);
  }
}

.scroll-down-text {
  text-transform: uppercase;
  font-size: 1.2rem;
  margin-top: 16px;
}

.transparent {
  opacity: 0;
}
</style>
