<template>
  <div class="page-details">
    <detail-nav :titleName="name"></detail-nav>

    <main class="main_index">
        <div class="comic_info h_comic_info">
          <div class="comic_cover"
          :style="{background: fullPic}"
          >
            <div class="comic_article ">
              <div class="comic_name">
                <span class="name">{{name}}</span><!---->
              </div>
              <div class="comic_tags_hot">
                <div class="comic_tags">
                  <span class="tags" v-for="item in tag" :key="item.cate_id">
                    {{item.cate_name}}
                  </span>
                </div>
                <div class="comic_hot">
                  <i class="iconfont icon-hot"></i>
                  <span>热度值：</span>
                  <span class="hot_num">{{hotNum}}</span>
                </div>
              </div>
          </div>
          </div>

        </div>

        <!-- 简介 -->
        <div class="detail_wrap">
          <div class="details">
            <div class="bold">
              简介
            </div>
            {{desc}}
          </div>
          <div class="author">
            <span class="bold">作者：</span>
            <div class="author_item">
                <img src="http://tvax4.sinaimg.cn/default/images/default_avatar_male_180.gif">
              {{nickname}}
            </div>
          </div>
        </div>

        <!-- 评论 -->
       <div class="comment-box">
         <div class="comment-area">
           <div class="comment-title">
             热门评论
           </div>
         </div>

         <div class="comment-list">
           <div class="comment-item">
             <div class="avatar-outer">
               <div class="avatar component_avatar">
                 <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIdKVGibhdLFkZnccKjIkAbS7IMaWdUPD5Y7B71QPKzEw53xFDgiaUajA1DWJ5SC45gBIaKkof61ib4A/132">
                </div>
              </div>
              <div class="comment-item-content"

              >
                  <div class="comment-nickname comment-line content-line">
                    <div class="bold">流年似水9997102511</div>
                    <div class="comment-time comment-line">2020-04-30</div>
                  </div>
                  <div class="comment-content comment-line content-line">

                  </div>
              </div>
            </div>
         </div>

       </div>
       <!-- 更多评论 -->
       <div class="comment_more">
           <button class="moreComment">更多精彩评论</button>
        </div>

    </main>
  </div>
</template>

<script>
import { getDetail, getComments } from '../../api/details.js'
import DetailNav from '../../components/DetailNav'
export default {
  name: 'Details',
  data () {
    return {
      id: this.$route.query.id,
      name: '',
      pic: '',
      tag: [],
      hotNum: '',
      desc: '',
      nickname: '',
      // comments: [pic, name, time, comments]
      userId: [],
      userName: [],
      commentId: []

    }
  },
  computed: {
    fullPic: function () {
      return `url('https://img.manhua.weibo.com/${this.pic}')`
    }
  },
  components: {
    DetailNav
  },
  methods: {
    getDetail () {
      getDetail(this.id).then(res => {
        if (res.code === 1) {
          this.name = res.data.comic.name
          this.pic = res.data.comic.hcover
          this.tag = res.data.comic_cate
          this.hotNum = res.data.comic.comic_hot_value_text
          this.desc = res.data.comic.description
          this.nickname = res.data.comic.sina_nickname
        } else {
          alert(res.message)
        }
      }).catch(err => {
        alert(err)
      })
    },
    getComments () {
      getComments(this.id).then(res => {
        if (res.code === 1) {
          this.userId = res.data.user.user_id
          this.userName = res.data.user.user_nickname
          this.commentId = res.data.data.comment_id
        } else {
          alert(res.message)
        }
      }).catch(err => {
        alert(err)
      })
    }
  },
  created () {
    this.getDetail()
    this.getComments()
  }
}
</script>

<style lang="scss" scoped>
.page-details{
  display: flex;
  flex-direction: column;
  height: 100%;
  .main_index {
    background: #eee;
    flex: 1;
    overflow-y: auto;
    .comic_info {
      .comic_cover{
        height: 210px;
        width:100%;
        // background: url('../../assets/img/test.jpg');
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
        position: relative;
        .comic_article{
        position: absolute;
        top: 110px;
        left: 0px;
        height: 100px ;
        width: 100%;
        padding: 16px 0 0;
        .comic_name{
          padding: 0 16px;
          height: 26px;
          font-size: 20px;
          color: #fff;
          line-height: 26px;
        }
        .comic_tags_hot{
          padding: 0 16px;
          height: 26px;
          font-size: 16px;
          color: #fff;

          .comic_tags{
            float: left;
            margin-top:8px;
            width: 144px;
            height: 18px;
            line-height: 18px;
          }
          .comic_hot{
            float: right;
            margin-top:8px;
            width:198px;
            height: 18px;
            line-height: 18px;
            text-align: right;
            .icon-hot{
              color: orange;
            }

          }
        }
        }

      }
    }
    .detail_wrap{
      margin:8px;
      // width:100%;
      background: #fff;
      .details{
        padding:11px 8px;
        width:100%;
        color:#666;
         font-size: 14px;
         line-height: 2em;
        .bold{
          font-weight: 600;
        }

      }
      .author{
        height:32px;
        padding-top: 8px;
        color:#666;
        .bold{
          float: left;
          height: 24px;
          width:42px;
          font-size: 14px;
        }
        .author_item{
          float: left;
          height: 26px;
          margin-left: 10px;
          font-size:12px;
          line-height: 26px;
          img{
            height: 26px;
            width:26px;
            margin-right: 10px;
          }
        }

      }
    }
    .comment-box{
      margin:8px;
      background: #fff;
      color: #666;
      .comment-area{
        padding-left: 8px;
         height: 44px;
        line-height: 44px;
        font-size: 18px;
        background: #fff;
      }
      .comment-list{
        background: #fff;
        padding: 8px 16px 0;
        .avatar-outer{
          float: left;
          height: 32px;
          width:32px;
          border-radius:50%;
          img{
            width:100%;
            height: 100%;
          }
        }
        .comment-item-content{
          float: right;
          width: 280px;
          .comment-nickname{
            margin: 4px 0 5px;
            padding: 1 8px;
            .bold{
              float: left;
              font-size: 14px;
            }
            .comment-time{
              float: right;
              widows: 24px;
              font-size: 12px;
              color: #ccc;
            }
          }
          .comment-content{
            margin: 0 0 8px;
            padding: 0 8px;
            font-size: 16px;
          }
        }
      }
    }
    .comment_more{
      margin:8px;
      background: #fff;
      color: #666;
      text-align: center;
      padding: 10px;
      .moreComment{
        margin: auto;
        background: #fff;
        border: 1px solid #e6e6e6;
        border-radius: 22px;
        text-align: center;
        outline: none;
        height: 36px;
        width: 116px;
      }
    }

  }
}
</style>
