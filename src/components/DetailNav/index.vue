<template>
 <div class="nav_normal">
        <div class="nav_left">
            <i class="iconfont icon-houtui"></i>
        </div>
        <div class="nav_middle">
            {{titleName}}
        </div>
        <div class="nav_right">
            <span class="follow">
                <i class="iconfont icon-follow"></i>
                关注
            </span>
            <span class="share">
                <i class="iconfont icon-ArtboardCopy1"></i>
            </span>
        </div>

    </div>
</template>

<script>
export default {
  name: 'DetailNav',
  props: {
    titleName: {
      default: 'Title',
      type: String
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
        width: 219px;
        float: left;
        font-size: 18px;
        color: #999;
        text-align: center;
        line-height: 44px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .nav_right{
        float: right;
        height: 44px;
        width: 100px;
        line-height: 44px;
        font-size: 20px;
        .follow{
            color: #fff;
        background: crimson;
        border-radius: 4px;
        font-size: 16px;
        line-height: 20px;
        height: 20px;
        }

        .share{
            margin-left: 7px;
        }
    }
}

</style>
