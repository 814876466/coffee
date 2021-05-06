<template>
  <div class="page-finish">
    <navigator :titleName="title"></navigator>

    <main class="main_index">
      <end-works :finished="endsWork"></end-works>
    </main>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'
import { getFinished } from '@/api/finished.js'
import EndWorks from './componments/EndWorks'
export default {
  name: 'Finish',
  components: {
    Navigator,
    EndWorks
  },
  data () {
    return {
      title: 'Finished Articles',
      endsWork: []
    }
  },
  created () {
    getFinished().then(res => {
      if (res.code === 1) {
        this.endsWork = res.data.ending_works_list
      } else {
        alert(res.message)
      }
    }).catch(err => {
      alert(err)
    })
  }
}
</script>
<style lang="scss" scoped>
.page-finish {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main_index {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
