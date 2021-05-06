<template>
<div class="search_header">
            <form method="get" action="javascript:void(0);">
                <div class="search_frame">
                    <span class="search_frame_icon">
                        <i class="iconfont icon-fangdajing"
                        @click="sendSearch"
                        >
                        </i>
                    </span>
                    <input placeholder="please searching"
                    v-model="searchVal"
                    >
                    <span class="search_clear_icon">
                        <i class="iconfont icon-close-circle-o"
                        @click="clearInput"
                        v-show="searchVal!==''"
                        ></i>
                    </span>
                </div>
            </form>
            <div class="search_fix_btn">

                <span v-if="searchVal===''"
                @click="$router.back()"
                >Cancel</span>
                <span v-else
                @click="sendSearch"
                >Search</span>

            </div>
</div>
</template>

<script>
export default {
  name: 'SearchInput',
  data () {
    return {
      searchVal: ''
    }
  },
  props: {
    historyRes: {
      type: Array
    }
  },
  methods: {
    sendSearch () {
      if (this.searchVal === '') {
        alert('why empty???')
      } else {
        this.$emit('seaVal', this.searchVal)
      }
    },
    clearInput () {
      this.searchVal = ''
    }

  }
}
</script>

<style lang="scss" scoped>
.search_header {
        margin: 16px 16px 0;
        height: 44px;
        width: 100%;

     .search_frame {
        float: left;
        width: 288px;
        height: 44px;
        border-radius: 4px;
        -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .1);
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .1);
         input {
        border: none;
        height: 27px;
        width: 200px;
        padding: 4px 0 1px;
        color: #666;
    }

    input::-webkit-input-placeholder {
        color: #999;
    }

    input::-ms-input-placeholder {
        color: #999;
    }

    .search_frame_icon {
        height: 44px;
        width: 44px;
    }

    .icon-fangdajing {
        font-size: 28px;
        line-height: 44px;
        text-align: center;
        color: #666;
    }

    .search_clear_icon {
        float: right;
        height: 44px;
        width: 44px;
    }

    .icon-close-circle-o {
        font-size: 20px;
        line-height: 44px;
        text-align: center;
        color: #666;
    }
    }

    .search_fix_btn {
        float: left;
        height: 24px;
        width: 44px;
        margin: 10px 0 10px 11px;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #666;

    }
    }

</style>
