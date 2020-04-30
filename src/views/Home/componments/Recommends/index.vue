<template>
  <div>
    <div class="blocks"></div>
    <!-- block1 begins -->
    <div class="recommend_block">
      <div class="home_recommend_header">
        <div class="home_recommend_title">精品佳作</div>
        <div class="home_recommend_more">更多&gt;</div>
      </div>
      <div>
        <div class="home_recommend_comics threeClassic">
          <div
            class="home_recommend_comic"
            v-for="(item,index) in info"
            :key="item.object_id"
            v-show="index<=2"
          >
            <div class="comic_cover_container">
              <div class="comic_cover">
                <img :src="item.image_ext_url" alt />
              </div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title">{{item.extra.name}}</div>
                  <!---->
                </div>
                <div class="comic_cover_desc">{{item.extra.watching_focus}}</div>
              </div>
            </div>
          </div>
        </div>
        <!---->
      </div>
    </div>
    <!-- block1 ends -->
    <div class="blocks"></div>

    <!-- block2 starts -->
    <div class="recommend_block">
      <div class="home_recommend_header">
        <div class="home_recommend_title">人气作品</div>
        <div class="home_recommend_more">更多&gt;</div>
      </div>
      <div>
        <div class="home_recommend_comics fourClassic">
          <div
            class="home_recommend_comic"
            v-for="(item,index) in infoTwo"
            :key="item.object_id"
            v-show="index<=3"
          >
            <div class="comic_cover_container" style="width: 100%;">
              <div class="comic_cover">
                <img :src="item.image_ext_url" alt />
              </div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title">{{item.extra.name}}</div>
                  <!---->
                </div>
                <div class="comic_cover_desc">{{item.extra.watching_focus}}</div>
              </div>
            </div>
          </div>
        </div>
        <!---->
      </div>
    </div>
    <!-- block2 ends -->

    <div class="blocks"></div>

    <!-- block3 start -->
    <div class="recommend_block">
      <div class="home_recommend_header">
        <div class="home_recommend_title">最新上架</div>
        <div class="home_recommend_more">更多&gt;</div>
      </div>
      <div>
        <!---->
        <div class="home_recommend_comics threeColumn">
          <div
            class="home_recommend_comic"
            v-for="(item,index) in infoThree"
            :key="item.object_id"
            v-show="index<=2"
          >
            <div class="comic_horizontal_container">
              <div class="comic_cover comice_horizontal_cover">
                <img :src="item.image_ext_url" alt />
              </div>
              <div class="comic_cover_horizontal_info">
                <div class="comic_cover_horizontal_title">{{item.extra.name}}</div>
                <div class="comic_cover_horizontal_author">
                  <img src="../../../../assets/icon/tick.png" />
                  恋爱、总裁
                </div>
                <div class="comic_cover_horizontal_author">
                  <img src="@/assets/icon/icon.png" />
                  翻阅漫画
                </div>
              </div>
              <!---->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- block3 ends -->
  </div>
</template>

