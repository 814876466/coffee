/* eslint-disable no-unreachable */
<template>
 <!-- <transition
 appear
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutLeft"

    > -->
    <div class="page-listing">
    <navigator :titleName="title"></navigator>

    <cate-list
      :cates="cate"
      :catesEnd="cateEnd"
      :catesPay="catePay"
      @click="onTypeChange"
    ></cate-list>

    <main class="main_index">
      <cast-filter :filterItem="filters"></cast-filter>
    </main>
  </div>

    <!-- </transition> -->

</template>

<script>
import Navigator from '../../components/Navigator'
import CateList from './componments/CateList'
import CastFilter from './componments/CastFilter'
import { getCate, getFilter } from '../../api/listing.js'
export default {
  name: 'Listing',
  data () {
    return {
      title: '分类',
      cate: [],
      cateEnd: [],
      catePay: [],
      filters: [],
      typesId: 0,
      typesEnd: 0,
      typesPay: 0

    }
  },
  components: {
    Navigator,
    CateList,
    CastFilter
  },
  methods: {
    getCate () {
      return getCate()
        .then(res => {
          if (res.code === 1) {
            this.cate = res.data.cate_list
            this.cateEnd = res.data.end_status_list
            this.catePay = res.data.comic_pay_status_list
          } else {
            alert(res.message)
          }
        })
        .catch(err => {
          alert(err)
        })
    },
    getFilter (typesId, typesEnd, typesPay) {
      getFilter(typesId, typesEnd, typesPay)
        .then(res => {
          if (res.code === 1) {
            this.filters = res.data.data
          } else {
            alert(res.message)
          }
        })
        .catch(err => {
          alert(err)
        })
    },
    onTypeChange (payload) {
      if (payload.item.comic_pay_status === undefined) {
        payload.item.comic_pay_status = 0
      }
      if (payload.item.cate_id === undefined) {
        payload.item.cate_id = 0
      }
      if (payload.item.end_status === undefined) {
        payload.item.end_status = 0
      }
      this.typesId = payload.item.cate_id
      this.typesEnd = payload.item.end_status
      this.typesPay = payload.item.comic_pay_status

      this.getFilter(this.typesId, this.typesEnd, this.typesPay)
    }
  },
  async created () {
    await this.getCate()
    this.getFilter()
  }
}
</script>
<style lang="scss" scoped>
.page-listing {
  position: absolute;
top: 0;
left: 0;
width: 100%;
background: #fff;
z-index: 999;
  display: flex;
  flex-direction: column;
  height: 100%;
  .main_index {
    flex: 1;
    overflow-y: auto;
    padding: 0 16px;
  }
}
</style>
