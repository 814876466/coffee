<template>
  <div class="page-ranking">
    <navigator :titleName="title"></navigator>
    <ul>
        <li>
          <router-link to="/ranking/rankread" class="router-link">阅读榜</router-link>
        </li>
        <li>
          <router-link to="/ranking/rankshare" class="router-link">新作榜</router-link>
        </li>
        <li>
          <router-link to="/ranking/rankcom" class="router-link">综合榜</router-link>
        </li>
    </ul>
    <main class="main_index">
      <router-view></router-view>
    </main>

  </div>
</template>

<script>
import Navigator from '@/components/Navigator'
export default {
  name: 'Ranking',
  components: {
    Navigator
  },
  data () {
    return {
      title: '排行榜'
    }
  }

}
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixins.scss';
.page-ranking {
  display: flex;
  flex-direction: column;
  height: 100%;
  ul {
    @include border-bottom;
    height: 44px;
    width: 100%;
    display: flex;
    flex-direction: row;
    li{
      height: 44px;
      width: 125px;
      flex: 1;

      .router-link{
        margin: 0 auto;
        display: block;
        height: 44px;
        width: 65px;
        font-size: 14px;
        color: #666;
        line-height: 44px;
        text-align: center;
        text-decoration: none;
      }
      .router-link-active{
        border-bottom: 1px solid red;
      }
    }
  }

  .main_index {
    flex: 1;
    overflow-y: auto;
    padding: 0 16px;
  }
}
</style>
