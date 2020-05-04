// 引入封装好的axios
import request from '@/utils/request.js'

// 一个接口暴露一个函数

export const getDetail = (id) => {
  // return的是axios返回的promise对象
  return request({
    url: '/test/wbcomic/comic/comic_show',
    method: 'GET',
    // 查询字符串参数
    params: {
      comic_id: id,
      create_source: 'h5',
      _: '1588501594216',
      _type: 'h5'

    }
  })
}

export const getComments = (id) => {
  // return的是axios返回的promise对象
  return request({
    url: '/test/wbcomic/comic/comic_comment_list',
    method: 'GET',
    // 查询字符串参数
    params: {
      comic_id: id,
      page_num: 1,
      rows_num: 3

    }
  })
}
