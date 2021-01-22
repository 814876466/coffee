// 引入封装好的axios
import request from '@/utils/request.js'

// 一个接口暴露一个函数

export const getHot = () => {
  return request({
    url: '/test/wbcomic/home/hot_words',
    method: 'GET',
    // 查询字符串参数
    params: {
      _type: 'h5'
    }
  })
}

export const getSearchResult = (word) => {
  return request({
    url: '/test/wbcomic/home/search',
    method: 'GET',
    // 查询字符串参数
    params: {
      word,
      page_num: 1,
      _type: 'h5'
    }
  })
}
