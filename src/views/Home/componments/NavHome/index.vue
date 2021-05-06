<template>
  <div class="home_menu">
    <div class="home_menu_item" @click="goSea">
      <i class="iconfont icon-horn"></i>
      <p>Cast</p>
    </div>
    <div class="home_menu_item" @click="goListing">
      <i class="iconfont icon-leimupinleifenleileibie"></i>
      <p>Category</p>
    </div>
    <div class="home_menu_item" @click="goRanking">
      <i class="iconfont icon-bangdan"></i>
      <p>Ranking</p>
    </div>
    <div class="home_menu_item" @click="goFinished">
      <i class="iconfont icon-wanjie"></i>
      <p>Finish</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHome',
  methods: {
    goSea () {
      this.$emit('goSea')

      this.$router.push('/broadcasts')
    },

    goRanking () {
      this.$emit('goRanking')

      this.$router.push('/Ranking')
    },
    goListing () {
      this.$emit('goListing')

      this.$router.push('/listing')
    },
    goFinished () {
      this.$emit('goFinished')

      this.$router.push('/finished')
    }
  }
}
</script>

<style lang="scss" scoped>
.home_menu {
  padding: 16px 16px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.home_menu .home_menu_item i {
  font-size: 50px;
  color: #f59ab6;
}

.iconfont .icon-bangdan {
  color: #ecad76;
}

.home_menu .home_menu_item p {
  line-height: 24px;
  font-size: 14px;
  text-align: center;
  color: #333;
}
</style>
