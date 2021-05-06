
import request from '@/utils/request.js'

export const getHot = () => {
  return request({
    url: '/test/wbcomic/home/hot_words',
    method: 'GET',
    params: {
      _type: 'h5'
    }
  })
}

export const getSearchResult = (word) => {
  return request({
    url: '/test/wbcomic/home/search',
    method: 'GET',
    params: {
      word,
      page_num: 1,
      _type: 'h5'
    }
  })
}
