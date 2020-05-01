<template>
  <div class="page-listing">
   <navigator :titleName="title"></navigator>

   <cate-list
   :cates="cate"
   :catesEnd='cateEnd'
   :catesPay='catePay'
   ></cate-list>

   <main class="main_index">
      <cast-filter
      :filterItem='filters'
      ></cast-filter>
   </main>
  </div>
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
      filters: []
    }
  },
  components: {
    Navigator,
    CateList,
    CastFilter
  },
  created () {
    getCate().then(res => {
      if (res.code === 1) {
        this.cate = res.data.cate_list
        this.cateEnd = res.data.end_status_list
        this.catePay = res.data.comic_pay_status_list
      } else {
        alert(res.message)
      }
    }).catch(err => {
      alert(err)
    })

    getFilter().then(res => {
      console.log(res)
      if (res.code === 1) {
        this.filters = res.data.data
      } else {
        alert(res.message)
      }
    }).catch(err => {
      alert(err)
    })
  }
}
</script>
<style lang="scss" scoped>
.page-listing {
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
