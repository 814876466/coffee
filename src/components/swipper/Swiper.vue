<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// 引入 Swiper 与它的样式
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',
  props: {
    autoplay: {
      default: 0,
      type: Number
    },
    loop: {
      default: true,
      type: Boolean
    }
  },
  mounted () {
    const that = this
    /* eslint-disable */
    // 实例化
    new Swiper(this.$refs.swiper, {
      autoplay: this.autoplay
        ? {
            delay: this.autoplay,
            stopOnLastSlide: false,
            disableOnInteraction: true
          }
        : false,
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination'
      },
      loop: this.loop,
      /* on 是swiper的事件*/
      on: {
        /*不要是用箭头函数 this指的是当前的组件实例 而不是想要的swiper实例*/
        // click: function() {
        //   // 这里需要考虑this的问题 this.$emit this
        //   that.$emit('change', this.realIndex)
        // }
          slideChangeTransitionEnd: function () {
          // 触发一个自定义事件 change
          // this.realIndex => this swiper实例
          // this.$emit()   => this 当前组件实例

          that.$emit('change', this.realIndex)
        },
      }
    })
    /* eslint-enable */
  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  padding: 10px;
  width: 100%;
  height: 214px;
  border-radius: 4px;
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
