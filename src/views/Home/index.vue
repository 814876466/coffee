<template>
  <div class="page-home">
    <!-- 首页头部 begin -->
    <header-home></header-home>
    <!-- 首页头部 end -->
    <swiper :autoplay="1000" :loop="true" @change="onchange" ref="my-swiper">
      <swiper-item v-for="item in bannerList" :key="item.info_id" class="comic_cover">
        <img :src="item.image_url" alt />
      </swiper-item>

      <swiper-item>
        <img src="../../assets/img/logo.png" alt />
      </swiper-item>
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
import { getBanner } from '@/api/comics.js'
export default {
  name: 'Home',

  components: {
    HeaderHome,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      // 考虑数据放在哪里和数据格式
      // props是别人给我传的
      bannerList: {}
    }
  },

  methods: {
    onchange (index) {
      console.log(index)
      console.log(this.$refs['my-swiper'])
    }
  },
  created () {
    getBanner()
      .then(res => {
        console.log(res)
        if (res.code === 1) {
          this.bannerList = res.data.h5_recommend_male_rotation_map
          console.log(res.data.h5_recommend_male_rotation_map)
        } else {
          // 需要用vant组件左错误提示
          console.log(res.message)
        }
      })
      .catch(err => {
        alert('network error', err)
      })
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.comic_cover {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  border-radius: 4px;
}
</style>
