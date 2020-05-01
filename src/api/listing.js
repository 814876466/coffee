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
export const getFilter = () => {
  return request({
    url: '/test/wbcomic/comic/filter_result',
    method: 'GET',
    // 查询字符串参数
    params: {
      cate_id: '0',
      end_status: '0',
      comic_pay_status: '0',
      page_num: '1',
      rows_num: '20',
      order: '',
      _type: 'h5'

    }
  })
}
