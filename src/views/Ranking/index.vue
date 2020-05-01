<template>
  <div class="page-ranking">
    <navigator :titleName="title"></navigator>
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
.page-ranking {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main_index {
    flex: 1;
    overflow-y: auto;
    padding: 0 16px;
  }
}
</style>
