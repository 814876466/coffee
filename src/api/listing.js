
import request from '@/utils/request.js'

export const getCate = () => {
  return request({
    url: '/test/wbcomic/comic/filter_list',
    method: 'GET',
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
