<template>
  <div class="page-SearchResult">
    <search-input @seaVal="saveSearch"></search-input>
    <main class="main_index">
        <div class="search">
        <div class="searchList"
        v-for="item in list"
        :key="item.comic_id"
        @click="toDetail(item.comic_id)"
        >
          <div class="search_list_img">
            <div class="comic_cover">
              <img :src="item.cover" alt="">
            </div>
          </div>
          <div class="search_list_delete">
              <h4 class="sarchList_title" >{{item.name | formatYi(keyword)}}</h4>
              <div class="sina_nickname">
                {{item.sina_nickname}}

              </div>
              <div class="sina_nickname" v-show="item.cates.length>=1">
                <span
                v-for="num in item.cates"
                :key="num.cate_id"
                >{{num.cate_name}} </span>
              </div>
          </div>
        </div>

      </div>
    </main>

  </div>
</template>

<script>
import SearchInput from '@/components/input/SearchInput'
import { getSearchResult } from '@/api/search.js'
export default {
  name: 'SearchResult',
  components: {
    SearchInput
  },
  data () {
    return {
      keyword: this.$route.query.keyword,
      list: []
    }
  },
  methods: {
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
      this.$router.push({
        path: '/searchresult',
        query: {
          keyword
        }
      })
    },
    getSearchResult () {
      getSearchResult(this.keyword).then(res => {
        if (res.code === 1) {
          this.list = res.data.data
        } else {
          alert(res.message)
        }
      }).catch(err => {
        alert(err)
      })
    },
    toDetail (id) {
      this.$router.push({
        path: '/details',
        query: {
          id
        }
      })
    }
  },
  filters: {
    formatYi (val1, keyword) {
      return val1.replace(keyword, `<span class="red"> ${keyword}</span>`)
    }
  },
  created () {
    this.getSearchResult()
  }
}
</script>
<style lang="scss" scoped>
.page-SearchResult{
  display: flex;
  flex-direction: column;
  height: 100%;
  .main_index {
    flex: 1;
    overflow-y: auto;
    padding: 0 16px;
    .searchList{
      width: 343px;
      height: 96px;
      margin: 8px auto;
    }
    .search_list_img{
      float: left;
      height: 96px;
      width: 72px;
     .comic_cover img{
        height: 100%;
        width: 100%;
      }
    }
    .search_list_delete{
        float: left;
        width:260px;
        margin-top:8px;
        margin-left: 8px;
        .sarchList_title{
          height: 24px;
          line-height: 24px;
          font-size:14px;
          color: #666;
          font-weight: 500;
          .red{
            color: red;
          }
        }
        .sina_nickname{
          height: 24px;
          line-height: 24px;
          font-size:12px;
          color: #999;
          .red{
            color: red;
          }
        }
    }
  }
}
</style>
