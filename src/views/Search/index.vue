<template>
  <div class="page-search">
    <search-input @seaVal="saveSearch"></search-input>
    <div style="display: none;">
    </div>
    <hot-search :hot="hotData" @toSearch="saveSearch"></hot-search>
    <history-search
    :historyRes="historySearchList"
    @clearHistory="clearHis"
    @toResult="toResultPage"
    ></history-search>
  </div>
</template>

<script>
import HistorySearch from './componments/HistorySearch'
import HotSearch from './componments/HotSearch'
import SearchInput from '@/components/input/SearchInput'
import { getHot } from '@/api/search.js'
export default {
  name: 'Search',
  data () {
    return {
      hotData: [],
      historySearchList: this.getSearch()
    }
  },
  components: {
    HistorySearch,
    HotSearch,
    SearchInput
  },
  methods: {
    getHot () {
      getHot().then(res => {
        if (res.code === 1) {
          this.hotData = res.data
        } else {
          alert(res.message)
        }
      }).catch(err => {
        alert(err)
      })
    },
    saveSearch (keyword) {
      console.log(keyword)
      let tmp = window.localStorage.getItem('search')
      if (!tmp) {
        tmp = []
      } else {
        tmp = JSON.parse(tmp)
      }
      if (tmp.includes(keyword)) {
        const i = tmp.indexOf(keyword)
        tmp.splice(i, 1)
        tmp.unshift(keyword)
      } else {
        tmp.unshift(keyword)
      }

      if (tmp.length >= 5) {
        tmp.splice(4, 1)
      }

      window.localStorage.setItem('search', JSON.stringify(tmp))
      this.toResultPage(keyword)
    },
    getSearch () {
      const tmp = window.localStorage.getItem('search')
      if (!tmp) {
        return []
      } else {
        return JSON.parse(tmp)
      }
    },
    toResultPage (keyword) {
      this.$router.push({
        path: '/searchresult',
        query: {
          keyword
        }
      })
    },
    clearHis () {
      window.localStorage.clear()
      this.historySearchList = []
    }
  },
  created () {
    this.getHot()
  }
}
</script>
<style lang="scss" scoped>

</style>