<script>
export default {
  name: 'Recommends',
  props: {
    info: {
      type: Array,
      required: true
    },
    infoTwo: {
      type: Array,
      required: true
    },
    infoThree: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
/* recommend start */
.recommend_block {
  border-radius: 8px;
}

.home_recommend_header {
  /* padding: 0 16px; */
  height: 44px;
  line-height: 44px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.home_recommend_header .home_recommend_title {
  font-size: 18px;
  color: #666;
  padding-left: 26px;
  position: relative;
  &::before {
    position: absolute;
    top: 8px;
    left: 0;
    content: '';
    width: 22px;
    height: 22px;
    background: url('~@/assets/icon/icon.png');
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }
}

.home_recommend_header .home_recommend_more {
  font-size: 12px;
  color: #fff;
  width: 42px;
  height: 20px;
  text-align: center;
  line-height: 22px;
  background: #4a90e2;
  border-radius: 10px;
}

.home_recommend_comics {
  /* padding: 0 16px; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
}

.home_recommend_comics .home_recommend_comic {
  margin-bottom: 8px;
}

.home_recommend_comics .threeClassic .home_recommend_comic {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 40%;
  flex: 1 0 40%;
  overflow: hidden;
  max-width: 167.5px;
}

.home_recommend_comics.threeClassic .home_recommend_comic .comic_cover {
  height: 90px;
}

.home_recommend_comics.threeClassic .home_recommend_comic:first-child {
  max-width: 100%;
  width: 100%;
  -webkit-box-flex: 1;
  -ms-flex: auto;
  flex: auto;
}

.home_recommend_comics.threeClassic
  .home_recommend_comic:first-child
  .comic_cover {
  height: 215px;
}

.home_recommend_comics.threeClassic .home_recommend_comic:nth-child(2) {
  margin-right: 8px;
}

.comic_cover_container .comic_cover {
  border-radius: 8px;
}

.comic_cover img {
  height: 100%;
}

.comice_horizontal_cover img {
  height: 100%;
}

.comic_cover_container {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.comic_cover_container .comic_cover {
  border-radius: 8px;
}

.comic_cover_info {
  margin: 8px 0 0;
}

.comic_cover_titleBox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 8px 0 0 0;
}

.comic_cover_title {
  width: 100%;
  color: #666;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 1px;
}

.comic_cover_author,
.comic_cover_desc {
  color: #999;
  margin-bottom: 6px;
  font-size: 12px;
}

.comic_cover_desc,
.comic_cover_title {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

/* recommend1 end*/

/* block2 starts */
.home_recommend_comics.fourClassic .home_recommend_comic {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 40%;
  flex: 1 0 40%;
  overflow: hidden;
  max-width: 167.5px;
}

.home_recommend_comics.fourClassic .home_recommend_comic .comic_cover {
  height: 105px;
}

.home_recommend_comics.fourClassic .home_recommend_comic:nth-child(odd) {
  margin-right: 8px;
}

.home_recommend_comics.threeRow {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
}

.home_recommend_comics.threeRow .home_recommend_comic {
  width: 109px;
  margin-left: 8px;
}

.home_recommend_comics.threeRow .home_recommend_comic .comic_cover {
  height: 15px;
}

.home_recommend_comics.threeRow .home_recommend_comic:first-child {
  margin-left: 0;
}

.home_recommend_comics.threeRow .comic_cover_info {
  text-align: center;
}

.home_recommend_comics.threeColumn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  padding: 0;
}

.home_recommend_comics.threeColumn .home_recommend_comic {
  margin-bottom: 16px;
  height: 90px;
  width: 100%;
}

.home_recommend_comics.threeColumn .home_recommend_comic .comic_cover {
  width: 1160px !important;
  height: 90px;
}

.home_recommend_comics.threeColumn .home_recommend_comic:first-child {
  margin-left: 0;
}

/* block2 end */

/* block3 starts */
.comic_cover_desc,
.comic_cover_horizontal_info .comic_cover_horizontal_author,
.comic_cover_horizontal_info .comic_cover_horizontal_title,
.comic_cover_title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 1px;
}

.comic_horizontal_container {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  padding: 0 8px 8px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.comic_horizontal_container .comice_horizontal_cover {
  margin-right: 4px;
  border-radius: 4px;
}

.comic_cover_horizontal_rank {
  width: 40px;
  height: 45px;
}

.comic_cover_horizontal_info {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding-right: 8px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
}

.comic_cover_horizontal_info .comic_cover_horizontal_title {
  margin-top: 4px;
  color: #333;
  line-height: 24px;
  padding-bottom: 8px;
}

.comic_cover_horizontal_info .comic_cover_horizontal_author {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 8px;
}

.comic_cover_horizontal_info .comic_cover_horizontal_author:nth-child(2) {
  padding-bottom: 8px;
}

.comic_cover_horizontal_info .comic_cover_horizontal_author img {
  float: left;
  width: 8px;
  height: 8px;
}

.comic_cover_horizontal_rank .rank_num {
  padding-top: 20px;
  font-size: 18px;
  color: #666;
  text-align: center;
  line-height: 18px;
}

/*  block3 ends*/
</style>
