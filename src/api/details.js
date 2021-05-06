
import request from '@/utils/request.js'

export const getDetail = (id) => {
  return request({
    url: '/test/wbcomic/comic/comic_show',
    method: 'GET',
    params: {
      comic_id: id,
      create_source: 'h5',
      _: '1588501594216',
      _type: 'h5'

    }
  })
}

export const getComments = (id) => {
  return request({
    url: '/test/wbcomic/comic/comic_comment_list',
    method: 'GET',
    params: {
      comic_id: id,
      page_num: 1,
      rows_num: 3

    }
  })
}
