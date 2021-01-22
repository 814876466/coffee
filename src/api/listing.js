// 引入封装好的axios
import request from '@/utils/request.js'

// 一个接口暴露一个函数

export const getCate = () => {
  return request({
    url: '/test/wbcomic/comic/filter_list',
    method: 'GET',
    // 查询字符串参数
    params: {
      _type: 'h5'

    }
  })
}
/* eslint-disable */
export const getFilter = (cate_id, end_status, comic_pay_status) => {
  return request({
    url: '/test/wbcomic/comic/filter_result',
    method: 'GET',
    // 查询字符串参数
    params: {
      cate_id,
      end_status,
      comic_pay_status,
      page_num: '1',
      rows_num: '20',
      order: '',
      _type: 'h5'

    }
  })
}
/* eslint-enabled */
