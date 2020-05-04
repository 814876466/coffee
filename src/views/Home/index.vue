<template>
  <div class="page-home">
    <!-- 首页头部 begin -->
    <header-home></header-home>
    <!-- 首页头部 end -->
    <main class="main_index" ref="scrolls">
      <div>
        <!-- 因为betterscroll只认第一个子元素 所以要用div包一下 -->
          <swiper :autoplay="1000" :loop="true" @change="onchange" ref="my-swiper">
        <swiper-item v-for="item in bannerList" :key="item.info_id" class="comic_cover">
          <img :src="item.image_url" alt />
        </swiper-item>
      </swiper>

      <!-- nav starts -->
      <nav-home></nav-home>
      <!-- nav ends -->

      <!-- recommend starts -->

      <recommends
        :info="recommendOne"
        :infoTwo="recommendTwo"
        :infoThree="recommendThree"
        :infoFour="recommendFour"
        :infoSix="recommendSix"
      ></recommends>
      </div>

    </main>
    <!-- recommend ends -->
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
import NavHome from './componments/NavHome'
import Recommends from './componments/Recommends'
import BScroll from 'better-scroll'
export default {
  name: 'Home',

  components: {
    HeaderHome,
    Swiper,
    SwiperItem,
    NavHome,
    Recommends
  },
  data () {
    return {
      // 考虑数据放在哪里和数据格式
      // props是别人给我传的
      bannerList: {},
      recommendOne: [],
      recommendTwo: [],
      recommendThree: [],
      recommendFour: [],
      recommendSix: []
    }
  },

  methods: {
    onchange (index) {
      // console.log(index)
      // console.log(this.$refs['my-swiper'])
    }
  },
  created () {
    getBanner()
      .then(res => {
        if (res.code === 1) {
          this.bannerList = res.data.h5_recommend_male_rotation_map
          this.recommendOne = res.data.h5_recommend_male_fine_works
          this.recommendTwo = res.data.h5_recommend_male_hot_serial
          this.recommendThree = res.data.h5_recommend_male_new_arrival
          this.recommendFour = res.data.h5_recommend_male_popular_works
          this.recommendSix = res.data.h5_recommend_male_xiaobian_recommend
        } else {
          // 需要用vant组件左错误提示
          console.log(res.message)
        }
      })
      .catch(err => {
        alert('network error', err)
      })
  },
  mounted () {
    /* eslint-disable */
    new BScroll(this.$refs.scrolls)
    /* eslint-enable */
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main_index {
    flex: 1;
     overflow-y: auto;
    padding: 0 16px;
  }
  .comic_cover {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    border-radius: 4px;
  }
}
</style>
