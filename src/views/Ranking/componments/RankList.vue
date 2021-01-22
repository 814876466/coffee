<template>

<div class="rank_list_box scroll">
  <div class="rank_list_con">
    <div class="comic_horizontal_container"
    v-for="(item,index) in datas" :key="item.comic_id"
    >
      <div class="comic_cover comice_horizontal_cover">
        <img :src="item.hcover" alt="">
      </div>
      <div class="comic_cover_horizontal_info">
          <div class="comic_cover_horizontal_title">
            {{item.name}}
          </div>
          <div class="comic_cover_horizontal_author">
              <img src="@/assets/icon/cast1.png" alt="">

                 <span v-if="item.cate_list">
                   <span
                   v-for="(num, index) in item.cate_list"
                   :key="num.cate_id"
                   v-show="index<=2"
                   >{{num.cate_cn_name}} </span>
                 </span>

          </div>
          <div class="comic_cover_horizontal_author">
             <img src="@/assets/icon/cast2.png" alt="">
               {{item.sina_nickname}}
          </div>
      </div>

      <div v-show="isRanking" :class="`item-ranking-${index < 3 ? index + 1 : 'other'}`">
        {{ index | filterA }}
      </div>

        </div>
        </div>

  </div>
</template>

<script>
export default {
  name: 'RankList',
  props: {
    isRanking: {
      type: Boolean,
      default: false
    },
    datas: {
      type: Array,
      required: true
    }
  },
  filters: {
    filterA (value) {
      return value < 3 ? '' : value + 1
    }
  }
}
</script>

<style lang="scss" scoped>
.rank_list_box{
  padding-top: 16px;
  width: 100%;
  .comic_horizontal_container{
    height: 97px;
  .comice_horizontal_cover{
    float: left;
    height: 81px;
    width: 144px;
    margin-right: 4px;
    img{
      height: 100%;
      width: 100%;
      border-radius: 8px;
    }
    }
  .comic_cover_horizontal_info{
    float: left;
    width: 140px;
    height: 81px;
    .comic_cover_horizontal_title{
      margin-top: 4px;
      color: #333;
      padding: 0 0 8px;
      height: 32px;
      line-height: 32px;
      font-size: 16px;
      overflow: hidden;
      text-overflow:hidden;
      white-space: nowrap;
    }
    .comic_cover_horizontal_author{
      height: 24px;
      line-height: 24px;
      font-size: 12px;
      color: #000;
      img{
        height: 12px;
        width: 12px;
      }
    }
    }

    }
      .item-ranking-1{
        margin-top: 19px;
        float: left;
        height: 60px;
        width: 45px;
        background: url('../../../assets/icon/rank1.png') no-repeat;
        background-size: 40px 45px;
    }
      .item-ranking-2{
      margin-top: 19px;
      float: left;
      height: 60px;
      width: 45px;
      background: url('../../../assets/icon/rank2.png') no-repeat;
      background-size: 40px 45px;
    }

    .item-ranking-3{
    margin-top: 19px;
    float: left;
    height: 60px;
    width: 45px;
    background: url('../../../assets/icon/rank3.png') no-repeat;
    background-size: 40px 45px;
  }
    .item-ranking-other{
      margin-top: 19px;
      float: left;
      height: 60px;
      width: 45px;
      line-height: 60px;
      font-size: 18px;
      color: #666;
      text-align: center;
    }

}
</style>
