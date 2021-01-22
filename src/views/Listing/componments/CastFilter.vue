<template>
  <!-- category starts -->
        <div class="category_loaded pt60">
            <div class="loadMoreWraper scroll">
                <div class="loadMore">
                    <div class="category_comic_container">
                        <div class="comic_cover_container"
                            v-for="item in filterItem" :key="item.comic_id"
                        >
                            <div class="comic_cover">
                                <img :src="item.comic_hcover" alt="">
                            </div>
                            <!---->
                            <div class="comic_cover_info">
                                <div class="comic_cover_titleBox">
                                    <!---->
                                    <div class="comic_cover_title">
                                        {{item.comic_name}}
                                    </div>
                                    <!---->
                                </div>
                                <div class=" comic_cover_desc">
                                    {{item.comic_desc}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- category ends -->
</template>

<script>
export default {
  name: 'CastFilter',
  props: {
    filterItem: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.category_loaded {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

    }

    .comic_cover_container {
        width: 150px;
        height: 161px;
        /* flex: 1; */

    }

    .comic_cover_container img {
        border-radius: 8px;
        height: 105px;
        width: 100%;
    }

    .comic_cover_info {
        width: 100%;
        height: 56px;

    }

    .comic_cover_title {
        height: 22px;
        line-height: 22px;
        font-size: 14px;
        color: #666;
    }

    .comic_cover_desc {
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #999;
    }
</style>
