<template>
<div class="search_page">
                <div class="hot_search">
                    <div class="hot_search_header">
                        <div class="search_title">热门搜索</div>
                        <div class="search_icon refresh"
                    @click="fresh"
                        >
                            <i class="iconfont icon-fresh"></i>
                        </div>
                    </div>
                    <ul class="hot_search_conent">
                        <li class="search_label"
                        v-for="(item,index) in hot" :key="index"
                        v-show="index<=11"
                        >
                            <a href="javascript:;" class=""
                            @click="toSearchResult(item.title)"
                            >
                                {{item.title}}
                            </a>
                        </li>
                    </ul>
                </div>
</div>
</template>

<script>
export default {
  name: 'HotSearch',
  props: {
    hot: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      searchItem: ''
    }
  },
  methods: {
    fresh () {
      console.log(123)
    },
    toSearchResult (item) {
      this.searchItem = item
      this.$emit('toSearch', this.searchItem)
    }
  }
}
</script>
<style  lang="scss" scoped>
.hot_search {
    padding: 16px 16px 24px;
    box-sizing: border-box;
    width: 100%;
    .hot_search_header {
    width: 343px;
    height: 44px;
}

.search_title {
    float: left;
    width: 299px;
    font-size: 18px;
    color: #666;
    letter-spacing: 0;
    line-height: 44px;
    font-weight: 700;
}

.search_label {
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    background: #efefef;
    border-radius: 2px;
    margin-right: 16px;
    margin-bottom: 8px;
    padding: 0 17px;
    height: 36px;
    line-height: 36px;
    color: #666;
    font-size: 14px;
    a{
        text-decoration: none;
        color: #666;
         &:active {
            color: #000;
        }
    }

    .search_icon {
        float: right;
        height: 44px;
        width: 44px;
        color: #999;
        line-height: 44px;
        font-size: 30px;
        text-align: center;
    }
}

}
.history {
    padding: 0px 16px 24px;
    box-sizing: border-box;
    width: 100%;
}

</style>
