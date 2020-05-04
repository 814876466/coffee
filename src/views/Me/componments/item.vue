<template>
  <div class="mine-item">
    <i class="iconfont" :class="icon"></i>
    <span class="m-item-title">{{name}}</span>
    <span class="m-item-nav">
      <i class="iconfont icon-qianjin" ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.mine-item {
  width: 100%;
  height: 54px;
  padding-left: 16px;
  border-bottom: 1px solid #efefef;
  font-size: 14px;
  color: #666;
  line-height: 54px;

  .m-item-title {
    display: inline-block;
    width: 275px;
    margin-left: 10px;
  }
  .m-item-nav {
    margin-left: 10px;
  }
}
</style>
