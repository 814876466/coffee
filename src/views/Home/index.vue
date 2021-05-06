<template>
  <div class="page-home">
    <header-home></header-home>
    <main class="main_index" ref="scrolls">
      <div>
        <swiper
          class="my-swiper"
          @change="onChange"
          :autoplay="1000"
          :loop="true"
          v-if="bannerList.length > 0"
          ref="my-swiper"
        >
          <swiper-item v-for="item in bannerList" :key="item.info_id" class="comic_cover">
            <img :src="item.image_url" alt />
          </swiper-item>
        </swiper>
        <!-- nav starts -->
        <nav-home @goSea="goDown"></nav-home>
        <!-- nav ends -->
        <!-- recommend starts -->
        <recommends
          :info="recommendOne"
          :infoTwo="recommendTwo"
          :infoThree="recommendThree"
          :infoFour="recommendFour"
          :infoSix="recommendSix"
          @toDetail="toDeatilPage"
        ></recommends>
      </div>
    </main>
    <!-- recommend ends -->
  </div>
</template>

<script>
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
      bannerList: {},
      recommendOne: [],
      recommendTwo: [],
      recommendThree: [],
      recommendFour: [],
      recommendSix: []
    }
  },

  methods: {
    goDown () {
      this.$router.push('/listing')
    },
    onChange (index) {
    },
    toDeatilPage (id) {
      console.log(id)
      this.$router.push({
        path: '/details',
        query: {
          id
        }
      })
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 999;
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
    height: 214px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    border-radius: 8px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
