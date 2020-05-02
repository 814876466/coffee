<template>
    <div>
        <rank-list :datas='rankData'  isRanking></rank-list>
    </div>

</template>

<script>
import { getRankRead } from '@/api/ranking.js'
import RankList from '../componments/RankList'
export default {
  name: 'RankRead',
  components: {
    RankList
  },
  data () {
    return {
      rankData: []
    }
  },
  methods: {
    getRank () {
      getRankRead().then(res => {
        if (res.code === 1) {
          this.rankData = res.data.week
        } else {
          alert(res.message)
        }
      }).catch(err => {
        alert(err)
      })
    }
  },
  created () {
    this.getRank()
  }
}
</script>
