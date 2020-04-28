<template>
  <div class="page-home">
    <!-- 首页头部 begin -->
    <header-home></header-home>
    <!-- 首页头部 end -->
    <swiper :autoplay="1000" :loop="true" @change="onchange" ref="my-swiper">
      <swiper-item>1</swiper-item>
      <swiper-item>2</swiper-item>
      <swiper-item>3</swiper-item>
    </swiper>
  </div>
</template>

<script>
// 使用 ../ 相对路径时，如果当前组件位置发生变化，
// 那么相对路径也需要去修改, 如果使用 @ 别名的方式。就不需要去修改这个路径了
// import Swiper from '@/components/Swiper/Swiper.vue'
// import SwiperItem from '@/components/Swiper/SwiperItem.vue'
// =>
// import { Swiper, SwiperItem } from '@/components/Swiper'
// import { getBanner } from '@/api/cartoon'
import HeaderHome from './componments/HeaderHome/HeaderHome'
import { Swiper, SwiperItem } from '@/components/swipper/index.js'

export default {
  name: 'Home',

  components: {
    HeaderHome,
    Swiper,
    SwiperItem
  },

  methods: {
    onchange (index) {
      console.log(index)
      console.log(this.$refs['my-swiper'])
    }
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
