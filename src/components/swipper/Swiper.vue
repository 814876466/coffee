<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',

  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },

  mounted () {
    const that = this

    /* eslint-disable */
    new Swiper(this.$el, {
      pagination: {
        el: ".swiper-pagination"
      },

      loop: this.loop,

      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      } : false,

      on: {
        slideChangeTransitionEnd: function () {

          that.$emit('change', this.realIndex)
        },
      },
    });
  }
}
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 180px;
  border-radius: 8px;
  .swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: hsla(0, 0%, 100%, 0.7);
  }

}
</style>
