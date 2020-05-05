<template>
 <div class="nav_normal">
        <div class="nav_left"
        @click="goBack"
        >
            <i class="iconfont icon-houtui"></i>
        </div>
        <div class="nav_middle">
            {{titleName}}
        </div>

    </div>
</template>

<script>
export default {
  name: 'Navigator',
  props: {
    titleName: {
      default: '',
      type: String
    }
  },
  methods: {
    goBack () {
      // ?使用编程式导航?
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.nav_normal {
    height: 44px;
    .nav_left {
        height: 44px;
        width: 44px;
        float: left;
        i{
            font-size: 32px;
            line-height: 44px;
            text-align:center;
        }
    }

    .nav_middle {
        height: 44px;
        width: 280px;
        float: left;
        font-size: 18px;
        color: #999;
        text-align: center;
        line-height: 44px;
    }
}

</style>
