<template>
  <div class="home_menu">
    <div class="home_menu_item" @dblclick="goSea">
      <i class="iconfont icon-horn"></i>
      <p>放送表</p>
    </div>
    <div class="home_menu_item">
      <i class="iconfont icon-leimupinleifenleileibie"></i>
      <p>分类</p>
    </div>
    <div class="home_menu_item">
      <i class="iconfont icon-bangdan"></i>
      <p>榜单</p>
    </div>
    <div class="home_menu_item">
      <i class="iconfont icon-wanjie"></i>
      <p>完结</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHome',
  methods: {
    goSea () {
      this.$emit('goSea')
      console.log(111111)

      this.$router.push('/search')
    }
  }
  // methods: {
  //   goBroad () {
  //     console.log(1)
  //     this.$router.push('/broadcast')
  //   },
  //   goList () {
  //     this.$router.push('/listing')
  //   },
  //   goRank () {
  //     this.$router.push('/ranking')
  //   },
  //   goFinish () {
  //     this.$router.push('/finished')
  //   }

  // }
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
