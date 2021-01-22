<template>
<div>
    <div class="end_list_box scroll">
        <div class="end_list_item"
            v-for="item in finished" :key="item.object_id"
        >
            <div class="comic_cover_container">
                <div class="comic_cover">
                    <img :src="item.extra.hcover" alt=""/>
                </div>
                <div class="comic_cover_info">
                    <div class="comic_cover_titleBox">
                        <div class="comic_cover_label">
                            <div class="works_label label_bg_orange">
                                <span class="works_label_text">{{item.cate_list[0].cate_cn_name}}</span>
                            </div>
                        </div>
                        <div class="comic_cover_title">
                            {{item.extra.name}}
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'EndWorks',
  props: {
    finished: {
      require: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.comic_cover_container{
    height: 245px;
    width: 100%;
    margin: 0 0 8px;
    .comic_cover img{
        width: 100%;
        height: 211px;
        border-radius: 8px;
    }
    .comic_cover_info{
        height: 34px;
        .comic_cover_label{
            float: left;
            width: 32px;
            height: 16px;
            background: #fc7933;
            font-size: 10px;
            line-height: 16px;
            color: #efefef;
            margin:9px 8px;
            text-align: center;
        }
        .comic_cover_title{
            float: left;
            width: 300px;
            height: 26px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            min-width: 1px;
            color: #666;
            font-size: 16px;
            line-height: 26px;
            margin:4px 0;

        }
    }

}

</style>
