<template>
<div>
<!-- listing1 starts -->
  <div class="cate_list filter_list highList">
    <div v-for="item in cates" :key="item.cate_id">
     <div class="cate_list_item filter_item">
            {{item.cate_cn_name}}
        </div>
    </div>
    </div>

    <!-- listing1 ends -->

 <!-- listing2 starts -->
    <div class="showFilterLayout">
        <div class="show_filter">
            <div class="end_status_list filter_list">
                <div v-for="item in catesEnd " :key="item.end_status" >
                   <div class="end_status_list_item filter_item">
                    {{item.end_status_name}}
                    </div>
                </div>

            </div>
            <div class="pay_status_list filter_list">
                  <div v-for="item in catesPay " :key="item.comic_pay_status" >
                    <div class="pay_status_list_item filter_item filter_active_item_red">
                    {{item.comic_pay_status_name}}
                    </div>
                  </div>
            </div>
        </div>
    </div>
    <!-- listing2 ends -->

</div>

</template>

<script>
export default {
  name: 'CateList',
  props: {
    cates: {
      require: true,
      type: Array
    },
    catesEnd: {
      require: true,
      type: Array
    },
    catesPay: {
      require: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
    .filter_list {
        display: -webkit-box;
        display: -ms-flexbox;
    display: flex;
        -webkit-box-direction: normal;
        padding: 0 .7px 0 8px;
        -webkit-box-orient: horizontal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        .filter_item {
        height: 30px;
        width: 60px;
        line-height: 30px;
        font-size: 14px;
        color: #ccc;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .filter_active_item_red {
        color: #fff;
        background: #f75d79;
        height: 24px;
        line-height: 24px;
        border: 1px solid transparent;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 54px;
        border-radius: 2px;
        margin-top: 3px
    }
    }
    }

      .showFilterLayout {
            position: relative
        }

        .show_filter {
            height: 60px;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            -webkit-transform: translateY(0);
            transform: translateY(0)
        }

        .filter_list .filter_item {
            height: 30px;
            width: 60px;
            line-height: 30px;
            font-size: 14px;
            color: #ccc;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap
        }

        .filter_list .filter_active_item {
            color: #666
        }

        .filter_list {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-direction: normal
        }

        .filter_list {
            padding: 0 .7px 0 8px;
            -webkit-box-orient: horizontal;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap
        }

        .filter_list .filter_active_item_red {
            color: #fff;
            background: #f75d79;
            height: 24px;
            line-height: 24px;
            border: 1px solid transparent;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            width: 54px;
            border-radius: 2px;
            margin-top: 3px
        }

</style>>
