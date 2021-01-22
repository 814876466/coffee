<template>
  <header class="index-header">
    <div class="nav_left">
      <div class="logo">
        <a href="#" title="VUE Project"></a>
      </div>
    </div>
    <div class="nav_middle"><span class="nav_title"></span></div>
    <div class="nav_right">
      <div class="nav_mine" @click="goMe">
      </div>
      <div class="nav_serach" @click="goSearch">
      </div>
      <div class="nav_switch_gender female_btn">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderHome',
  methods: {
    goSearch () {
      this.$router.push('/search')
    },
    goMe () {
      this.$router.push('/me')
    }
  }
}
</script>

<style lang="scss" scoped>
// 引入公用的mixins.scss
// @import "../../assets/styles/mixins.scss";
// 使用 @ 别名时，需要加一个 ~ 符号
// !!!! @vue/cli 4.3.1 不需要加 ~
@import '@/assets/style/mixins.scss';
.index-header {
  @include border-bottom;
  height: 44px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  .nav_left {
    float: left;
    .logo {
      width: 78px;
      height: 23px;
      width: 83px;
      margin-top: 10px;
      background: url('~@/assets/img/logo1.png') no-repeat;
      background-size: contain;
      a {
        display: block;
        text-indent: -9999px;
      }
    }
  }
  .nav_middle {
    float: left;
    width: 134px;
    height: 44px;
  }
  .nav_right {
    float: left;
    width: 132px;
    height: 44px;
    // .iconfont
    //   font-family: 'iconfont';
    //   font-size: 16px;
    //   font-style: normal;
    .nav_switch_gender {
      float: right;
      height: 44px;
      width: 44px;
      background: url('~@/assets/icon/girl.png') no-repeat;
      background-size: contain;
    }
    .nav_serach {
      float: right;
      height: 44px;
      width: 44px;
      background: url('~@/assets/icon/search.png') no-repeat;
      background-size: contain;
    }
    .nav_mine {
      float: right;
      height: 44px;
      width: 44px;
      background: url('~@/assets/icon/mine.png') no-repeat;
      background-size: contain;
    }
  }
}
</style>
